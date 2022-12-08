import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function RoomSwiper() {
  return (
        <>
        <Swiper
        breakpoints={{
            250: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            450: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            769: {
                slidesPerView: 4,
                spaceBetween: 35
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        }}
            slidesPerView={4}
            centeredSlides={true}
            className="mySwiper"
            grabCursor={true}
            loop={true}
        >
        <SwiperSlide>
            <div className="room_slide">
                <img src="/roomSlider/room1.jpg"/>
                <Link href="#" className="room_wrap">
                    <div>Clean Simple</div>
                    <b> 12 Lokasi </b>
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="room_slide">
                <img src="/roomSlider/room1.jpg"/>
                <Link href="#" className="room_wrap">
                    <div>Home Office</div>
                    <b> 12 Lokasi </b>
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="room_slide">
                <img src="/roomSlider/room1.jpg"/>
                <Link href="#" className="room_wrap">
                    <div>Cafe Ambience</div>
                    <b> 12 Lokasi </b>
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="room_slide">
                <img src="/roomSlider/room1.jpg"/>
                <Link href="#" className="room_wrap">
                    <div>Clean Simple</div>
                    <b> 12 Lokasi </b>
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="room_slide">
                <img src="/roomSlider/room1.jpg"/>
                <Link href="#" className="room_wrap">
                    <div>Home Office</div>
                    <b> 12 Lokasi </b>
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="room_slide">
                <img src="/roomSlider/room1.jpg"/>
                <Link href="#" className="room_wrap">
                    <div>Clean Simple</div>
                    <b> 12 Lokasi </b>
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="room_slide">
                <img src="/roomSlider/room1.jpg"/>
                <Link href="#" className="room_wrap">
                    <div>Clean Simple</div>
                    <b> 12 Lokasi </b>
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="room_slide">
                <img src="/roomSlider/room1.jpg"/>
                <Link href="#" className="room_wrap">
                    <div>Cafe Ambience</div>
                    <b> 12 Lokasi </b>
                </Link>
            </div>
        </SwiperSlide>
        </Swiper>
        </>
    )
}

export default RoomSwiper