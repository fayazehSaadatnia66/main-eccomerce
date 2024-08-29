import NavigationMenu from "@/components/layout/navbar/navigation-menu"
import { MainLogo } from "@/components/layout/header/logo"
import SearchBar from "@/components/layout/header/search-bar"
import LoginRegisterButton from "@/components/layout/header/login-register-button"
import { ShoppingCartButton } from "@/components/layout/header/shopping-cart-button"
import { Separator } from "@/components/ui/separator"
import "./style.scss"
const ECommerceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="main-header relative px-4 py-[20px] flex items-start justify-between h-[400px] w-full  bg-cover bg-center  mb-6">
        <div className="absolute flex bottom-0 left-0 w-full overflow-hidden leading-none">
          {/* <svg className=" w-0 h-24 text-white transform scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 400">
            <path fill="currentColor" d="M0,192L60,165.3C120,139,240,85,360,85.3C480,85,600,139,720,160C840,181,960,171,1080,138.7C1200,107,1320,53,1380,26.7L1440,0V320H0Z"></path>
        </svg> */}
          <svg
            className="block w-full h-24 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="200 0 2500 180 "
          >
            <path
              fill="currentColor"
              d="M0,192L60,165.3C120,139,240,85,360,85.3C480,85,600,139,720,160C840,181,960,171,1080,138.7C1200,107,1320,53,1380,26.7L1440,0V320H0Z"
            ></path>
          </svg>
        </div>

        <div className=" flex items-center gap-2">
          <MainLogo />
          <NavigationMenu />
        </div>
        <div className="flex items-center h-6 gap-4">
          <LoginRegisterButton />
          <Separator orientation="vertical" />
          <ShoppingCartButton />
        </div>
      </div>
      <SearchBar />
      {children}
    </div>
  )
}

export default ECommerceLayout
