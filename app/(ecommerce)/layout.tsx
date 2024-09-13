import NavigationMenu from "@/components/layout/navbar/navigation-menu"
import { MainLogo } from "@/components/layout/header/logo"
import LoginRegisterButton from "@/components/layout/header/login-register-button"
import { ShoppingCartButton } from "@/components/layout/header/shopping-cart-button"
import { Separator } from "@/components/ui/separator"
// import "./style.scss"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/landing/hero-background"
const ECommerceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="flex items-center justify-between pt-5 ">
        <MainLogo />
        <NavigationMenu />
        <div className="items-baseline h-6 gap-2 flex">
          <LoginRegisterButton />
          <Separator orientation="vertical" className="z-10" />
          <ShoppingCartButton />
        </div>
      </div>

      {children}
    </div>
  )
}

export default ECommerceLayout
