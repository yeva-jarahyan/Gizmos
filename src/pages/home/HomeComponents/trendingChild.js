import React from "react";
import TrendingContext from "./trendingProdContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const goToLocalCart = ((element) => {
    const selectedArray = JSON.parse(localStorage.getItem('selectedArr'))||[];

    var prodid = selectedArray.find(e=> e.id === element.id)
    if(!prodid){
        selectedArray.push(element)
        localStorage.setItem('selectedArr', JSON.stringify(selectedArray));
    }else{
        alert('there alredy is such an item')
    }

})

const UserTrendingProdContext = () => {
    const trendContext = useContext(TrendingContext);
    const trendingProdsLocal = (prod) => {
        sessionStorage.setItem('selectedProduct', JSON.stringify(prod));
    };

    const parseStyle = (styleString) => {
        const styleObject = {};
        // Check if the string matches a --customProperty: value format
        const rules = styleString.split(';').map(rule => rule.trim()).filter(Boolean);
        rules.forEach(rule => {
            const [key, value] = rule.split(':').map(part => part.trim());
            if (key && value) {
                styleObject[key] = value;
            }
        });
        return styleObject;
    };

    return (
        trendContext.map((e) => {
            // Parse the Style string into an object
            const styleObject = parseStyle(e.Style);

            return (
                <Link to='/productDetail' onClick={() => trendingProdsLocal(e)} data-id={e.id}>
                    <div className="mainTrendingProd" style={styleObject} key={e.name}>
                        {/* <div className="typePart">{e.Style}</div> */}
                        <div className="imgPart">
                            <img src={e.img} alt={e.name} />
                        </div>
                        <div className="infoPart">
                            <h3>{e.name}</h3>
                            <span>{e.price}$</span>
                            <p>{e.information}</p>
                        </div>
                        <div className="addCartBox">
                            <p>ADD TO CART</p>
                            <button className="cartAddBtn" onClick={() => goToLocalCart(e)}><FontAwesomeIcon icon={faCartShopping} /></button>
                            </div>
                    </div>
                </Link >

            );
        })
    );
};


export default UserTrendingProdContext
