"use client"

import { useEffect, useState } from "react"
import { wedding } from "@/lib/wedding-config"

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export function Countdown() {
  const target = new Date(wedding.event.isoDate).getTime()
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getTimeLeft(target))
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ]

  return (
    <section
      id="countdown"
      className="flex min-h-[60svh] flex-col items-center justify-center bg-sage px-6 py-20 text-sage-foreground"
    >
      <p className="label-caps text-[0.7rem] text-sage-foreground/80 sm:text-xs">
        {wedding.countdown.label}
      </p>

      <div className="mt-10 flex items-start gap-3 sm:gap-6">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-start gap-3 sm:gap-6">
            <div className="flex flex-col items-center">
              <span className="display text-5xl tabular-nums text-sage-foreground sm:text-7xl">
                {mounted ? String(unit.value).padStart(2, "0") : "00"}
              </span>
              <span className="label-caps mt-2 text-[0.55rem] text-sage-foreground/80 sm:text-[0.65rem]">
                {unit.label}
              </span>
            </div>
            {i < units.length - 1 ? (
              <span className="display pt-1 text-4xl text-sage-foreground/50 sm:text-6xl">
                :
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
