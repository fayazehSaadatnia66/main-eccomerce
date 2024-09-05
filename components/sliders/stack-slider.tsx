"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
// import "swiper/css"
import "swiper/css/effect-cards"

import "./stack-style.scss"
// import required modules
import { EffectCards } from "swiper/modules"
import Image, { StaticImageData } from "next/image"

type SwiperProps = {
  otherProp?: string
  items: { item: StaticImageData; alt: string }[]
}

const StackSlider: React.FC<SwiperProps> = ({ items }: SwiperProps) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {items.map((item, index) => {
        return (
          <SwiperSlide key={index}  >
            <Image className="w-full h-full" src={item.item} alt={item.alt} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default StackSlider
