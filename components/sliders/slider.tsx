import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const Slider = () => {
return(
    <Swiper
    cssMode={true}
    navigation={true}
    pagination={true}
    mousewheel={true}
    keyboard={true}
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    className="mySwiper"
  >
    <SwiperSlide>
        
    </SwiperSlide>
  </Swiper>
)
}
export default Slider