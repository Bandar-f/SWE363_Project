import React from 'react'
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo'
import RadioImgBackground from '../../components/RadioImgBackgroundComponent/RadioImgBackground'
import RadioButton from '../../components/RadioButtonComponent/RadioButton'
import "./MobileNumber.css"
import PhoneNum from '../../components/PhoneNumComponent/PhoneNum'
import WideButton from '../../components/WideButtonComponent/WideButton'
import { Link } from 'react-router-dom'

const MobileNumber = (props) => {


  

  return (
    <div>
      <FloatingLogo/>
      <RadioButton UserOrWorker={props.UserOrWorker} />

      <p className="login-text">Enter your mobile number</p>

      <PhoneNum/>

      <Link to="/secondLog">
      <WideButton buttonTitle="Continue"/>
      </Link>
    </div>
  )
}

export default MobileNumber
