import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import InnerImageZoom  from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useState } from 'react';
import { useRef } from 'react';

const Pro2Zoom=()=>{

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto=(index) =>{
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
    return(
        <div className="productZoom">
            <div className='productZoom position-relative'>
                <div className='badge badge-primary'>23%</div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="zoomSliderBig"
                    ref={zoomSliderBig}>
                        <SwiperSlide>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={`https://sslimages.shoppersstop.com/sys-master/images/h34/h8a/28606033133598/MAC-SL7C01ss_NC20_alt2.jpg_2000Wx3000H`}/>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={`https://sslimages.shoppersstop.com/sys-master/images/h2b/hdb/30078379327518/MAC-SL7C01ss_NC20.jpg_2000Wx3000H`}/>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={`https://sslimages.shoppersstop.com/sys-master/images/h47/hb1/28606167023646/MAC-SL7C01ss_NC20_alt1.jpg_2000Wx3000H`}/>

                            </div>
                        </SwiperSlide>       
                </Swiper>
            </div>


            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                navigation={false}
                slidesPerGroup={1}
                modules={[Navigation]}
                className="zoomSliderBig"
                ref={zoomSlider}>
                    <SwiperSlide>
                        <div className={`item ${slideIndex===0 && 'item_active'}`}>
                            <img src={`https://sslimages.shoppersstop.com/sys-master/images/h34/h8a/28606033133598/MAC-SL7C01ss_NC20_alt2.jpg_2000Wx3000H`} 
                                className='w-100' onClick={() => goto(0)}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${slideIndex===1 && 'item_active'}`}>
                            <img src={`https://sslimages.shoppersstop.com/sys-master/images/h2b/hdb/30078379327518/MAC-SL7C01ss_NC20.jpg_2000Wx3000H`} 
                                className='w-100' onClick={() => goto(1)}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${slideIndex===2 && 'item_active'}`}>
                            <img src={`https://sslimages.shoppersstop.com/sys-master/images/h47/hb1/28606167023646/MAC-SL7C01ss_NC20_alt1.jpg_2000Wx3000H`} 
                                className='w-100' onClick={() => goto(2)}/>
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Pro2Zoom;
