import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './footer.css'
const CreateFooterr = () => {
    return (
        <>
            <div className="allFooter">
                <div className="footerEmailPart">
                    <div className="emailText">Sign up to Newsletter</div>
                    <div className="emailInputPart">
                        <input type="email" placeholder="type your email" className="emailInput"></input>
                        <button className="sendEmailBtn"><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                    <div className="followPart">
                        <div>FOLLOW US</div>
                        <div className="followIcns"> || || || || ||</div>
                    </div>
                </div>
                <div className="messyFooterPart">
                    <div className="privacy">
                        <div className="nameBox"><h3>OUR PRIVACY</h3></div>
                        <div className="elseBox"> <p>Returns & Exchanges</p>
                            <p>Payment Terms</p>
                            <p>Delivery Terms</p>
                            <p>Payment & Pricing</p>
                            <p>Terms Of Use</p></div>

                    </div>
                    <div className="involved">
                        <div className="nameBox"><h3>GET INVOLVED</h3> </div>
                        <div className="elseBox">   <p>About Us</p>
                        <p>Our Vision</p>
                        <p>Delivery Terms</p>
                        <p>Payment & Pricing</p>
                        <p>Office Supplies</p></div>
                     
                    </div>
                    <div className="quikLinks">
                        <div className="nameBox"><h3>GET INVOLVED</h3></div>
                        <div className="elseBox"><p>About Us</p>
                        <p>Smartphones</p>
                        <p>Laptop & Tablet</p>
                        <p>Printers</p>
                        <p>Gadgets</p></div>
                        
                    </div>
                    <div className="costumerCare">
                        <div className="nameBox"><h3>GET INVOLVED</h3></div>
                        <div className="elseBox"><p>FAQs</p>
                        <p>My Account</p>
                        <p>Customer Service</p>
                        <p>Printers</p>
                        <p>Gadgets</p></div>
                        
                    </div>
                </div>
                <div className="footerPhonePart">
                    <div className="log"><img src="https://gizmos.qodeinteractive.com/wp-content/uploads/2022/11/logo-white-new.png"></img></div>
                    <div className="phoneNUmber">099 25 26 28</div>
                </div>
            </div>
        </>
    )
}

export default CreateFooterr