"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { wedding } from "@/lib/wedding-config"

export function MusicPlayer() {
  const { music } = wedding
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!music.src) return

    const audio = audioRef.current
    if (!audio) return

    const tryStart = () => {
      if (startedRef.current) return
      startedRef.current = true
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Autoplay blocked — wait for first user interaction anywhere on the page.
          startedRef.current = false
        })
    }

    // Attempt autoplay immediately on mount.
    tryStart()

    // Fallback: start on the very first interaction if autoplay was blocked.
    const onFirstInteraction = () => {
      tryStart()
    }
    window.addEventListener("click", onFirstInteraction, { once: true })
    window.addEventListener("touchstart", onFirstInteraction, { once: true })
    window.addEventListener("keydown", onFirstInteraction, { once: true })

    return () => {
      window.removeEventListener("click", onFirstInteraction)
      window.removeEventListener("touchstart", onFirstInteraction)
      window.removeEventListener("keydown", onFirstInteraction)
    }
  }, [music.src])

  // Hidden entirely when no track is configured.
  if (!music.src) return null

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      void audio.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <audio ref={audioRef} src={music.src} loop preload="auto" />
      <button
        onClick={toggle}
        className="flex items-center gap-3 rounded-full bg-foreground py-2 pl-4 pr-2 text-background shadow-lg transition-opacity hover:opacity-90"
        aria-label={playing ? "Mute music" : "Unmute music"}
      >
        <span className="label-caps text-[0.55rem] text-background/80">{music.title}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground">
          {playing ? <Volume2 size={15} /> : <VolumeX size={15} />}
        </span>
      </button>
    </div>
  )
}