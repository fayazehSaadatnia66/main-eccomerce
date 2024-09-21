"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductHorizontal from "../card/product-horizontal"
import "./slider.scss"
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Slider = () => {
  return (
    <div className=" flex-col">
      <div className="ms-72 font-bold text-xl">
        محبوب ترین قالب ها و افزونه ها
      </div>
      <div className="slider-horizontal w-full self-center h-[400px] flex gap-10">
        <Swiper
          pagination={{
            // type: "bullets",
            clickable: true,
            bulletActiveClassName: "swiper-pagination-bullet-active",
          }}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          mousewheel={true}
          modules={[Pagination, Navigation, Keyboard, Mousewheel]}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide>
            <ProductHorizontal />
          </SwiperSlide>
          <SwiperSlide>
            <ProductHorizontal />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default Slider
