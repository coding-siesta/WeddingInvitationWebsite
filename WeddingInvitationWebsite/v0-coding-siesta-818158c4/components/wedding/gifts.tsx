import { wedding } from "@/lib/wedding-config"
import { SectionHeading } from "./section-heading"

export function Gifts() {
  const { gifts } = wedding

  return (
    <section id="gifts" className="relative bg-card px-6 py-24 sm:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <SectionHeading title={gifts.title} subtitle={gifts.subtitle} />

        <p className="mt-10 max-w-lg text-center font-display text-2xl leading-relaxed text-foreground/90 text-pretty">
          {gifts.description}
        </p>
      </div>
    </section>
  )
}
