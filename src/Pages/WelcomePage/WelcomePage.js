import React from 'react'
import './welcomePage.css'
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo'
import PhoneNum from '../../components/PhoneNumComponent/PhoneNum'
import Text from './../../components/TextComponent/Text'
import WideButton from '../../components/WideButtonComponent/WideButton'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';

                            /*----- TTK -----*/
 function WelcomePage() {
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}
         >
        <div class='welcome'>
           <FloatingLogo/>
            <div class="message">
            <Text text="Welcome to"/><strong>KBTYN</strong>
            <br/>
            <Text text= "Please enter your phone number"/><br/>
            <Link to="/Login">
            <PhoneNum />
            </Link>
            </div>
            <br/>
            <footer>
            <p id="copyrights">© 2020 Copyright Nawaf, Tariq, Yasser, Bandar & Co</p>
            <br/>
            </footer>
        </div>
        </motion.div>
    )
}

export default WelcomePage;
