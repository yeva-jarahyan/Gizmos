import react from "react";
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <>
            <div className="mainContactBox">
                <div className="contactTextBox">
                    <div className="h2"> <h2>GET IN TOUCH WITH US</h2></div>
                    
                        <div className="p"><p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am aliqu am, velit rutrum dictum lobortis, turpis justo auc tor quam, a auctor. Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.

                        Nam nibh purus, fermentum sit amet lorem eget, pellentesque. Vestibulum vestibulum urna odio, non pulvinar mauris cursus.</p></div>
                        <div className="smallContacts">
                            <p><FontAwesomeIcon icon={faPhoneVolume} />  023 02 55 59</p>
                            <p><FontAwesomeIcon icon={faLocation} />   NEW  YORK, LOS ANGELES</p>
                            <p><FontAwesomeIcon icon={faVanShuttle} />   van only</p>
                            <p><FontAwesomeIcon icon={faMoneyBill1Wave} />   cash only</p>
                        </div>
                </div>

                <div className="contactData">
                    <textarea type='text' placeholder="your message"></textarea>
                    <input type="text" placeholder="your name"></input>
                    <input type="email" placeholder="your mail"></input>
                    <button className="submitBtn"> SUBMIT</button>
                </div>
            </div>
        </>
    )
}

export default Contact