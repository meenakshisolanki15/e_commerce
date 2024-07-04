import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation, Autoplay } from 'swiper/modules';

const BeautyBanner = ()=>{
    
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
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/hcb/h72/33004585484318/Shiseido_Web_10-e0y.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/ha5/hec/32821368127518/NARS_BeautyPage_TopCarousel_Web3-6.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h7c/h35/32935041138718/Armani_Web_47-he.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/hbc/h7d/32835981934622/Dyson_Banner_Web_1840%20x%20500564.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>      
    )
}
export default BeautyBanner;