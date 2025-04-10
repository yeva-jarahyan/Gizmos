import React from "react";
import { useContext } from "react";
import CreatedRecContext from "./recomendedContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const goToLocalCart = ((element) => {
    const selectedArray = JSON.parse(localStorage.getItem('selectedArr')) || [];

    // localStorage.setItem('selectedArr', JSON.stringify(selectedArray));
    // document.querySelector('.cartAddBtn').style.display = 'none'

    var prodid = selectedArray.find(e=> e.id === element.id)
    if(!prodid){
        selectedArray.push(element)
        localStorage.setItem('selectedArr', JSON.stringify(selectedArray));
    }else{
        alert('there already is such an item')
    }

})


const UseRecProdsContext_fun = () => {
    const recproducts = useContext(CreatedRecContext);
    const handleProductClick = (product) => {
        sessionStorage.setItem('selectedProduct', JSON.stringify(product));
    };
    return (
        recproducts.map((e) => {

            return (
                <div className="mainRecProduct" >
                    <Link to='/productDetail' onClick={() => handleProductClick(e)}>
                        <div className="recImgPart">
                            <img src={e.img}></img>
                        </div>
                        <div className="recInfoPart">
                            <div className="smth">
                                <h2>{e.name}</h2>
                                <span>{e.price}$</span>
                            </div>
                            <p>{e.information.length > 20 ? e.information.substring(0, 20) + "..." : e.information}</p>
                            </div>
                    </Link>
                    <div className="addCartBox">
                        <p>ADD TO CART</p>
                        <button className="cartAddBtn" onClick={() => goToLocalCart(e)}><FontAwesomeIcon icon={faCartShopping} /></button>
                    </div>
                </div>

            )
        })
    )
}

export default UseRecProdsContext_fun
