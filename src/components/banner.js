import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="slide">
                    <div className="banner_text">
                        <p>The ELEGANT airPods pro max </p>
                        <span>your chance to buy it</span>
                        <button className="banner_btn">see now</button>
                    </div>
                    <div className="bannerImg">
                        <img src="https://9to5mac.com/wp-content/uploads/sites/6/2020/12/AirPods-Max-black.jpg?quality=82&strip=all&w=1600"></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">  <div className="banner_text">
                    <p>macBook  Pro fro bussines </p>
                    <span>your shance to buy it</span>
                    <button className="banner_btn">see now</button>

                </div>
                    <div className="bannerImg">
                        <img src="https://w0.peakpx.com/wallpaper/601/760/HD-wallpaper-apple-macbook-laptop-on-black-background-modern-technology-laptop-apple.jpg"></img>
                    </div></SwiperSlide>
                <SwiperSlide className="slide">  <div className="banner_text">
                    <p>The Tesla robot </p>
                    <span>your shance to buy it</span>
                    <button className="banner_btn">see now</button>

                </div>
                    <div className="bannerImg">
                        <img src="https://compote.slate.com/images/7e67e91a-9fcd-4d65-8a3b-e280c3027cdc.jpeg?crop=1560%2C1040%2Cx0%2Cy0"></img>
                    </div></SwiperSlide>
                <SwiperSlide className="slide">  <div className="banner_text">
                    <p>spaceX rocket from space </p>
                    <span>your shance to buy it</span>
                    <button className="banner_btn">see now</button>

                </div>
                    <div className="bannerImg">
                        <img src="https://img.pikbest.com/ai/illus_our/20230427/b3f812031e3d23bf72feab6e36c3c373.jpg!sw800"></img>
                    </div></SwiperSlide>
            </Swiper>
        </>
    );
}
export default Banner

