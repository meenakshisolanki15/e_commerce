import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation, Autoplay } from 'swiper/modules';

const WatchBanner = ()=>{
    
    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper">
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h1c/h49/32888128241694/Fossil-web_jf4.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h09/h9f/32959284641822/Casio-web_la21.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/hb0/h24/32879096168478/fossil_flat-deals-webcd.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h90/ha8/32865046560798/AX-web_080624f.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>      
    )
}
export default WatchBanner;