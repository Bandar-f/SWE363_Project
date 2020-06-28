import React from 'react';
import './scheduleRide.css';
import {motion} from 'framer-motion';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import Text from '../../components/TextComponent/Text';
import DatePicker from '../../components/DatePickerComponent/DatePicker';
import TimePicker from '../../components/TimePickerComponent/TimePicker';
import DropDownAmount from '../../components/DropDownAmountComponent/DropDownAmount';
import WideButton from '../../components/WideButtonComponent/WideButton';

const ScheduleRide = () => {
  return (
    <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}>
    <FloatingLogo/>
    <div className='all'>
    <div className='Date'>
    <div className='pickupAlign'>
    <Text text='Select pickup date'/>
    </div>
    <DatePicker/>
    </div>
    <div className='Time'>
    <div className='timeAlign'>
    <Text text='Select pickup time'/>
    </div>
    <TimePicker/>
    </div>
    <div className='Amnt'>
    <Text text='Passenger amount'/>
    </div>
    <div className='DD'>
    <DropDownAmount/>
    </div>
    <WideButton buttonTitle="Schedule Ride"/>
    </div>
    </motion.div>
  )
}

export default ScheduleRide
