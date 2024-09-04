"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import "./linear-slider.scss"
import {Pagination } from "swiper/modules"
import Image, { StaticImageData } from "next/image"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { ClassNameValue } from "tailwind-merge"
import { cn } from "@/lib/utils"
import ProductCard from "../card/product-card"

type SwiperProps = {
  otherProp?: string
  items: { item: StaticImageData; alt: string }[]
  bgClassName?: ClassNameValue
  nameLinearSlider: string
  logoLinearSlider: { item: StaticImageData; alt: string }
}

const LinearSlider: React.FC<SwiperProps> = ({
  items,
  bgClassName,
  nameLinearSlider,
  logoLinearSlider,
}) => {
  return (
    <div className="w-full flex h-[452px] overflow-hidden items-center rounded-2xl bg-red-600">
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
          <Image
            src={logoLinearSlider.item.src}
            alt={logoLinearSlider.alt}
            height={150}
            width={100}
          />
          <span className="mt-7 flex text-sm">
            مشاهده همه <MdKeyboardArrowLeft size={18} />
          </span>
        </div>
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
        {items?.map((item, index) => {
          return (
            // <SwiperSlide className={`swiper-slider w-full border-slate-950 overflow-hidden h-[452px] ${index === 0 ? 'rounded-r-xl !important' : ''}`}>
            <SwiperSlide className={`swiper-slider w-full border-slate-950 overflow-hidden h-[452px]`}>
              <ProductCard
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
      </Swiper>
    </div>
  )
}

export default LinearSlider
