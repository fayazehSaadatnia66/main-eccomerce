import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { cn } from "@/lib/utils"
import { ClassNameValue } from "tailwind-merge"

type LinearSliderProps = {
  bgClassName?: ClassNameValue
}
export const LinearSlider = ({ bgClassName }: LinearSliderProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
        direction: "rtl"
      }}
      className={cn("w-full border py-5  rounded-xl", bgClassName)}
    >
      <CarouselContent>
        <div className="w-[200px] flex-none px-3 py-1 text-3xl text-center h-[250px] cursor-pointer text-white ">
          پرتخفیف ترین‌های سایت
          <br />
          <div className="flex flex-col items-center mt-5 justify-around">
            <span className="transform relative top-3 -rotate-45 text-5xl font-semibold">
              %
            </span>
            <span className="transform -rotate-180 [writing-mode:vertical-rl] text-6xl font-bold">
              )
            </span>
            <span className="mt-7 flex text-sm">
              مشاهده همه <MdKeyboardArrowLeft size={18} />{" "}
            </span>
          </div>
        </div>
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 ">
              <div className="h-full">
                <Card className="h-full">
                  <CardContent className="flex h-full items-center justify-center">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
