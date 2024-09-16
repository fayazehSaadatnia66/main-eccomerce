"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "./linear-slider.scss"
import { Navigation, Pagination } from "swiper/modules"
import Image, { StaticImageData } from "next/image"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { ClassNameValue } from "tailwind-merge"
import { cn } from "@/lib/utils"
import { SlArrowRight } from "react-icons/sl"
import ProductVertical from "../card/product-vertical"

type SwiperProps = {
  otherProp?: string
  items: { item: StaticImageData; alt: string }[]
  bgClassName?: ClassNameValue
  name: string
  logo: { item: StaticImageData; alt: string }
}

const LinearSlider: React.FC<SwiperProps> = ({
  items,
  bgClassName,
  name,
  logo,
}) => {
  return (
    <div
      className={cn(
        "linear-slider w-[80%] self-center flex py-6 px-1  rounded-2xl  ",
        bgClassName
      )}
    >
      <div
        className={cn(
          " flex flex-col content-center text-3xl h-[320px]  text-center text-white place-content-center"
        )}
      >
        <div className="w-44 flex items-center justify-center  h-[200px] ">
          {name}
        </div>

        {/* <div className="flex flex-col items-center h-48 justify-between"> */}
        {/* <Image
            src={logo.item.src}
            alt={logo.alt}
            height={50}
            width={90}
            sizes="3xl"
          /> */}
        <div className="flex flex-col gap-10 items-center justify-around h-[300px]">
          <div className="flex flex-col">
          <span className="transform relative top-3 -rotate-45 text-5xl font-semibold">
            %
          </span>
          <span className="transform -rotate-180 [writing-mode:vertical-rl] text-6xl font-bold">
            )
          </span>
          </div>

          <span className="flex text-sm">
            مشاهده همه <MdKeyboardArrowLeft size={18} />
          </span>
        </div>
      </div>
      <Swiper
        // slidesPerView={1}

        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        spaceBetween={7}
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
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
        className={cn("flex-auto", bgClassName)}
      >
        {items?.map((item, index) => {
          return (
            <SwiperSlide className=" bg-transparent">
              <ProductVertical
                index={index}
                productName="قالب فروشگاهی ایکس پرو"
                application="قالب شرکتی"
                numberSales="229"
                score={4.7}
                price={610000}
                img={item}
              />
            </SwiperSlide>
          )
        })}
        <SwiperSlide>flsdkjflsd</SwiperSlide>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  )
}

export default LinearSlider
