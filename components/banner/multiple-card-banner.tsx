import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"
import { ClassNameValue } from "tailwind-merge"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

type LinearBannerProps = {
  cardClassNames?: ClassNameValue
  items: { alt: string; src: string | StaticImport }[]
}
export const MultipleCardsBanner = ({ items = [] }: LinearBannerProps) => {
  return (
    <div className={cn("w-full flex  h-min-[200px] place-content-center")}>
      {items.map(({ src, alt }, index) => (
        <div key={alt + index} className="rounded-2xl overflow-hidden me-5">
          <Image
            src={src}
            alt={alt || ""}
            objectFit="cover"
            // sizes="100vw"
            // style={{
            //   objectFit: "contain" // cover, contain, none
            // }}
            width={650}
            height={200}
          />
        </div>
      ))}
    </div>
  )
}
