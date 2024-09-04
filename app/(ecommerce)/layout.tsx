import NavigationMenu from "@/components/layout/navbar/navigation-menu"
import { MainLogo } from "@/components/layout/header/logo"
import SearchBar from "@/components/layout/header/search-bar"
import LoginRegisterButton from "@/components/layout/header/login-register-button"
import { ShoppingCartButton } from "@/components/layout/header/shopping-cart-button"
import { Separator } from "@/components/ui/separator"
// import "./style.scss"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/landing/hero-background"
const ECommerceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="main-header relative right-[50%] w-[100vw] ms-[-50vw] px-4 flex flex-col items-start justify-between h-[400px] bg-cover bg-center  mb-6">
        <HeroBackground />
        {/* <div className="absolute flex bottom-0 left-0 w-full overflow-hidden leading-none h-[100px]"> */}
        {/* <svg className=" w-0 h-24 text-white transform scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 400">
            <path fill="currentColor" d="M0,192L60,165.3C120,139,240,85,360,85.3C480,85,600,139,720,160C840,181,960,171,1080,138.7C1200,107,1320,53,1380,26.7L1440,0V320H0Z"></path>
        </svg> */}
        {/* <svg
            className="block w-full h-full text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 220" // تغییر عرض viewBox
          >
            <path
              fill="currentColor"
              d="M0,192L60,165.3C120,139,240,85,360,85.3C480,85,600,139,720,160C840,181,960,171,1080,138.7C1200,107,1320,53,1380,26.7L1440,0V320H0Z"
            ></path>
          </svg>
        </div> */}
        <div className="flex items-center justify-between w-full ps-10 pe-10">
          <div className=" flex items-center ms-4">
            <MainLogo />
          </div>
          <div className=" flex items-center navigate-menu">
            <NavigationMenu />
          </div>
          <div className="flex items-center h-6 gap-4 me-4 mt-4">
            <LoginRegisterButton />
            <Separator orientation="vertical" className="z-10"/>
            <ShoppingCartButton />
          </div>
        </div>
        <div className="text-3xl font-bold text-white flex flex-col gap-4 items-start justify-center w-full h-full z-10">
          <div className="flex self-center text-5xl">
            راهی بهتر برای مدیریت خود
          </div>
          <div className="flex self-center text-slate-200 text-xl font-normal">
            مرجع بزرگ طراحان، وبمستران و توسعه دهندگان ایرانی
          </div>
          <div className="relative flex self-center items-center">
            <SearchBar />
          </div>
          <div className="flex self-center gap-3 ">
            <Button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded">
              پرفروش ترین
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded">
              جدیدترین
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded">
              ارزان ترین
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded">
              گران ترین
            </Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default ECommerceLayout
