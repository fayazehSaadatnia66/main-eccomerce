"use client"
import { MdKeyboardArrowLeft } from "react-icons/md"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../ui/card"
import { ClassNameValue } from "tailwind-merge"
import { cn } from "@/lib/utils"
import "./triple-style.scss"
type TripleSliderProps = {
  bgClassName?: ClassNameValue
}
const colors = ["bg-primary", "bg-red-500", "bg-blue-500"]
const TripleSlider = ({ bgClassName }: TripleSliderProps) => {
  return (
    <div className="triple-slider">
      <Carousel
      
        opts={{
          align: "start",
          dragFree: true,
          direction: "rtl",
          loop:true
        }}
        plugins={[Autoplay({delay: 2000})]}
        className={cn("w-[1000px] border p-2 rounded-xl", bgClassName)}
      >
        <CarouselContent className=" h-[300px] w-[300px]">
          {Array(3)
            .fill(1)
            .map((_, index) => (
              <CarouselItem className="item " key={index}>
                <div className="h-full p-1">
                  <Card className={cn("h-full card", colors[index])}>
                    <CardContent className="flex h-full items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default TripleSlider
