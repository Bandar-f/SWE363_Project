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
const dsToTrue = () => {
	driverSelection = true;
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
	render() {
		const trips = window.$globalList;
		const customer = this.props.userPresence;
		console.log(trips[0]);

		const addCustomerIntoTrip = async (customer, trip) => {
			console.log('hi there', customer);
			try {
				console.log(trip.customer);
				const response = await axios.put(`https://kptyn.herokuapp.com/trips/${trip._id}`, {
					customer: [...trip.customer, customer],
				});
				console.log(response);
			} catch (e) {
				console.log(`network failed ${e}`);
			}
		};

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
					<div id="cnd" onClick={dsToTrue}>
						<CarAndPerson />
					</div>
				</div>
				<section className="middle">
					<Link
						to={driverSelection ? '/PickupDetails' : '/dateAndTime'}
						onClick={() => addCustomerIntoTrip(customer._customer, trips[0])}
					>
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
