import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"
import { ClassNameValue } from "tailwind-merge"
import vuexy from "/public/images/icon3.png"
import vuexy1 from "/public/images/icon1.png"
import vuexy2 from "/public/images/icon2.png"
import { Button } from "../ui/button"
import "./linear-banner.scss"
type LinearBannerProps = {
  wrapperClassNames?: ClassNameValue
  textClassNames?: ClassNameValue
  textLeft?: string
  textCenter?: string
  textRight?: string
}
export const LinearBanner = ({
  wrapperClassNames,
  textClassNames,
  textLeft,
  textCenter,
  textRight
}: LinearBannerProps) => {
  return (
    <div
      className={cn(
        "linear-banner rounded-md py-3 px-4 h-min-[100px] bg-zinc-200 ",
        wrapperClassNames
      )}
    >
      <div className="flex items-center justify-between	bg-[url('/images/banner.png')]">
        {/* <Image src={shopCart} alt="Picture of the author" width={80} /> */}
        <div className="flex w-[700px] align-baseline	">
          <p
            className={cn(
              "text-purple-900  text-lg w-[112px] text-center ms-6",
              textClassNames
            )}
          >
            {textLeft}
          </p>
          <hr className="rotate-90 w-[9%] m-0 p-0 place-self-center border-1 border-[#581c87]"/>
          <p
            className={cn(
              "text-purple-900  text-lg w-[100px] text-center ms-6",
              textClassNames
            )}  
          >
            {textCenter}
          </p>
          <hr className="rotate-90 w-[9%] m-0 p-0 place-self-center border-1 border-[#581c87]"/>

          <p
            className={cn(
              "text-purple-900 text-lg  w-[100px] ms-6",
              textClassNames
            )}
          >
            {textRight}
          </p>
        </div>
        <div className="flex  justify-between	">
          <div className="vuexy-icon rounded-full overflow-hidden w-32 h-32">
            <Image className="object-cover" src={vuexy} alt="vuexy" />
          </div>
          <div className="vuexy-icon rounded-full overflow-hidden w-32 h-32">
            <Image className="object-cover" src={vuexy1} alt="vuexy" />
          </div>
          <div className="vuexy-icon rounded-full overflow-hidden w-32 h-32">
            <Image className="object-cover" src={vuexy2} alt="vuexy" />
          </div>

          <div className="flex items-center">
            <Button className="text-purple-900 bg-slate-300">
              مشاهده دیگر قالب ها
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
