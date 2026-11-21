import { Nav } from "@/components/wedding/nav"
import { Hero } from "@/components/wedding/hero"
import { Countdown } from "@/components/wedding/countdown"
import { Entourage } from "@/components/wedding/entourage"
import { Timeline } from "@/components/wedding/timeline"
import { Maps } from "@/components/wedding/maps"
import { DressCode } from "@/components/wedding/dress-code"
import { Rsvp } from "@/components/wedding/rsvp"
import { Gifts } from "@/components/wedding/gifts"
import { Faqs } from "@/components/wedding/faqs"
import { Footer } from "@/components/wedding/footer"
import { MusicPlayer } from "@/components/wedding/music-player"

export default function Page() {
  return (
    <main className="relative bg-background">
      <Nav />
      <Hero />
      <Countdown />
      <Entourage />
      <Timeline />
      <Maps />
      <DressCode />
      <Rsvp />
      <Gifts />
      <Faqs />
      <Footer />
      <MusicPlayer />
    </main>
  )
}
