import React from 'react'
import './welcomePage.css'
import FloatingLogo from '../FloatingLogoComponent/FloatingLogo'
import PhoneNum from '../phoneNumComponent/PhoneNum'
                            /*----- TTK -----*/
 function WelcomePage() {
    return (
        <div>
            <FloatingLogo/>
            <h3 id="message">Welcome to <strong>KBTYN</strong>, <br/>Please enter your phone number</h3>
            <PhoneNum/>
            <footer>
            <p id="copyrights">© 2020 Copyright Nawaf, Tariq, Yasser, Bandar & Co</p>
            </footer>
        </div>
    )
}

export default WelcomePage;
