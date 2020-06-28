import React from 'react';
import './scheduleRide.css';
import {motion} from 'framer-motion';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import Text from '../../components/TextComponent/Text';
import DatePicker from '../../components/DatePickerComponent/DatePicker';
import TimePicker from '../../components/TimePickerComponent/TimePicker';
import DropDownAmount from '../../components/DropDownAmountComponent/DropDownAmount';
const ScheduleRide = () => {
  return (
    <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}>
    <FloatingLogo/>
    <div className='all'>
    <div className='Date'>
    <Text text='Select pickup date'/>
    <DatePicker/>
    </div>
    <div className='Time'>
    <Text text='Select pickup time'/>
    <TimePicker/>
    </div>
    <div className='Amnt'>
    <Text text='Passenger amount'/>
    <div className='DD'>
    <DropDownAmount/>
    </div>
    </div>
    </div>
    </motion.div>
  )
}

export default ScheduleRide
