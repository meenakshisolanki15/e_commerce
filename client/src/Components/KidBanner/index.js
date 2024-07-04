import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation, Autoplay } from 'swiper/modules';

const KidBanner = ()=>{
    
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
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h56/hb3/32935035666462/PB-web_37-hv.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/hc3/ha8/33014160850974/Wrogn-web_83-ko.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h22/h76/32821354168350/Girls-Western-Wear-web--2024-06--03-new-kids.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={'https://sslimages.shoppersstop.com/sys-master/root/h1e/he1/32841541681182/Boys-Indian-Wear-web----2024-05--06--newmainrev.jpg'} className="w-100"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>      
    )
}
export default KidBanner;