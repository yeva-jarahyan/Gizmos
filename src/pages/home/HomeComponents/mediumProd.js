import React from "react";
import './mediumProd.css'


const RenderMediumProds = () => {
    return(
        <>
        <div className="mediumProdsBox">
            <div className="firstMediumProd">
                <div className="mediumProductInfoPart">
                    <p>DO NOT LOOSE YOUR CHANCE BUY IT NOW!</p>
                    <button className="mediumProdBtn">see now</button>
                </div>
                <div className="mediumProdImgPart">
                    <img src="https://gizmos.qodeinteractive.com/wp-content/uploads/2022/09/home-11-banner-2.jpg"></img>
                </div>
            </div>

            <div className="secondMediumProd">
                <div className="mediumProductInfoPart">
                    <p>DO NOT LOOSE YOUR CHANCE BUY IT NOW!</p>
                    <button className="mediumProdBtn">see now</button>
                </div>
                <div className="mediumProdImgPart">
                    <img src="https://gizmos.qodeinteractive.com/wp-content/uploads/2022/09/home-11-banner-1.jpg"></img>
                </div>
            </div>
        </div>
        </>
    )
}

export  default RenderMediumProds;