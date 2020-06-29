import React, { Component } from 'react'
import './dateNDriver.css'
import '../RequestRidePage/requestRide.css'
import NavBar from '../../components/NavBarComponent/NavBar'
import Sidemenu from '../../components/Sidemenu/Sidemenu'
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo'
import Text from '../../components/TextComponent/Text'
import Button from '../../components/WideButtonComponent/WideButton'
import DatePicker from '../../components/DatePickerComponent/DatePicker'
import TimePicker from '../../components/TimePickerComponent/TimePicker'
import CarAndPerson from '../../components/CarAndPerson/Cap'
import WideButton from '../../components/WideButtonComponent/WideButton'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';


const titles=["History","Pickup Details", "Request ride"];

class DateNDriver extends Component {
    render() {

        return (
            <motion.div initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:2}}
             >
            <FloatingLogo/>
            <section class="middle" >
                <div class="realign">
                <Text text="Select pickup date"/>
                </div>
                <div className="goUPP">
                <DatePicker/>
                </div>
                <br/>
                <div class="realign">
                <Text text="Select pickup time"/>
                </div>
                <div className="goUPP">
                <TimePicker/>
                </div>
                <br/>
                <div class="realign">
                <Text text="Select driver"/>
                </div>
            </section>
            <div class='goUPP'>
            <div id='cnd'>
                <CarAndPerson/>
            </div>
            <div id='cnd'>
                <CarAndPerson/>
            </div>
            <div id='cnd'>
                <CarAndPerson/>
            </div>
            <div id='cnd'>
                <CarAndPerson/>
            </div>
            </div>
            <section class="middle" >


               <Link to="/PickupDetails"> <WideButton buttonTitle="Continue"/> </Link>



                
                <br/>
            </section>
            </motion.div>
        )
    }
}

export default DateNDriver;