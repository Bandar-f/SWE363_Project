import React, { Component } from 'react';
import Customer from '../../components/CustomerComponent/Customer';
import WideButton from '../../components/WideButtonComponent/WideButton';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import './moreDetailsPage.css';
import uuid from 'react-uuid';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MoreDetailsPage extends Component{
	constructor(props) {
		super(props);
	}
	state = { 
		customers: window.$tripPass.customer,
		isLoading: true,
		trId: window.$tripPass._id }

	// delete request using axios axios.delete(URL);
	deleteTrip = async (id) => {
		try {
			const response = await axios.delete(
				`https://kptyn.herokuapp.com/trips/${id}`
			);
			alert('Trip has been cancelled');
			console.log(response)
		} catch (e) {
			console.log(`😱 Axios request failed: ${e}`);
		}
	};

	completeRide = async (id) => {
		try {
			console.log(id);
			const response = await axios.put(
				`https://kptyn.herokuapp.com/trips/${id}`,
				{
					isComplete: true,
				}
			);
			console.log(response)
			alert('Trip has been completed');
		} catch (e) {
			console.log(`😱 Axios request failed: ${e}`);
		}
	};

	render() {
		const {trId, customers} = this.state;
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
					<br />
					<p className="wide-button-span">
						<div onClick={this.completeRide.bind(null, trId)}>
							<Link to="/UpcomingTrips">
								<WideButton buttonTitle="Ride Complete" />
							</Link>
						</div>
						<br />
						<div onClick={this.deleteTrip.bind(null, trId)}>
							<Link to="/UpcomingTrips">
								<WideButton buttonTitle="Cancel Ride"/>
							</Link>
						</div>
					</p>
				</div>
			</motion.div>
		);
	}
}

export default MoreDetailsPage;
