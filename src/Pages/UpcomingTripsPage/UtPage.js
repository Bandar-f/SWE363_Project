import React, { useEffect, useState, Component } from 'react';
import './UtPage.css';
import Ut from '../../components/UpcomingTripsComponent/Ut';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import { motion } from 'framer-motion';
import axios from 'axios';

class UtPage extends Component {
	constructor(props){
		super(props);
	}
	
	state = { 
		trips: [],
		isLoading: true }

	componentDidMount() {
		this.getTrips();
	};

	getTrips() {
		axios.get(`https://kptyn.herokuapp.com/trips`)
		.then(response => {
			this.setState({ 
				trips: response.data,
				isLoading: false, 
			});
			console.log(response.data)
		}) .catch ((e) =>{
		console.log('request failed ', e.message);
		alert('fail');
		this.setState({ isLoading: false })
	})
	}
	render(){
		const { isLoading, trips } = this.state;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<FloatingLogo />
			<div className="UTWB1">

				{!isLoading ? ( trips.map(currenttrip =>{
									return <Ut trip={currenttrip}/>
				}) ) : <h1>Loading...</h1>}

				<br />
			</div>
		</motion.div>
	);
}
}
export default UtPage;
