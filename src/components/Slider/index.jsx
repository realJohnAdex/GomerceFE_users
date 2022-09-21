import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Swiper CSS
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Slider = () => {
  return (
    <div className="container">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={30}
      >
        {/* <SwiperSlide></SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Slider
