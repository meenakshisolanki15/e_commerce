import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation, Autoplay } from 'swiper/modules';

const HomeBanner = ()=>{
    
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
                        disableOnInteraction: false
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper">
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h5c/he3/32896055377950/Mufti-web_7rh.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/hcb/h72/33004585484318/Shiseido_Web_10-e0y.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h9e/hf6/32959285690398/Carousel_Static_Web-Klotthe_220624c.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h8e/h35/32959275532318/Wonderchef-WEB_220624hf.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h56/hb3/32935035666462/PB-web_37-hv.jpg'} className="w-100"/>
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
export default HomeBanner;