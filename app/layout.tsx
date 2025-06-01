import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Providers } from "./providers"
import { ResponsiveFixes } from "@/components/responsive-fixes"
import { viewport } from "./viewport"

export const metadata: Metadata = {
  title: "Next Logix",
  description: "شركة متخصصة في تطوير البرمجيات وتقديم الحلول التقنية المتكاملة",
}

export { viewport }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
          <ResponsiveFixes />
        </Providers>
      </body>
    </html>
  )
}
