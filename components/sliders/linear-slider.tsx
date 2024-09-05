"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "./linear-slider.scss"
import { Pagination } from "swiper/modules"
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
  logoLinearSlider
}) => {
  return (
    <div
      className={cn(
        "linear-slider w-full flex py-4 px-5 rounded-lg",
        bgClassName || "bg-[#DB304E]"
      )}
    >
      <div
        className={cn(
          "flex flex-col content-center pe-3 text-3xl text-center text-white"
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
            height={50}
            width={50}
          />
          <span className="mt-7 flex text-sm">
            مشاهده همه <MdKeyboardArrowLeft size={18} />
          </span>
        </div>
      </div>
      <Swiper
        // slidesPerView={1}
        spaceBetween={7}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }}
        modules={[Pagination]}
        className={cn("flex-auto", bgClassName)}
      >
        {items?.map((item, index) => {
          return (
            <SwiperSlide className="overflow-hidden rounded-0">
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
