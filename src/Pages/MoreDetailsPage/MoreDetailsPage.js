import React from 'react';
import Customer from '../../components/CustomerComponent/Customer';
import WideButton from '../../components/WideButtonComponent/WideButton';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import './moreDetailsPage.css';
import uuid from 'react-uuid';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function MoreDetailsPage() {

	// delete request using axios axios.delete(URL);
	// const deleteTrip = async (id) => {
	// 	try {
	// 		// this.deleteTrip = this.deleteTrip.bind(this)

	// 		// this.state = {trips: []};

	// 		axios.get(' http://127.0.0.1:8000/trips/deleteTrip')
	// 		.then(response => {
	// 			this.setState({ trips: response.data })
	// 		})
	// 	} catch (e) {
	// 		console.log(`😱 Axios request failed: ${e}`);
	// 	}
	// 	axios.delete('http://127.0.0.1:8000/trips/'+id)
	// 	.then(res => console.log(res.data));
	// 	alert("Trip has been cancelled")
		
	// 	this.setState({
	// 		trips: this.state.trips.filter(el => el._id !== id)
	// 	})
	//onClick={deleteTrip(trips._id)} for the div
	// };

	const customers = ['Nawaf al sharqi', 'Bandar Al Balawy', 'Tariq Al Khamis', 'Yasser Jaber'];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<FloatingLogo />
			<h1 className="tag-info">Customers</h1>
			<div className="info-container">
				{customers.map((customer) => (
					<p key={uuid()}>
						<Customer customer={customer} />
					</p>
				))}
				<p className="wide-button-span">
				<div /*onClick={deleteTrip(trips._id)}*/>
					<WideButton buttonTitle="Cancel Ride" />
					</div>
				</p>
			</div>
		</motion.div>
	);
}
