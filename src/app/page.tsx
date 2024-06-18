"use client"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Index from "@/pages/home";


export default function Home() {
  return (
    <main className="h-screen">
      <Index />
    </main>
  )
}
