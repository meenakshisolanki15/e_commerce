import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import Pro2 from "../../Components/Pro2";
import Pro3 from "../../Components/Pro3";
import Pro4 from "../../Components/Pro4";
import Pro5 from "../../Components/Pro5";
import banner1 from '../../assets/images/banner1 (2).jpg';
import banner5 from '../../assets/images/banner5.jpg';
import { MdOutlineEmail } from "react-icons/md";
import newsLetterImg from "../../assets/images/newsLetterImg.jpg";



const Home = ()=>{
    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (
        <>
            <HomeBanner/>
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={banner1} className="cursor w-100"/>
                                </div>
                                <div className="banner mt-4">
                                    <img src={banner5} className="cursor w-100"/>
                                </div>
                                <div className="banner mt-4">
                                    <img src="https://img.pikbest.com/origin/08/95/70/69MpIkbEsTsJx.jpg!w700wp" className="cursor w-100"/>
                                </div>
                                <div className="banner mt-4">
                                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/3bd5d8104055543.5f5a590049a9f.png"/>
                                </div>
                            </div>    
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0"> Do not miss the current offers until the end of March.</p>
                                </div>                    
                            </div>


                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper">
                                    <SwiperSlide className="image-container">
                                        <ProductItem/>
                                        <Pro2/>
                                        <Pro3/>
                                        <Pro4/>                                      
                                    </SwiperSlide>   
                                </Swiper>
                            </div>




                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                               
                            </div>


                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <Pro5/>                
                            </div> 
                            <div className="d-flex mt-4 mb-5 bannerSec">
                            <div className="banner ">
                                <img src="https://img.freepik.com/free-vector/perfume-glass-bottle-golden-silk-folded-fabric_33099-2052.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719878400&semt=ais_user" className="cursor w-100"/>
                            </div>
                            <div className="banner ">
                                <img src="https://img.pikbest.com/wp/202413/ladies-perfume-floral-bottle-fashion-web-banner_9087724.jpg!sw800" className="cursor w-100"/>
                            </div>
                            </div>
                            


                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h3 className="text-white"> Join our newslettter and get...</h3>
                            <p className="text-light">join our email subscription now to get 
                                updates <br/> on promotions and coupons.
                            </p>

                            <form>
                                <MdOutlineEmail/>
                                <input type="text" placeholder="Your Email Address"/>
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={newsLetterImg}/>

                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default Home;