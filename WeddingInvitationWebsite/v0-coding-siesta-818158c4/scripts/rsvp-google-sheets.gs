const SPREADSHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE"
const SHEET_NAME = "RSVPs"

function doPost(event) {
  try {
    const submission = JSON.parse(event.postData.contents)
    const fullName = cleanCell(submission.fullName)
    const email = cleanCell(submission.email)
    const attending = submission.attending
    const partyMembers = cleanCell(submission.partyMembers)
    const note = cleanCell(submission.note)

    if (!fullName || fullName.length > 120) {
      throw new Error("A valid name is required.")
    }
    if (attending !== "yes" && attending !== "no") {
      throw new Error("A valid attendance response is required.")
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    let sheet = spreadsheet.getSheetByName(SHEET_NAME)
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME)
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted at",
        "Full name",
        "Email",
        "Attending",
        "Other invited guests",
        "Note / dietary requirements",
      ])
    }

    sheet.appendRow([
      new Date(),
      fullName,
      email,
      attending === "yes" ? "Accepts" : "Declines",
      partyMembers,
      note,
    ])

    return jsonResponse({ ok: true })
  } catch (error) {
    console.error(error)
    return jsonResponse({ ok: false })
  }
}

function cleanCell(value) {
  if (typeof value !== "string") {
    return ""
  }

  const text = value.trim()
  return /^[=+\-@]/.test(text) ? "'" + text : text
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
