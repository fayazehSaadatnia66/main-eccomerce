"use client"
import React from "react"
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
import code1 from "@/public/images/code1.jpeg"
import code2 from "@/public/images/code2.jpeg"
import code3 from "@/public/images/code3.jpeg"
import code4 from "@/public/images/code4.jpeg"
import code5 from "@/public/images/code5.jpeg"
import code6 from "@/public/images/code6.jpeg"
import code7 from "@/public/images/code7.jpeg"
import "./linear-slider.scss"
// import required modules
import { EffectCards, EffectCoverflow, Pagination } from "swiper/modules"
import Image, { StaticImageData } from "next/image"
import { MdKeyboardArrowLeft } from "react-icons/md"
type LinearSliderProps = {
  otherProp?: string
  items: { item: StaticImageData; alt: string }[]
}

const LinearSlider: React.FC<SwiperProps> = ({items}:LinearSliderProps) => {
  return (
    <div className="w-full flex  border-8 rounded border-red-600 ">
      <div className="border-y-1 border-indigo-600 flex-auto content-center w-10 px-3 py-1 text-3xl text-center h-[320px] cursor-pointer text-white bg-red-600">
        {/* <div className="w-[200px] flex-none px-3 py-1 text-3xl text-center h-[250px] cursor-pointer text-white "> */}
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
              مشاهده همه <MdKeyboardArrowLeft size={18} />
            </span>
          </div>
        {/* </div> */}
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper-pagination float-end flex-auto w-64"
        style={{ width: "1000px !important" }}
      >
        {items?.map((item) => (
          <SwiperSlide className="w-full ">
            <Image width={200} height={200} className="h-full w-full" src={item.item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default LinearSlider

// import React from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { MdKeyboardArrowLeft } from "react-icons/md"
// import { cn } from "@/lib/utils"
// import { ClassNameValue } from "tailwind-merge"

// type LinearSliderProps = {
//   bgClassName?: ClassNameValue
// }
// export const LinearSlider = ({ bgClassName }: LinearSliderProps) => {
//   return (
//     <div className="w-full">
//       <Carousel
//         opts={{
//           align: "start",
//           dragFree: true,
//           direction: "rtl"
//         }}
//         className={cn("w-full border py-5 rounded-xl", bgClassName)}
//       >
//         <CarouselContent>
//           <div className="w-[200px] flex-none px-3 py-1 text-3xl text-center h-[250px] cursor-pointer text-white ">
//             پرتخفیف ترین‌های سایت
//             <br />
//             <div className="flex flex-col items-center mt-5 justify-around">
//               <span className="transform relative top-3 -rotate-45 text-5xl font-semibold">
//                 %
//               </span>
//               <span className="transform -rotate-180 [writing-mode:vertical-rl] text-6xl font-bold">
//                 )
//               </span>
//               <span className="mt-7 flex text-sm">
//                 مشاهده همه <MdKeyboardArrowLeft size={18} />{" "}
//               </span>
//             </div>
//           </div>
//           {Array(10)
//             .fill(1)
//             .map((_, index) => (
//               <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 ">
//                 <div className="h-full">
//                   <Card className="h-full">
//                     <CardContent className="flex h-full items-center justify-center">
//                       <span className="text-3xl font-semibold">
//                         {index + 1}
//                       </span>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   )
// }
