

import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faDollarSign, faTurnDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import CreateFooterr from "../pages/home/HomeComponents/footer";

const Layout = () => {
    const [openNav, openNavFun] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [itemCounts, setItemCounts] = useState({}); // Состояние для отслеживания количества каждого товара
    
    // Effect to calculate total price from localStorage
    useEffect(() => {
        let allCount = 0;
        const selectedArr = JSON.parse(localStorage.getItem('selectedArr'));

        if (selectedArr && Array.isArray(selectedArr)) {
            selectedArr.forEach((e) => {
                if (typeof e.price === 'number') {
                    allCount += e.price;
                } else {
                    console.log('Invalid price value:', e.price);
                }
            });
            setTotalCount(allCount); // Set total price in the state
        } else {
            console.log('selectedArr is not available or not an array');
        }

        const fetchedCartProd = JSON.parse(localStorage.getItem('selectedArr')) || [];
        const cartSpan = document.querySelector('.cartSpan');
        const cartProdCount = fetchedCartProd.length;
        cartSpan.innerText = cartProdCount;
        // Инициализация itemCounts для каждого товара в корзине
        const initialCounts = fetchedCartProd.reduce((acc, prod, index) => {
            acc[index] = 1; // По умолчанию количество товара равно 1
            return acc;
        }, {});
        setItemCounts(initialCounts);


    }, []); // Empty array ensures this effect only runs once after the initial render

    return (
        <>
            <header className="header">
                <div className="logoPart">
                    <div className="logo"><img src="https://gizmos.qodeinteractive.com/wp-content/uploads/2022/11/logo-white-new.png" alt="Logo"></img></div>
                    <button className="openNav" onClick={() => { openNavFun(!openNav) }}>
                        <FontAwesomeIcon icon={openNav ? faXmark : faTurnDown} />
                    </button>
                </div>

                <div className="o">
                    <div className={openNav ? 'textLists' : 'closeNav'}>
                        <ul>
                            <li>
                                <Link to='/'>Home Page</Link>
                            </li>
                            <li>
                                <Link to='/About'>About us</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="listPart">
                       

                        <div className="iconLists">
                            <ul>
                                <li>
                                    <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} /></Link>
                                    <span className="cartSpan"></span>
                                    {/* <div className="cartSpan"></div> */}
                                </li>
                                <li>
                                    <Link><FontAwesomeIcon icon={faDollarSign} /></Link>
                                    <span className="priceSpan">{totalCount}</span> {/* Display the calculated total count */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
            <CreateFooterr />
        </>
    );
}

export default Layout;
