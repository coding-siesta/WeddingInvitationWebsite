import Image from "next/image"
import { MapPin, Navigation } from "lucide-react"
import { wedding } from "@/lib/wedding-config"
import { SectionHeading } from "./section-heading"

export function Maps() {
  const { maps } = wedding

  return (
    <section id="maps" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={maps.title} subtitle={maps.subtitle} />

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {maps.locations.map((loc, i) => (
            <div key={i} className="flex flex-col items-center gap-5 text-center">
              <h3 className="flex flex-col gap-1">
                <span className="label-caps text-[0.7rem] text-foreground">{loc.name}</span>
                <span className="label-caps text-[0.6rem]">{loc.area}</span>
              </h3>

              <div className="w-full overflow-hidden rounded-sm border border-border">
                <Image
                  src={loc.image || "/placeholder.svg"}
                  alt={loc.imageAlt}
                  width={700}
                  height={460}
                  className="h-56 w-full object-cover"
                />
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={loc.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-[0.6rem] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <MapPin size={13} /> Google Maps
                </a>
                <a
                  href={loc.waze}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-[0.6rem] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <Navigation size={13} /> Waze
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
