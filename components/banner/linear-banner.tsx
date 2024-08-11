import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"
import { ClassNameValue } from "tailwind-merge"

import shopCart from "/public/images/ai.png"

type LinearBannerProps = {
  wrapperClassNames?: ClassNameValue
  textClassNames?: ClassNameValue
  text?: string
}
export const LinearBanner = ({
  wrapperClassNames,
  textClassNames,
  text
}: LinearBannerProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-md py-3 px-4 h-min-[100px] bg-zinc-200",
        wrapperClassNames
      )}
    >
      <div className="flex items-center">
        <Image src={shopCart} alt="Picture of the author" width={80} />
        <p className={cn("text-primary font-bold ", textClassNames)}>{text}</p>
      </div>
    </div>
  )
}
