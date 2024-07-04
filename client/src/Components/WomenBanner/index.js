

import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation, Autoplay } from 'swiper/modules';

const WomenBanner = ()=>{
    
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
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h35/h0a/32848964517918/PB-web_08o.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/he9/h26/32839234486302/Denims-web_n11.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h37/ha3/32839232716830/Kurta-Sets-web_n1.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h2c/h4a/32839233241118/Kurtas-%26-Kurtis-web_n3.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>      
    )
}
export default WomenBanner;