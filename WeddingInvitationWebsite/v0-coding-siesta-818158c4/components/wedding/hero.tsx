import Image from "next/image"
import { wedding } from "@/lib/wedding-config"
import { FloralCorner } from "./floral-corner"

export function Hero() {
  const { couple, event, hero } = wedding

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <FloralCorner position="bottom-left" />
      <FloralCorner position="top-right" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <p className="label-caps text-[0.7rem] sm:text-xs">{hero.intro}</p>

        <h1 className="mt-8 flex flex-col items-center gap-1 leading-[0.85]">
          <span className="display text-6xl text-foreground sm:text-7xl md:text-8xl">
            {couple.partnerOne}
          </span>
          <span className="display text-4xl text-muted-foreground sm:text-5xl">&amp;</span>
          <span className="display text-6xl text-foreground sm:text-7xl md:text-8xl">
            {couple.partnerTwo}
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-1.5">
          <p className="label-caps text-[0.65rem] sm:text-[0.7rem]">{event.dateLabel}</p>
          <p className="label-caps text-[0.65rem] sm:text-[0.7rem]">{event.timeLabel}</p>
          <p className="label-caps text-[0.65rem] sm:text-[0.7rem]">{event.ceremonyVenue}</p>
          <p className="label-caps text-[0.65rem] sm:text-[0.7rem]">{event.receptionLabel}</p>
        </div>

        <div className="mt-12 w-full max-w-md">
          <div className="overflow-hidden rounded-sm border border-border">
            <Image
              src="/images/couple.png"
              alt={`${couple.partnerOne} and ${couple.partnerTwo}`}
              width={800}
              height={600}
              priority
              className="h-auto w-full"
            />
          </div>
          <p className="mt-6 font-display text-xl italic leading-relaxed text-foreground/90 text-pretty sm:text-2xl">
            {hero.quote}
          </p>
          <p className="label-caps mt-3 text-[0.65rem]">{hero.quoteSource}</p>
        </div>
      </div>
    </section>
  )
}
