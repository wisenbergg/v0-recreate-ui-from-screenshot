import type React from "react"
import "./globals.css"
import { freightDisplay } from "./fonts"

export const metadata = {
  title: "Onboarding Welcome",
  description: "Welcome to our platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${freightDisplay.variable} font-freight`}>{children}</body>
    </html>
  )
}
