import Image from "next/image"
import { wedding } from "@/lib/wedding-config"
import { SectionHeading } from "./section-heading"

export function DressCode() {
  const { dressCode } = wedding

  return (
    <section id="dress-code" className="relative bg-card px-6 py-24 sm:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <SectionHeading title={dressCode.title} subtitle={dressCode.subtitle} />

        <div className="mt-14 w-full max-w-xs overflow-hidden rounded-sm">
          <Image
            src={dressCode.image || "/placeholder.svg"}
            alt={dressCode.imageAlt}
            width={500}
            height={620}
            className="h-auto w-full"
          />
        </div>

        <p className="mt-10 max-w-md text-center font-display text-2xl leading-relaxed text-foreground/90 text-pretty">
          {dressCode.description}
        </p>
      </div>
    </section>
  )
}
