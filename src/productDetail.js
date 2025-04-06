import React, { useEffect } from "react";
import './productDetail.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faDollarSign, faTurnDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from 'swiper/modules';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product_Detal = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    
    // const gotProduct = localStorage.getItem('selectedProduct', JSON.parse())
    const gotProduct = JSON.parse(sessionStorage.getItem('selectedProduct'));
    return(
        <>
            <div className="allGotBox">
                <div className="gotImgPart">
                    {gotProduct.img ? (
                        <img src={gotProduct.img} alt="product" />
                    ) : (
                        gotProduct.images && (
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {gotProduct.images.map((e, index) => (
                                    <SwiperSlide key={index} className="slide">
                                        <img src={e} alt={`product-image-${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )
                    )}
                </div>
            <div className="gotInfoPart">
                <h2><b>NAME</b>   {gotProduct.name}</h2>
                <p><b>INFORMATION</b>   {gotProduct.information}</p>
                <span>$ {gotProduct.price} </span>
                <h5 className="bigInfoP">{gotProduct.bigInfo}</h5>
                <div className="starsBox">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />

                </div>
            </div>
        </div>
        </>
    )

}
export default Product_Detal