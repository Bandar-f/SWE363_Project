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

const titles=["History","Pickup Details", "Request ride"];

class DateNDriver extends Component {
    render() {

        return (
            <div>
            <FloatingLogo/>
            <section class="middle" >
                <div class="realign">
                <Text text="Select pickup date"/>
                </div>
                <DatePicker/>
                <br/>
                <div class="realign">
                <Text text="Select pickup time"/>
                </div>
                <TimePicker/>
                <br/>
                <div class="realign">
                <Text text="Select driver"/>

                </div>
            </section>
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
            <section class="middle" >


               <Link to="/PickupDetails"> <WideButton buttonTitle="Continue"/> </Link>



                
                <br/>
            </section>
            </div>
        )
    }
}

export default DateNDriver;