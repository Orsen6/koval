import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function RoomSwiper() {
  return (
        <>
        <Swiper
            slidesPerView={4}
            spaceBetween={40}
            centeredSlides={true}
            className='mySwiper'
            grabCursor={true}
            loop={true}
        >
        <SwiperSlide>
            <div className='room_slide'>
                <img src='/roomSlider/room3.jpg'></img>
                <a href="#" className='room_wrap'>
                    <div>Clean Simple</div>
                    <b> 12 Lokasi </b>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='room_slide'>
                <img src='/roomSlider/room4.jpg'></img>
                <a href="#" className='room_wrap'>
                    <div>Home Office</div>
                    <b> 12 Lokasi </b>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='room_slide'>
                <img src='/roomSlider/room1.jpg'></img>
                <a href="#" className='room_wrap'>
                    <div>Cafe Ambience</div>
                    <b> 12 Lokasi </b>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='room_slide'>
                <img src='/roomSlider/room4.jpg'></img>
                <a href="#" className='room_wrap'>
                    <div>Clean Simple</div>
                    <b> 12 Lokasi </b>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='room_slide'>
                <img src='/roomSlider/room3.jpg'></img>
                <a href="#" className='room_wrap'>
                    <div>Home Office</div>
                    <b> 12 Lokasi </b>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='room_slide'>
                <img src='/roomSlider/room1.jpg'></img>
                <a href="#" className='room_wrap'>
                    <div>Clean Simple</div>
                    <b> 12 Lokasi </b>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='room_slide'>
                <img src='/roomSlider/room4.jpg'></img>
                <a href="#" className='room_wrap'>
                    <div>Clean Simple</div>
                    <b> 12 Lokasi </b>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='room_slide'>
                <img src='/roomSlider/room3.jpg'></img>
                <a href="#" className='room_wrap'>
                    <div>Cafe Ambience</div>
                    <b> 12 Lokasi </b>
                </a>
            </div>
        </SwiperSlide>
        </Swiper>
        </>
    )
}

export default RoomSwiper