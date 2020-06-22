import React from 'react'
import './welcomePage.css'
import FloatingLogo from '../floatingLogoComponent/FloatingLogo'
import PhoneNum from '../phoneNumComponent/PhoneNum'
                            /*----- TTK -----*/
 function WelcomePage() {
    return (
        <div>
            <FloatingLogo/>
            <h3>Welcome to <strong>KBTYN</strong>, <br/>please enter your phone number</h3>
            <PhoneNum/>
            <footer>
            <p>© 2020 Copyright Nawaf, Tariq, Yasser, Bandar & Co</p>
            </footer>
        </div>
    )
}

export default WelcomePage;
