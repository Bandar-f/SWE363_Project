import React from 'react';
import Customer from '../../components/CustomerComponent/Customer';
import WideButton from '../../components/WideButtonComponent/WideButton';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import './moreDetailsPage.css';
import uuid from 'react-uuid';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function MoreDetailsPage() {

	// // delete request using axios axios.delete(URL);
	//  const deleteTrip = async (id) => {
	//  	try {
	// 		.then(response => {
	// 			axios.delete('https://kptyn.herokuapp.com/trips')
	// 			.then(res => console.log(res.data));
	//  		alert("Trip has been cancelled")
	//  		})
	// 	} catch (e) {
	//  		console.log(`😱 Axios request failed: ${e}`);
	// 	}
	// 	};

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
				<div /*onClick={deleteTrip()}*/>
					<WideButton buttonTitle="Cancel Ride" />
					</div>
				</p>
			</div>
		</motion.div>
	);
}
