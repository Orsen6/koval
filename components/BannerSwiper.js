import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper'

function BannerSwiper() {
  return (
    <>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          className="mySwiper"
          // modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src="/bannerSlide1.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/bannerSlide1.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/bannerSlide1.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/bannerSlide1.jpg"/>
          </SwiperSlide>
        </Swiper>
    </>
  )
}

export default BannerSwiper