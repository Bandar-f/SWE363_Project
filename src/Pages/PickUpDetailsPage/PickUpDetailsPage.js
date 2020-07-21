import React, { Component } from 'react';
import CarComponent from '../../components/CarComponent/CarComponent';
import PersonWithRating from '../../components/PersonWithRatingComponent/PersonWithRating';
import PackageTrack from '../../components/PackageTrackComponent/PackageTrack';
import './pickUpDetailsPage.css';
import Text from '../../components/TextComponent/Text';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import axios from 'axios';
import { isEmpty } from 'underscore';

 class PickUpDetailsPage extends Component {
	 constructor(props) {
		 super(props)
	 }
	 componentDidMount() {
		this.getDriverById();
	 }
	state = {
		removeFromTrip: [],
		trips: [],
		isLoading: true
	}
	CallingD = async (id) => {
		try {
			const response = await axios.get(`https://kptyn.herokuapp.com/users/${id}`);
			const data = response.data.user;
			const userNumber = data.phoneNumber;
			window.location.href = `tel:${userNumber}`;
		} catch (e) {
			console.log(`😱 Axios request failed: ${e}`);
		}
	};
	Cancel = async (id) => {
		try {
			const response = await axios.get(`https://kptyn.herokuapp.com/trips/${id}`);
			const data = response.data.trip.customer;
			data.map(cust =>
			(this.props.userPresence.id != cust._id?
			this.state.removeFromTrip.push(cust)
			: '')
			);
			((!isEmpty(this.state.removeFromTrip))?
			await axios.put(`https://kptyn.herokuapp.com/trips/${id}`, {
			customer: this.state.removeFromTrip,
			}) : await axios.put(`https://kptyn.herokuapp.com/trips/${id}`, {
			customer: [''],
			}) )
			alert("ride cancelled successfully")
		} catch (e) {
			console.log(`😱 Axios request failed: ${e}`);
		}
	};
	getDriverById = async () => {
		try {
			const response = await axios.get(`https://kptyn.herokuapp.com/trips/`);
			const data = response.data;
			console.log(response)
			this.setState({ 
				trips: data, 
				isLoading: false 
			})
		} catch (e) {
			console.log('axios request failed ', e);
		}
	};
	render(){
		const { isLoading, trips } = this.state;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<div>
			<FloatingLogo />
			{!isLoading ?
			(trips.map(currenttrip =>
			(currenttrip.customer.map(cust =>
			(this.props.userPresence.id == cust._id && currenttrip.isComplete==false ?
			<div className="pickup-container">
				<div className="personal-withRating-wrapper">
				<PersonWithRating name={currenttrip.driver.name} rating={currenttrip.driver.totalRating} />
				</div>
				<CarComponent />
				<div className="middle">
					<button className="buttonT" onClick={this.Cancel.bind(null, currenttrip._id)}>
						Cancel
					</button>
					<button className="buttonT" onClick={this.CallingD.bind(null, currenttrip.driver._id)}>
						Call
					</button>
				</div>
				<hr />
			</div>
			:'') ) ) ) ) : <h1>Loading...</h1> }
		</div>
		</motion.div>
	);
}
}

export default PickUpDetailsPage;