import React from 'react';
import Customer from '../../components/CustomerComponent/Customer';
import WideButton from '../../components/WideButtonComponent/WideButton';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import './moreDetailsPage.css';
import uuid from 'react-uuid';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MoreDetailsPage(props) {

	// // delete request using axios axios.delete(URL);
	//  const deleteTrip = async (id) => {
	//  	try {
	// 			axios.delete('https://kptyn.herokuapp.com/trips/'.id)
	// 			.then(res => console.log(res.data));
	//  		alert("Trip has been cancelled")
	// 	} catch (e) {
	//  		console.log(`😱 Axios request failed: ${e}`);
	// 	}
	// 	};




   let customers=[];







	const getTrips= ()=>{

		let trips=[];
		

		axios({
			method:'get',
			url:"https://kptyn.herokuapp.com/trips/",
				
		})
		.then((res)=>{trips=res.data; console.log(res.data);})
		.catch((err)=>{console.log(err)});





	trips.map((trip)=>{

		if(trip.driver===props.userPresence){
			customers=trip.customer[0];
			

		}else;
		
		

	})
}





	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<FloatingLogo />
			<h1 className="tag-info" onClick={getTrips}>Customers</h1>
			<div className="info-container">
				{customers.map((customer) => (
					<p key={uuid()}>
						<Customer customer={customer} />
					</p>
				))}
				<p className="wide-button-span">
				<div /*onClick={completeRide(props.id)}*/>
				<Link to="/UpcomingTrips">
					<WideButton buttonTitle="Ride Complete" />
				</Link>
				</div>
				<div /*onClick={deleteTrip(props.id)}*/>
				<Link to="/UpcomingTrips">
					<WideButton buttonTitle="Cancel Ride" />
				</Link>
				</div>
				</p>
			</div>
		</motion.div>
	);
}
