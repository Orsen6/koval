import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper'

function BannerSwiper() {
  return (
    <>
        <Swiper
        breakpoints={{
          250: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10
          },
          450: {
            slidesPerView: 2
          },
          576: {
            spaceBetween: 10,
            slidesPerView: 3,
            centeredSlides: false
          },
          769: {
            slidesPerView: 2,
            centeredSlides: true
          },
          992: {
            spaceBetween: 30,
            slidesPerView: 2,
            centeredSlides: true
          }
        }}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper bannerSwiper"
          modules={[Autoplay]}
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