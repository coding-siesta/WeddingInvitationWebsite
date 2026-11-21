import { Clock, Heart, Wine, UtensilsCrossed, Sparkles, type LucideIcon } from "lucide-react"
import { wedding } from "@/lib/wedding-config"
import { SectionHeading } from "./section-heading"

// Cycled through for each timeline event, in order.
const icons: LucideIcon[] = [Clock, Heart, Wine, UtensilsCrossed, Sparkles]

export function Timeline() {
  const { timeline } = wedding

  return (
    <section id="timeline" className="relative bg-card px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={timeline.title} subtitle={timeline.subtitle} />

        <ol className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {timeline.events.map((event, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li key={i} className="flex flex-col items-center gap-4 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border text-foreground">
                  <Icon size={24} strokeWidth={1.25} />
                </span>
                <span className="display text-2xl text-foreground">{event.time}</span>
                <span className="label-caps text-[0.6rem] leading-relaxed">
                  {event.title}
                </span>
              </li>
            )
          })}
        </ol>

        <div className="mt-20 flex flex-col items-center gap-2 text-center">
          <p className="label-caps text-[0.65rem]">{timeline.venueLabel}</p>
          <p className="display text-3xl text-foreground sm:text-4xl">{timeline.venueName}</p>
        </div>
      </div>
    </section>
  )
}
