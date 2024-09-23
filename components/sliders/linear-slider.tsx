"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "./linear-slider.scss"
import { Navigation, Pagination, Lazy, FreeMode } from "swiper/modules"
import Image, { StaticImageData } from "next/image"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { ClassNameValue } from "tailwind-merge"
import { cn } from "@/lib/utils"
import { SlArrowRight } from "react-icons/sl"
import ProductVertical from "../card/product-vertical"
import {
  PiArrowCircleLeftFill,
  PiArrowCircleLeftLight,
  PiArrowCircleLeftThin,
} from "react-icons/pi"

type SwiperProps = {
  otherProp?: string
  items: { item: StaticImageData; alt: string }[]
  bgClassName?: ClassNameValue
  name: string
  logo?: { item: StaticImageData; alt: string }
  className?: string
  slidePreView?: number | "auto"
}

const LinearSlider: React.FC<SwiperProps> = ({
  items,
  bgClassName,
  name,
  logo,
  className,
  slidePreView = "auto",
}) => {
  return (
    <div
      className={cn(
        "linear-slider w-[80%] h-[320px] self-center flex  rounded-2xl rounded-b-xl   overflow-hidden bg-purple-700",
        bgClassName,
        className
      )}
    >
      <div
        className={cn(
          " flex flex-col content-center text-2xl h-[284px]  text-center text-white place-content-center"
        )}
      >
        <div className="w-36 flex items-center justify-center  h-[200px] ">
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
        slidesPerView={slidePreView}
        navigation={
          {
            // prevEl: ".prev",
            // nextEl: ".next",
          }
        } 
        freeMode={true}
        //  effect="fade"
        // autoFocus={false}
        spaceBetween={9}
        // pagination={{
        //   clickable: false,
        // }}
        breakpoints={!slidePreView ? {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4 ,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5 ,
            spaceBetween: 10,
          },
        }: {}}
        modules={[Pagination, Navigation, FreeMode]}
        className={cn("flex-auto self-center", bgClassName)}
      >
        {items?.map((item, index) => {
          return (
            <SwiperSlide
              className={cn(
                " bg-transparent ",
                items.length < 6 && "last:rounded-l-2xl overflow-hidden"
              )}
            >
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
        {items.length > 6 && (
          <SwiperSlide className="pe-4">
            <div className="bg-white w-full h-[100%] flex flex-col justify-center items-center cursor-pointer rounded-l-2xl">
              <div className="flex justify-center h-[50%] items-center">
                <PiArrowCircleLeftThin
                  color="#19bfd3"
                  className="w-[80px] h-[100px] "
                />
                <span className="text-slate-600 flex justify-center items-start h-20% text-base font-thin ">
                  مشاهده همه
                </span>
              </div>
            </div>
          </SwiperSlide>
        )}

        {/* <div className="swiper-pagination z-10"></div> */}
      </Swiper>
    </div>
  )
}

export default LinearSlider
