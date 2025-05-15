import localFont from "next/font/local"

export const freightDisplay = localFont({
  src: [
    {
      path: "../public/fonts/FreightDispProBook-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FreightDispProMedium-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FreightDispProSemibold-Regular.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-freight-display",
  display: "swap",
})
