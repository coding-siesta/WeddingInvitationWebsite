"use client"

import { useState, type FormEvent } from "react"
import { wedding } from "@/lib/wedding-config"
import { SectionHeading } from "./section-heading"
import { FloralCorner } from "./floral-corner"

export function Rsvp() {
  const { rsvp } = wedding
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const submission = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      })
      const result: unknown = await response.json()

      if (
        !response.ok ||
        typeof result !== "object" ||
        result === null ||
        !("ok" in result) ||
        result.ok !== true
      ) {
        setError(
          typeof result === "object" &&
            result !== null &&
            "error" in result &&
            typeof result.error === "string"
            ? result.error
            : "We couldn't save your RSVP. Please try again.",
        )
        return
      }

      setIsSubmitted(true)
    } catch {
      setError("We couldn't send your RSVP. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="rsvp"
      className="relative overflow-hidden px-6 py-28 sm:py-32"
    >
      <FloralCorner position="bottom-right" />
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
        <SectionHeading title={rsvp.title} subtitle={rsvp.subtitle} />

        <p className="mt-10 max-w-lg text-center font-display text-2xl leading-relaxed text-foreground/90 text-pretty">
          {rsvp.description}
        </p>

        {isSubmitted ? (
          <div
            className="mt-12 flex w-full flex-col items-center border-y border-border px-6 py-10 text-center"
            role="status"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-8 w-8 text-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
            <h3 className="display mt-4 text-3xl text-foreground">
              Thank you for replying
            </h3>
            <p className="mt-2 font-display text-xl text-foreground/80">
              Your RSVP has been received. We look forward to celebrating with you!
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="label-caps mt-6 text-[0.65rem] underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 grid w-full gap-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="label-caps text-[0.6rem]">Your full name *</span>
                <input
                  autoComplete="name"
                  className="min-h-12 rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground"
                  maxLength={120}
                  name="fullName"
                  placeholder="Name on your invitation"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="label-caps text-[0.6rem]">Email (optional)</span>
                <input
                  autoComplete="email"
                  className="min-h-12 rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground"
                  maxLength={254}
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
            </div>

            <fieldset className="grid gap-3">
              <legend className="label-caps text-[0.6rem]">
                Will you be joining us? *
              </legend>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "yes", label: "Joyfully accepts" },
                  { value: "no", label: "Regretfully declines" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex min-h-12 cursor-pointer items-center gap-3 rounded-sm border border-border px-4 py-3 text-sm text-foreground transition-colors has-[:checked]:border-foreground has-[:checked]:bg-foreground/5"
                  >
                    <input
                      className="accent-foreground"
                      name="attending"
                      required
                      type="radio"
                      value={option.value}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-2">
              <span className="label-caps text-[0.6rem]">
                Note or dietary requirements (optional)
              </span>
              <textarea
                className="min-h-28 resize-y rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground"
                maxLength={1000}
                name="note"
                placeholder="Share a note with us"
                rows={4}
              />
            </label>

            <div
              aria-hidden="true"
              className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor="rsvp-website">Leave this field empty</label>
              <input
                autoComplete="off"
                id="rsvp-website"
                name="website"
                tabIndex={-1}
              />
            </div>

            {error ? (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            ) : null}

            <button
              className="label-caps mx-auto inline-flex min-h-12 items-center gap-3 rounded-full bg-foreground px-9 py-4 text-[0.65rem] text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Sending..." : rsvp.buttonLabel}
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M12 4v16M6 10h12" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
