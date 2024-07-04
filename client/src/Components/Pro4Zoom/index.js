import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import InnerImageZoom  from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useState } from 'react';
import { useRef } from 'react';

const Pro4Zoom=()=>{

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
                                    src={`https://sslimages.shoppersstop.com/sys-master/images/h3f/hbc/32785256546334/S24INDIE1RED_RED_alt4.jpg_2000Wx3000H`}/>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={`https://sslimages.shoppersstop.com/sys-master/images/h81/hb5/32785189830686/S24INDIE1RED_RED_alt3.jpg_2000Wx3000H`}/>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={`https://sslimages.shoppersstop.com/sys-master/images/h34/hd0/32785015963678/S24INDIE1RED_RED.jpg_2000Wx3000H`}/>

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
                            <img src={`https://sslimages.shoppersstop.com/sys-master/images/h3f/hbc/32785256546334/S24INDIE1RED_RED_alt4.jpg_2000Wx3000H`} 
                                className='w-100' onClick={() => goto(0)}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${slideIndex===1 && 'item_active'}`}>
                            <img src={`https://sslimages.shoppersstop.com/sys-master/images/h81/hb5/32785189830686/S24INDIE1RED_RED_alt3.jpg_2000Wx3000H`} 
                                className='w-100' onClick={() => goto(1)}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${slideIndex===2 && 'item_active'}`}>
                            <img src={`https://sslimages.shoppersstop.com/sys-master/images/h34/hd0/32785015963678/S24INDIE1RED_RED.jpg_2000Wx3000H`} 
                                className='w-100' onClick={() => goto(2)}/>
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Pro4Zoom;
