import { wedding } from "@/lib/wedding-config"
import { SectionHeading } from "./section-heading"
import { FloralCorner } from "./floral-corner"

export function Rsvp() {
  const { rsvp } = wedding

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

        <a
          href={rsvp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="label-caps mt-12 inline-flex items-center gap-3 rounded-full bg-foreground px-9 py-4 text-[0.65rem] text-background transition-opacity hover:opacity-90"
        >
          {rsvp.buttonLabel}
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
        </a>
      </div>
    </section>
  )
}
