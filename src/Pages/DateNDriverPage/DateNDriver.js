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

// Then using map on the CarAndPerson and passing each data from the array
class DateNDriver extends Component {
	driverSelection = false;
	state = {
		isLoading: true,
		avaliableTrips: [],
		date: '',
	};

	// getAllRides = async (destination) => {
	// 	try {
	// 		// getting all trips satisfying location
	// 		const res = await axios.post('https://kptyn.herokuapp.com/trips/getTripByLocation', {
	// 			location: destination,
	// 		});
	// 		console.log("response for datentime");
	// 		console.log(res.data);
	// 		console.log("response for datentime");

	// 		// filtering the results to get only dates on and before the selected date
	// 		const cities = res.data.filter(
	// 			(res) => res.date <= window.$dateValue && res.time <= window.$timeValue
	// 		);
	// 		// first sorting by time, then by date
	// 		cities = _.sortBy(cities, 'time');
	// 		cities = _.sortBy(cities, 'date');
	// 		console.log(cities);
	// 		this.setState({ isLoading: false })
	// 		return cities;
	// 	} catch (err) {
	// 		console.log(`Axios request failed at getAllRides: ${err}`);
	// 	}
	// };

	constructor(props) {
		super(props);
	}

	render() {
		const trips = window.$globalList;
		const search = () => {
			console.log('for some reason i am not working');

			let output = [];

			window.$globalList.map((trip, index) => {
				const thisTripDate = trip.date.substring(0, 10);

				if (window.$dateValue === thisTripDate) output.push(trip);

				if (index < window.$globalList.length) {
					this.setState({ isLoading: false, avaliableTrips: output });
				}
			});
		};

		const customer = this.props.userPresence;
		const { isLoading, avaliableTrips } = this.state;

		console.log(customer);
		const addCustomerIntoTrip = async (customer, trip) => {
			this.driverSelection = true;
			try {
				console.log(trip);
				const response = await axios.post(
					`https://kptyn.herokuapp.com/trips/${trip._id}/customers`,
					{
						customer: customer.id,
					}
				);
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

					<br />
					<div className="realign" id="sdr">
						<Text text="Select driver" />
					</div>
				</section>
				<div className="goUPP">
					{!isLoading ? (
						avaliableTrips.map((currenttrip) => (
							<Link to={this.driverSelection ? '/PickupDetails' : '/dateAndTime'}>
								<div id="cnd" onClick={() => addCustomerIntoTrip(customer, currenttrip)}>
									<CarAndPerson
										name={currenttrip.driver.name}
										date={currenttrip.date}
										rating={currenttrip.driver.totalRating}
									/>
								</div>{' '}
							</Link>
						))
					) : (
						<h1>Loading...</h1>
					)}
				</div>
				<section className="middle">
					{' '}
					<WideButton search={search} buttonTitle="Search" /> <br />
				</section>
			</motion.div>
		);
	}
}

export default DateNDriver;
