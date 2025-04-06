import { useContext,useEffect } from "react";
import CreatedContext from "./productContext";
import './top_prod.css';
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules

import { Navigation } from 'swiper/modules';

const goToLocalCart = ((element) => {

    const selectedArray = JSON.parse(localStorage.getItem('selectedArr')) || [];


    var prodid = selectedArray.find(e => e.id === element.id)
    if (!prodid) {
        selectedArray.push(element)
        localStorage.setItem('selectedArr', JSON.stringify(selectedArray));
    } else {
        alert('tenc apranq arden ka!!!!')
    }

    // selectedArray.push(element)

})


const Child_Fun = () => {
    const products = useContext(CreatedContext);
    const topProdsLocalSt = ((topPr) => {
        sessionStorage.setItem('selectedProduct', JSON.stringify(topPr));
    })

    return (
        <>
            {
                products.map((e) => (
                    <div className="mainProduct">
                        <Link to='/productDetail' onClick={() => topProdsLocalSt(e)} className="imgPart">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {e.images.map((element) => {
                                    // return <img src={element}></img>
                                    return (
                                        <SwiperSlide className="slide">
                                            <img src={element}></img>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>

                        </Link>
                        <Link to='/productDetail' onClick={() => topProdsLocalSt(e)} className="infoPart">
                            <h3>{e.name}</h3>
                            <p>{e.information}</p>
                            <span>{e.price}$</span>
                        </Link>
                        <div className="addCartBox">
                            <p>ADD TO CART</p>
                            <button className="cartAddBtn" onClick={() => {
                                document.querySelector('.cartAddBtn').style.pointerEvents = 'none'
                                goToLocalCart(e)
                            }}><FontAwesomeIcon icon={faCartShopping} /></button>
                        </div>
                    </div>
                )
                )
            }
        </>
    )
}

export default Child_Fun

