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
	avaliableTrips:[],
	date:""
}



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


      












	constructor(props){
		super(props)
	}

	render() {
		const trips = window.$globalList;
		const setDate=(date)=>{
			this.setState({date:date});
		
		}
		
		const customer = this.props.userPresence;
		const { isLoading,avaliableTrips } = this.state;


		const addCustomerIntoTrip = async (customer, trip) => {
			this.driverSelection = true;
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
					<div className="goUPP" onInput={()=>{window.$globalList.map((trip,index)=>{

						 
						 console.log(trip.date+" this trip");

						 console.log(this.state.date);
												 
						
						
						if(window.$dateValue===trip.date)
						avaliableTrips.push(trip)

					
					if(index<window.$globalList.length){

					this.setState({isLoading:false,
						avaliableTrips:window.$globalList

					})
					
				}
					
					})}}>
						<DatePicker setDate={setDate} />
					</div>
					<br />
			
					
					<br />
					<div className="realign" id="sdr">
						<Text text="Select driver" />
					</div>
				</section>
				<div className="goUPP">
				{!isLoading ? 
				  avaliableTrips.map(currenttrip => 
					<div id="cnd" onClick={()=>addCustomerIntoTrip(customer, currenttrip)}>
					 <CarAndPerson name={currenttrip.driver.name} date={currenttrip.date} rating={currenttrip.driver.totalRating}/>
					</div>	)  
				: <h1>Loading...</h1>}
				</div>
				<section className="middle">
					<Link
						to={this.driverSelection ? '/PickupDetails' : '/dateAndTime'}
						onClick={() => addCustomerIntoTrip(customer,trips[0])}
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
