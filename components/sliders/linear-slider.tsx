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
import { ClassNameValue } from "tailwind-merge"
import { cn } from "@/lib/utils"
import { PiArrowCircleLeftLight } from "react-icons/pi"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import star from "@/public/images/best-seller-star.svg"

type SwiperProps = {
  otherProp?: string
  items: { item: StaticImageData; alt: string }[]
  bgClassName?: ClassNameValue
  nameLinearSlider: string
}

const LinearSlider: React.FC<SwiperProps> = ({
  items,
  bgClassName,
  nameLinearSlider,
}) => {
  return (
    <div className="w-full flex h-[400px] overflow-hidden items-center rounded-2xl bg-red-600">
      <div
        className={cn(
          "border-y-1 border-indigo-600 flex-col content-center min-w-36 px-3 py-1 text-3xl text-center cursor-pointer text-white  mb-5",
          bgClassName
        )}
      >
        <div className="w-36 h-44 flex items-center justify-center text-4xl ">
        {nameLinearSlider}
        </div>
        <br />
        <div className="flex flex-col items-center  justify-around">
          <Image src={star} alt="star" height={150}/>
          {/* <span className="transform relative top-3 rotate-45 text-5xl font-semibold">
            %
          </span>
          <span className="transform -rotate-180 [writing-mode:vertical-rl] text-6xl font-bold">
            )
          </span> */}
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
        className={cn(
          "mySwiper-pagination float-end flex-auto w-64 content-center",
          bgClassName
        )}
        style={{ width: "1000px !important" }}
      >
        {items?.map((item) => (
          <SwiperSlide className="swiper-slider w-full border-slate-950 rounded-2xl overflow-hidden h-[256px]">
            <Card className="flex-col gap-2 h-[322px] w-[350px]">
              <CardContent className="p-0 mb-14">
                <Image
                  width={200}
                  height={0}
                  className=" w-[280px] h-[180px] rounded-2xl border-1  border-slate-950"
                  src={item.item.src}
                  alt={item.alt}
                />
                <div className="flex-col ">
                  <div className="text-lg text-gray-700">قالب فروشگاهی ایکس پرو</div>
                  <div className="flex">
                    <div className="text-sm text-slate-400">کاربرد:</div>
                    <div className="text-sm text-gray-700">قالب شرکتی</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
        {/* <div className="flex-col">
          <PiArrowCircleLeftLight />
        </div> */}
      </Swiper>
    </div>
  )
}

export default LinearSlider
