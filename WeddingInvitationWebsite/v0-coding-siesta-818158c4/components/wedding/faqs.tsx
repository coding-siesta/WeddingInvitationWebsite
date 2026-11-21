"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { wedding } from "@/lib/wedding-config"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

export function Faqs() {
  const { faqs } = wedding
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faqs" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title={faqs.title} subtitle={faqs.subtitle} />

        <div className="mt-14 flex flex-col">
          {faqs.items.map((item, i) => {
            const open = openIndex === i
            return (
              <article key={i} className="border-b border-border">
                <h3>
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="label-caps text-[0.65rem] text-foreground sm:text-[0.7rem]">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-muted-foreground">
                      {open ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                </h3>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 font-display text-xl leading-relaxed text-foreground/85 text-pretty">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
