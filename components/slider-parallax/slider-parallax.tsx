import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import picOne from "@/public/images/1.jpg"
import picTwo from "@/public/images/2.jpg"
import picThree from "@/public/images/3.jpg"
import picFour from "@/public/images/4.jpg"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./style.scss"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import Image from "next/image"

export default function App() {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={picOne}
            alt="popular"
            className="rounded-lg parallax-bg"
          />
          <div className="absolute bottom-0 h-60 bg-green-200/60 w-full">
            <h2 className="scroll-m-20 text-4xl font-semibold mt-6">
              قالب شرکتی رمزینه
            </h2>
            <h3 className="subtitle scroll-m-20 text-2xl font-semibold my-2">
              قیمت: 450,000 تومان
            </h3>
            <div>
              <ul className="list-disc list-inside text-base">
                <li>استفاده از آیکون برای هر ویژگی</li>
                <li>گروه‌بندی ویژگی های محصول</li>
                <li>ریسپانسیو</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={picTwo} alt="popular" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={picThree} alt="popular" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={picFour} alt="popular" className="rounded-lg" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  )
}
