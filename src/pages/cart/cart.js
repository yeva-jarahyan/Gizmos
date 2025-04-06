

//  *-********************************************************** GPT tarberak *9*************************************************
import React, { useEffect, useState } from 'react';
import './cart.css';


import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

import { Navigation } from 'swiper/modules';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const [gotCartProd, setGotCartProd] = useState([]);
    const [itemCounts, setItemCounts] = useState({}); // Состояние для отслеживания количества каждого товара

    useEffect(() => {
        const fetchedCartProd = JSON.parse(localStorage.getItem('selectedArr')) || [];
        const cartSpan = document.querySelector('.cartSpan');
        const cartProdCount = fetchedCartProd.length;
        cartSpan.innerText = cartProdCount;
        setGotCartProd(fetchedCartProd);

        // Инициализация itemCounts для каждого товара в корзине
        const initialCounts = fetchedCartProd.reduce((acc, prod, index) => {
            acc[index] = 1; // По умолчанию количество товара равно 1
            return acc;
        }, {});
        setItemCounts(initialCounts);
    }, []);

    const handleIncrease = (index) => {
        setItemCounts((prev) => ({
            ...prev,
            [index]: prev[index] + 1, // Увеличиваем количество для конкретного товара
        }));
    };

    const handleDecrease = (index) => {
        setItemCounts((prev) => ({
            ...prev,
            [index]: Math.max(prev[index] - 1, 1), // Ограничиваем количество минимумом 1
        }));
    };

    const handleDelete = (index) => {
        const updatedCartProd = gotCartProd.filter((prod, prodIndex) => prodIndex !== index);
        setGotCartProd(updatedCartProd);
        localStorage.setItem('selectedArr', JSON.stringify(updatedCartProd));

        // Удаляем количество товара из состояния
        const updatedItemCounts = { ...itemCounts };
        delete updatedItemCounts[index];
        setItemCounts(updatedItemCounts);
    };

    return (
        <div className='mainCartBody'>
            <div className='cartProdTitleInfo'>
                <div className='prodTitle'><h2>PRODUCT</h2></div>
                <div className='prodselses'>
                    <h2>NAME</h2>
                    <h2>PRICE</h2>
                    <h2>INFO</h2>
                </div>
            </div>
            <div className='realCartProdBox'>
                {
                    gotCartProd.map((prod, index) => {
                        const count = itemCounts[index] || 1; // Получаем количество для товара или 1 по умолчанию
                        const totalPrice = prod.price * count; // Цена умноженная на количество
                        return (
                            <div className='oneProdLine' key={index}>
                                <div className='imageBox'>
                                    <div className='prodImgBox'>
                                        {prod.images ? (
                                            <Swiper
                                                spaceBetween={30}
                                                centeredSlides={true}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                {prod.images.map((e, idx) => (
                                                    <SwiperSlide key={idx} className="slide">
                                                        <img src={e} alt={`Product image ${idx}`} />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        ) : (
                                            <img src={prod.img} alt={`Product image ${index}`} />
                                        )}
                                    </div>
                                </div>
                                <div className='prodInfoBox'>
                                    <div className='onlyNamePart'><h2>{prod.name}</h2></div>
                                    <div className='onlyManagePart'>
                                        <button className='minusItem' onClick={() => handleDecrease(index)}>-</button>
                                        <h2>{totalPrice}</h2> {/* Отображаем общую цену для данного товара */}
                                        <button className='plusItem' onClick={() => handleIncrease(index)}>+</button>
                                        <p>{prod.information}</p>
                                        <button className='deleteBtn' onClick={() => handleDelete(index)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};


export default Cart;
