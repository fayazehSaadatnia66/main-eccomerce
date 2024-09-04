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
import star1 from "@/public/images/star.png"

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
    <div className="w-full flex h-[470px] overflow-hidden items-center rounded-2xl bg-red-600">
      <div
        className={cn(
          " border-y-1 border-indigo-600 flex-col content-center min-w-36 px-3 py-1 text-3xl text-center cursor-pointer text-white  mb-5",
          bgClassName
        )}
      >
        <div className="relative top-9 w-36 h-35 flex items-center justify-center text-4xl mb-2">
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
          "mySwiper-pagination float-end flex-auto w-64 content-center relative bottom-[64px]",
          bgClassName
        )}
        style={{ width: "1000px !important" }}
      >
        {items?.map((item) => (
          <SwiperSlide className="swiper-slider w-full border-slate-950 rounded-2xl overflow-hidden h-[500px]">
            <Card className="flex-col gap-2 h-[470px] w-[350px]">
              <CardContent className="p-0">
                <Image
                  width={200}
                  height={0}
                  className="rounded-br-lg w-[300px] h-[250px]  border-1  border-slate-950 mb-4"
                  src={item.item.src}
                  alt={item.alt}
                />
                <div className="flex-col ">
                  <div className="text-lg text-gray-700">قالب فروشگاهی ایکس پرو</div>
                  <div className="flex mb-5">
                    <div className="text-sm text-slate-400">کاربرد:</div>
                    <div className="text-sm text-gray-700">قالب شرکتی</div>
                  </div>
                  <hr/>
                  <div className="flex items-center">
                  <div className="flex w-[155px] justify-between">
                    <div className="text-lg">329 فروش</div>
                    <div className="flex text-lg me-1">4.7 <Image src={star1} alt="star" style={{height:"20px !important", width:"20px", marginRight:"10px"}}/></div>
                  </div>
                  <div style={{borderLeft:"1px solid #000", height:"55px", width:"0px"}}></div>
                  <div className="text-lg ms-3">610,000 تومان</div>
                  </div>
                </div>
              </CardContent>
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
