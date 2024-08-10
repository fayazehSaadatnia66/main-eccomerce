import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const vazir = localFont({
  src: [
    {
      path: "/ui/fonts/shabnam/Shabnam-Medium-FD.woff2",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-vazir"
})

export const metadata: Metadata = {
  title: "کد مارکت",
  description: "فروشگاهی برای همه برنامه نویسها",
  icons: [
    { rel: "apple-touch-icon", url: "favicon.ico" },
    { rel: "icon", url: "favicon.ico" }
  ],
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "imvinojanv",
      url: "https://www.linkedin.com/in/imvinojanv/"
    }
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      {/* <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head> */}
      <body className={cn(vazir.className)}>{children}</body>
    </html>
  )
}
