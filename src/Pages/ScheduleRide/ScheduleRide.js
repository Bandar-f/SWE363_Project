import React from 'react';
import './scheduleRide.css';
import { motion, usePresence } from 'framer-motion';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import Text from '../../components/TextComponent/Text';
import DatePicker from '../../components/DatePickerComponent/DatePicker';
import TimePicker from '../../components/TimePickerComponent/TimePicker';
import DropDownAmount from '../../components/DropDownAmountComponent/DropDownAmount';
import WideButton from '../../components/WideButtonComponent/WideButton';
import axios from 'axios';

const ScheduleRide = (props) => {

	const getRideInfoAndSave = async () => {
		// get destination from the drop down menu
		const Destination = window.$DestinationValue
		// get pickup date and time from the date selector
		const Date = window.$dateValue;
		const Time = window.$timeValue;
		// get passenger amount
		const Amount = window.$amountValue;
		// POST iN Database
		try {
			const response = await axios.post('https://kptyn.herokuapp.com/trips', {
				location: Destination,
				time: Time,
				date: Date,
				passengerAmount: Amount,
				driver: props.userPresence,
			}) 
			alert("ride scheduled successfully");
			
		} catch (err) {
			console.error('Posting trips data failed ', err.message);
		}
	};
	const stateHandle = (e) => {
		window.$DestinationValue = e.target.value;
	};
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<FloatingLogo />
			<div className="all">
				<div className="realign">
					<Text text="Select destination" />
				</div>
				<div>
					<select name="destination" id="rideRoute2" onChange={stateHandle}>
						<option value="" disabled selected >
							Select Destination
						</option>
						<option value="Dhahran">Dhahran</option>
						<option value="Khobar">Khobar</option>
						<option value="Dammam">Dammam</option>
						<option value="Qatif">Qatif</option>
						<option value="Jubail">Jubail</option>
						<option value="Alahasaa">Alahasaa</option>
						<option value="Riyadh">Riyadh</option>
						<option value="Qasseem">Qasseem</option>
						<option value="Hafoof">Hafoof</option>
						<option value="Albaqiq">Albaqiq</option>
					</select>
				</div>
				<div className="Date">
					<div className="pickupAlign">
						<Text text="Select pickup date" />
					</div>
					<div className="goUPPP">
						<DatePicker />
					</div>
				</div>
				<div className="Time">
					<div className="timeAlign">
						<Text text="Select pickup time" />
					</div>
					<div className="goUPPP">
						<TimePicker />
					</div>
				</div>
				<div className="Amnt">
					<Text text="Passenger amount" />
				</div>
				<div className="DD">
					<DropDownAmount />
				</div>
				<div onClick={getRideInfoAndSave}>
				<WideButton buttonTitle="Schedule Ride" />
				</div>
				
			</div>
		</motion.div>
		
	);
};

export default ScheduleRide;
