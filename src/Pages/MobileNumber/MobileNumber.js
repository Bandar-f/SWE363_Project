import React from 'react'
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo'
import RadioImgBackground from '../../components/RadioImgBackgroundComponent/RadioImgBackground'
import RadioButton from '../../components/RadioButtonComponent/RadioButton'
import "./MobileNumber.css"
import PhoneNum from '../../components/PhoneNumComponent/PhoneNum'
import WideButton from '../../components/WideButtonComponent/WideButton'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';

const MobileNumber = (props) => {


  

  return (
    <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
     >
      <FloatingLogo/>
      <RadioButton UserOrWorker={props.UserOrWorker} />

      <p className="login-text">Enter your mobile number</p>

      <PhoneNum/>

      <Link to="/secondLog">
      <WideButton buttonTitle="Continue"/>
      </Link>
    </motion.div>
  )
}

export default MobileNumber
