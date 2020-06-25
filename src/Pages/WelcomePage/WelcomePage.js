import React from 'react'
import './welcomePage.css'
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo'
import PhoneNum from '../../components/PhoneNumComponent/PhoneNum'
import Text from './../../components/TextComponent/Text'
import WideButton from '../../components/WideButtonComponent/WideButton'
                            /*----- TTK -----*/
 function WelcomePage() {
    return (
        <div class='welcome'>
           <FloatingLogo/>
            <div class="message">
            <Text text="Welcome to"/><strong>KBTYN</strong>
            <br/>
            <Text text= "Please enter your phone number"/><br/>
            <PhoneNum/>
            </div>
            <br/>
            <WideButton/>
            <footer>
            <p id="copyrights">© 2020 Copyright Nawaf, Tariq, Yasser, Bandar & Co</p>
            <br/>
            </footer>
        </div>
    )
}

export default WelcomePage;
