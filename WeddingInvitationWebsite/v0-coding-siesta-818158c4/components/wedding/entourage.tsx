import { wedding } from "@/lib/wedding-config"
import { SectionHeading } from "./section-heading"

export function Entourage() {
  const { entourage } = wedding

  return (
    <section id="entourage" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={entourage.title} subtitle={entourage.subtitle} />

        <div className="mt-16 flex flex-col gap-16">
          {entourage.sections.map((section, sIdx) => (
            <div key={sIdx} className="flex flex-col items-center gap-10">
              {section.sectionLabel ? (
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="label-caps text-[0.7rem] text-foreground">
                    {section.sectionLabel}
                  </p>
                  {"sectionNote" in section && section.sectionNote ? (
                    <p className="label-caps text-[0.6rem]">{section.sectionNote}</p>
                  ) : null}
                </div>
              ) : null}

              <div className="grid w-full grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
                {section.groups.map((group, gIdx) => (
                  <div key={gIdx} className="flex flex-col items-center gap-3 text-center">
                    {group.heading ? (
                      <h3 className="label-caps text-[0.65rem] text-foreground">
                        {group.heading}
                      </h3>
                    ) : null}
                    <p className="flex flex-col gap-1 font-display text-xl leading-snug text-foreground/90">
                      {group.names.map((name, nIdx) =>
                        name === "" ? (
                          <span key={nIdx} aria-hidden className="h-2" />
                        ) : (
                          <span key={nIdx}>{name}</span>
                        ),
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
