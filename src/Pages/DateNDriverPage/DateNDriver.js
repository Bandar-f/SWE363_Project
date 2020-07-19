import React, { Component } from 'react';
import './dateNDriver.css';
import '../RequestRidePage/requestRide.css';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import Text from '../../components/TextComponent/Text';
import DatePicker from '../../components/DatePickerComponent/DatePicker';
import TimePicker from '../../components/TimePickerComponent/TimePicker';
import CarAndPerson from '../../components/CarAndPerson/Cap';
import WideButton from '../../components/WideButtonComponent/WideButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import _ from 'underscore';

let driverSelection = false;
const addCustomerIntoTrip = async (customer, trId) => {
	try {
		driverSelection = true;
		const response = await axios.put(`https://kptyn.herokuapp.com/trips/${trId}`, {
			customer: customer.push(customer),
		});
		alert("trip scheduled successfully")
	} catch (e) {
		console.log(`network failed ${e}`);
	}
};

const getAllRides = async (destination) => {
	try {
		// getting all trips satisfying location
		const res = await axios.post('https://kptyn.herokuapp.com/trips/getTripByLocation', {
			location: destination,
		});
		console.log(res.data);
		// filtering the results to get only dates on and before the selected date
		const cities = res.data.filter(
			(res) => res.date <= window.$dateValue && res.time <= window.$timeValue
		);
		// first sorting by time, then by date
		cities = _.sortBy(cities, 'time');
		cities = _.sortBy(cities, 'date');
		console.log(cities);
		return cities;
	} catch (err) {
		console.log(`Axios request failed at getAllRides: ${err}`);
	}
};
// Then using map on the CarAndPerson and passing each data from the array
class DateNDriver extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 2 }}
			>
				<FloatingLogo />
				<div className="middle">
					<Link to="/RequestRide">
						<button className="rect1"></button>
					</Link>
					<button className="rect1"></button>
				</div>
				<section className="middle">
					<div className="realign">
						<Text text="Select pickup date" />
					</div>
					<div className="goUPP">
						<DatePicker />
					</div>
					<br />
					<div className="realign">
						<Text text="Select pickup time" />
					</div>
					<div className="goUPP">
						<TimePicker />
					</div>
					<br />
					<div className="realign" id="sdr">
						<Text text="Select driver" />
					</div>
				</section>
				<div className="goUPP">
					<div id="cnd" onClick={addCustomerIntoTrip("5f138feddc31aa001727db70", "5f1219d29b148f0017b7269a")}>
						<CarAndPerson name="test33driver" date="2020-07-20" rating="4"/>
					</div>
				</div>
				<section className="middle">
					<Link to={driverSelection ? '/PickupDetails' : '/dateAndTime'}>
						{' '}
						<WideButton buttonTitle="Next" />{' '}
					</Link>

					<br />
				</section>
			</motion.div>
		);
	}
}

export default DateNDriver;
