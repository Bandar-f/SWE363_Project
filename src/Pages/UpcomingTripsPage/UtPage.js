import React, { useEffect, useState, Component } from 'react';
import './UtPage.css';
import Ut from '../../components/UpcomingTripsComponent/Ut';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import WideButton from '../../components/WideButtonComponent/WideButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

class UtPage extends Component {
		constructor(props) {
			super(props);
			this.state = { trips: [] }
		}

	componentDidMount() {

			axios.get(`https://kptyn.herokuapp.com/trips`)
			.then(response => {
				this.setState({ trips: response.data });
				console.log(response.data)

			}) .catch ((e) =>{
			console.log('request failed ', e.message);
			alert('fail');
		})
	};

	tripList() {
		this.state.trips.map(currenttrip =>{
			return <Ut trip={currenttrip}/>
		})
	};
	render(){
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<FloatingLogo />
			<div className="UTWB1">
				{ this.tripList() }
				<Link to="/MoreDetails">
					<WideButton buttonTitle="More Details" />
				</Link>
				<hr />
				{/* <Ut date="06/29/2020" destination="Dammam" time="13:00" place="KFUPM Mall Parking" /> */}
				{}
				<Link to="/MoreDetails">
					<WideButton buttonTitle="More Details" />
				</Link>
				<br />
			</div>
		</motion.div>
	);
}
}
export default UtPage;
