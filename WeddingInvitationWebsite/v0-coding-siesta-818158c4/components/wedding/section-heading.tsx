import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: "center" | "left"
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-muted-foreground/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      >
        <path d="M12 3v18M5 9h14" />
      </svg>
      <h2 className="display text-4xl leading-none text-foreground sm:text-5xl md:text-6xl text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="label-caps text-[0.7rem] sm:text-xs text-pretty">{subtitle}</p>
      ) : null}
      <span
        aria-hidden
        className="mt-1 h-px w-16 bg-border"
        style={align === "center" ? { marginInline: "auto" } : undefined}
      />
    </div>
  )
}
