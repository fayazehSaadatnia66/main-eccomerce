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
  text?: string
}
export const LinearBanner = ({
  wrapperClassNames,
  textClassNames,
  text,
}: LinearBannerProps) => {
  return (
    <div
      className={cn(
        "linear-banner w-full rounded-md py-3 px-4 h-min-[100px] bg-zinc-200",
        wrapperClassNames
      )}
    >
      <div className="flex items-center justify-between	bg-[url('/images/banner.png')]">
        {/* <Image src={shopCart} alt="Picture of the author" width={80} /> */}
        <div className="flex w-[700px] align-baseline	">
          <p
            className={cn(
              "text-purple-900 font-bold text-xl w-[220px] ms-6",
              textClassNames
            )}
          >
            {text}
          </p>
          <div>
            <Button
              className="flex rounded-s-3xl  rounded-e-3xl bg-purple-900"
              style={{ placeItems: "start" }}
            >
              تا پایان ماه 40 درصد تخفیف
            </Button>
          </div>
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
