import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Head from "next/head"

const vazir = localFont({
  src: [
    {
      path: "/ui/fonts/shabnam/Shabnam-Medium-FD.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
})

export const metadata: Metadata = {
  title: "کد مارکت",
  description: "فروشگاهی برای همه برنامه نویسها"
  // icons: {
  //   icon: "favicon.ico"
  // }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={cn(vazir.className)}>{children}</body>
    </html>
  )
}
