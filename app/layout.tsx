import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import NavigationMenu from "@/components/layout/navbar/navigation-menu"
import { cn } from "@/lib/utils"
import { MainLogo } from "@/components/layout/header/logo"
import SearchBar from "@/components/layout/header/search-bar"
import LoginRegisterButton from "@/components/layout/header/login-register-button"
import { ShoppingCartButton } from "@/components/layout/header/shopping-cart-button"
import { Separator } from "@/components/ui/separator"

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
  description: "فروشگاهی برای همه برنامه نویسها"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={cn(vazir.className, "container")}>
        <div className=" w-full h-[80px] px-4 py-[20px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MainLogo />
            <SearchBar />
          </div>
          <div className="flex items-center h-6 gap-4">
            <LoginRegisterButton />
            <Separator orientation="vertical" />
            <ShoppingCartButton />
          </div>
        </div>
        <NavigationMenu />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
