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
import ProductCard from "../card/product-card"
import { SlArrowRight } from "react-icons/sl"

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
        "linear-slider w-full flex py-4 px-1 rounded-lg",
        bgClassName
      )}
    >
      <div
        className={cn(
          "flex flex-col content-center pe-3 text-3xl text-center text-white gap-6 "
        )}
      >
        <div className="w-36 h-35 flex items-center justify-center text-4xl">
          {name}
        </div>

        <div className="flex flex-col items-center h-48 justify-between">
          <Image
            src={logo.item.src}
            alt={logo.alt}
            height={50}
            width={90}
            sizes="3xl"
          />
          <span className="flex text-sm">
            مشاهده همه <MdKeyboardArrowLeft size={18} />
          </span>
        </div>
      </div>
      <Swiper
        // slidesPerView={1}

        navigation={{
          nextEl: "#button-next-relacionados",
          prevEl: "#button-next-relacionados",
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
        modules={[Pagination]}
        className={cn("flex-auto", bgClassName)}
      >
        {items?.map((item, index) => {
          return (
            <SwiperSlide className="overflow-hidden rounded-0 bg-transparent">
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
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  )
}

export default LinearSlider
