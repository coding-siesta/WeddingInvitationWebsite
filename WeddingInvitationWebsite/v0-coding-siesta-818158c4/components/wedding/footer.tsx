import { wedding } from "@/lib/wedding-config"

export function Footer() {
  return (
    <footer className="bg-foreground px-6 py-12 text-center">
      <p className="label-caps text-[0.6rem] text-background/80 sm:text-[0.65rem]">
        {wedding.footer.text}
      </p>
    </footer>
  )
}
