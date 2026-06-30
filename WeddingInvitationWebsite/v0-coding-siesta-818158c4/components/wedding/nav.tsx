"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { wedding } from "@/lib/wedding-config"
import { cn } from "@/lib/utils"

export function Nav() {
  const [active, setActive] = useState(wedding.nav[0]?.id ?? "home")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = wedding.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))

    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <>
      {/* Top bar: monogram + hashtag + mobile menu button */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled ? "bg-background/85 backdrop-blur-sm" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button
            onClick={() => go(wedding.nav[0]?.id ?? "home")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 font-display text-lg font-medium text-foreground transition-colors hover:bg-accent"
            aria-label="Back to top"
          >
            {wedding.couple.initials}
          </button>

          <div className="flex items-center gap-4">
            {wedding.couple.hashtag ? (
              <span className="label-caps hidden text-[0.65rem] sm:inline">
                #{wedding.couple.hashtag}
              </span>
            ) : null}
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-accent lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Desktop side-dot navigation */}
      <nav
        aria-label="Section navigation"
        className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
      >
        {wedding.nav.map((item) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            className="group flex items-center gap-3"
            aria-label={item.label}
            aria-current={active === item.id ? "true" : undefined}
          >
            <span
              className={cn(
                "label-caps text-[0.6rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                active === item.id && "opacity-100 text-foreground",
              )}
            >
              {item.label}
            </span>
            <span
              className={cn(
                "h-2 w-2 rounded-full border border-foreground/50 transition-all duration-300",
                active === item.id
                  ? "scale-100 bg-foreground"
                  : "scale-75 bg-transparent group-hover:bg-foreground/40",
              )}
            />
          </button>
        ))}
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background/95 backdrop-blur transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {wedding.nav.map((item) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            className={cn(
              "label-caps text-sm transition-colors",
              active === item.id ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  )
}
