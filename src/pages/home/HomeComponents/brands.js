import React from "react";
import './brands.css';

const BrandsProps = (props) => {
    return (
        <div className="brandsImg"><img src={props.img}></img></div>
    )
}

function ShoeBrands() {
    return (
        <>
            <div className="brandsBox">
                <BrandsProps img='https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/client-1-1-1.png' />
                <BrandsProps img='https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/client-2-2-2.png' />
                <BrandsProps img='https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/client-3-3-3.png' />
                <BrandsProps img='https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/client-6-6-6.png' />
                <BrandsProps img='https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/client-5-5-5.png' />
                <BrandsProps img='https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/client-4-4-4.png' />
            </div>
            <div className="brandsProds">
                <div className="brandprod">
                    <div className="breandProdImgPart"><img src="https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/home-11-banner-5.jpg"></img></div>
                    <div className="brendProdInfoPart">
                        <h3>LIMMETED WEAKLY DEICOUND</h3>
                        <span>596$</span>
                        <p>made in germany</p>
                    </div>
                </div>
                <div className="brandprod">
                    <div className="breandProdImgPart"><img src="https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/home-11-banner-3.jpg"></img></div>
                    <div className="brendProdInfoPart">
                        <h3>PHOTO DRONES</h3>
                        <span>1500 $</span>
                        <p>mede in moldova</p>
                    </div>
                </div>
                <div className="brandprod">
                    <div className="breandProdImgPart"><img src="https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/home-11-banner-4.jpg"></img></div>
                    <div className="brendProdInfoPart">
                        <h3> PS PART</h3>
                        <span>70 $</span>
                        <p>made in russia</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ShoeBrands