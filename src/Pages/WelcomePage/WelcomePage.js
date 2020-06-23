import React from 'react'
import './welcomePage.css'
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo'
import PhoneNum from '../../components/PhoneNumComponent/PhoneNum'
import Text from './../../components/TextComponent/Text'
                            /*----- TTK -----*/
 function WelcomePage() {
    return (
        <div class='welcome'>
           <FloatingLogo/>
            <Text text="Welcome to"/><strong>KBTYN</strong>
            <br/>
            <Text text= "Please enter your phone number"/>
            <PhoneNum/>
            <footer>
            <p id="copyrights">© 2020 Copyright Nawaf, Tariq, Yasser, Bandar & Co</p>
            </footer>
        </div>
    )
}

export default WelcomePage;
