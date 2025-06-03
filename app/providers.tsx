"use client"

import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div dir="rtl">
        <AnimatePresence>
          <div key={pathname}>
            {children}
          </div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
