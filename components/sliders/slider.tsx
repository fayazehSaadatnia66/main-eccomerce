"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductHorizontal from "../card/product-horizontal"
import "./slider.scss"
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Slider = () => {
  return (
    <div className="w-full self-center h-[400px] flex gap-10">
      <Swiper
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        modules={[Pagination, Navigation, Keyboard, Mousewheel]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <ProductHorizontal />
        </SwiperSlide>
        <SwiperSlide>
          <ProductHorizontal />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Slider
