import Image from "next/image"
import logo from "@/public/images/logo.png"
import { PiInstagramLogoThin, PiYoutubeLogoThin } from "react-icons/pi"
import { Button } from "../ui/button"
import { HeroBackground } from "./hero-background"

const FooterPage = () => {
  return (
        <div className="flex flex-col w-full h-full gap-5 ">
      <div className="flex flex-col gap-5">
        <Image src={logo} alt="logo" className="filter hue-rotate-[70deg]"/>
        <div className="flex flex-row gap-5 text-gray-600">
          <div>تلفن پشتیبانی </div>
          <div> 021-54154287</div>
          <hr className="rotate-90 w-[30px] m-0 p-0 place-self-center border-1 border-gray-600" />
          <div>۷ روز هفته، 24 ساعته پاسخگوی شما هستیم.</div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-16 w-[50%]">
          <div className="flex flex-col text-gray-600 w-[25%]">
            <div className="font-bold text-black items-center mb-3 text-lg">
              معرفی
            </div>
            <div className="text-sm">درباره کدمارکت</div>
            <div className="text-sm">فرصت های شغلی</div>
            <div className="text-sm">اطلاعات تماس</div>
            <div className="text-sm">قوانین و مقررات</div>
          </div>
          <div className="flex flex-col text-gray-600 w-[25%]">
            <div className="font-bold text-black items-center mb-3 text-lg">
              خدمات
            </div>
            <div className="text-sm">ضمانت بازگشت وجه</div>
            <div className="text-sm">پشتیبانی سریع</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>همراه ما باشید!</div>
          <div className="flex flex-row gap-6">
            <PiInstagramLogoThin size={30} />
            <PiYoutubeLogoThin size={30} />
          </div>
          <div className="text-gray-600">با ثبت ایمیل از جدیدترین ها باخبر شوید</div>
          <div className="flex flex-row gap-10 ms-5">
            <div className="w-1/2 text-gray-500">ایمیل شما</div>
            <Button className="w-1/2 bg-gray-200 hover:bg-unset">ثبت</Button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
 
  )
}
export default FooterPage
