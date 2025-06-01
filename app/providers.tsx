"use client"

import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"
import { AnimatePresence } from "framer-motion"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <div dir="rtl">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
