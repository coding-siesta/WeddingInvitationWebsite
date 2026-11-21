import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Decorative botanical sketch placed in a corner. Purely decorative, so it is
 * hidden from screen readers.
 */
export function FloralCorner({
  position = "bottom-left",
  className,
}: {
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right"
  className?: string
}) {
  const positionClasses: Record<string, string> = {
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0 -scale-x-100",
    "top-left": "top-0 left-0 -scale-y-100",
    "top-right": "top-0 right-0 -scale-100",
  }

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-0 w-32 select-none opacity-80 sm:w-44 md:w-56",
        positionClasses[position],
        className,
      )}
    >
      <Image
        src="/images/floral-corner.png"
        alt=""
        width={400}
        height={400}
        className="h-auto w-full"
        priority={false}
      />
    </div>
  )
}
