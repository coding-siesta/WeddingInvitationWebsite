export const runtime = "nodejs"

interface RsvpSubmission {
  fullName: string
  email: string
  attending: "yes" | "no"
  partyMembers: string
  note: string
  website: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function isText(value: unknown): value is string {
  return typeof value === "string"
}

function parseSubmission(value: unknown): RsvpSubmission | null {
  if (!isRecord(value)) return null

  const { fullName, email, attending, partyMembers, note, website } = value
  if (
    !isText(fullName) ||
    !isText(email) ||
    !isText(attending) ||
    !isText(partyMembers) ||
    !isText(note) ||
    !isText(website)
  ) {
    return null
  }

  if (attending !== "yes" && attending !== "no") {
    return null
  }

  const attendanceResponse: "yes" | "no" =
    attending === "yes" ? "yes" : "no"
  const submission = {
    fullName: fullName.trim(),
    email: email.trim(),
    attending: attendanceResponse,
    partyMembers: partyMembers.trim(),
    note: note.trim(),
    website,
  }

  if (
    !submission.fullName ||
    submission.fullName.length > 120 ||
    submission.email.length > 254 ||
    (submission.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) ||
    submission.partyMembers.length > 300 ||
    submission.note.length > 1000
  ) {
    return null
  }

  return submission
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: "Invalid form submission." }, { status: 400 })
  }

  const submission = parseSubmission(body)
  if (!submission || submission.website) {
    return Response.json({ ok: false, error: "Please check your RSVP details." }, { status: 400 })
  }

  const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL
  if (!endpoint) {
    console.error("GOOGLE_APPS_SCRIPT_URL is not configured.")
    return Response.json(
      { ok: false, error: "RSVP submissions are not available yet. Please try again later." },
      { status: 503 },
    )
  }

  let scriptUrl: URL
  try {
    scriptUrl = new URL(endpoint)
  } catch {
    console.error("GOOGLE_APPS_SCRIPT_URL is not a valid URL.")
    return Response.json(
      { ok: false, error: "RSVP submissions are not configured correctly." },
      { status: 503 },
    )
  }

  if (
    scriptUrl.protocol !== "https:" ||
    scriptUrl.hostname !== "script.google.com" ||
    !/^\/macros\/s\/[^/]+\/exec$/.test(scriptUrl.pathname)
  ) {
    console.error("GOOGLE_APPS_SCRIPT_URL must be a Google Apps Script deployment URL.")
    return Response.json(
      { ok: false, error: "RSVP submissions are not configured correctly." },
      { status: 503 },
    )
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: submission.fullName,
        email: submission.email,
        attending: submission.attending,
        partyMembers: submission.partyMembers,
        note: submission.note,
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    })

    if (!response.ok) {
      console.error(`Google Apps Script returned HTTP ${response.status}.`)
      return Response.json(
        { ok: false, error: "We couldn't save your RSVP. Please try again later." },
        { status: 502 },
      )
    }

    const result: unknown = await response.json()
    if (!isRecord(result) || result.ok !== true) {
      const scriptError =
        isRecord(result) && typeof result.error === "string"
          ? result.error
          : "No error details were returned."
      console.error(
        `Google Apps Script did not confirm the RSVP submission: ${scriptError}`,
      )
      return Response.json(
        { ok: false, error: "We couldn't save your RSVP. Please try again later." },
        { status: 502 },
      )
    }

    return Response.json({ ok: true })
  } catch (error) {
    console.error("Failed to forward RSVP submission to Google Apps Script.", error)
    return Response.json(
      { ok: false, error: "We couldn't save your RSVP. Please try again later." },
      { status: 502 },
    )
  }
}
