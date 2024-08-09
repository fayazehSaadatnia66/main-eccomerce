import NavigationMenu from "@/components/layout/navbar/navigation-menu"
import { MainLogo } from "@/components/layout/header/logo"
import SearchBar from "@/components/layout/header/search-bar"
import LoginRegisterButton from "@/components/layout/header/login-register-button"
import { ShoppingCartButton } from "@/components/layout/header/shopping-cart-button"
import { Separator } from "@/components/ui/separator"

const ECommerceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
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
    </div>
  )
}

export default ECommerceLayout
