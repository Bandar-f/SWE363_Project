import React, { Component } from 'react';
import './packageTrackPage.css';
import Cap from '../../components/CarAndPerson/Cap';
import PackageTrack from '../../components/PackageTrackComponent/PackageTrack';
import { motion } from 'framer-motion';
import axios from 'axios';

 class PackageTrackPage extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount(){
		this.getDriver();
	}
	getDriver = async () => {
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
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<div className="">
				{/* <Cap name={trip.driver.name} rating={currenttrip.driver.totalRating} date=""/> */}
				<div className="track-container">
					<PackageTrack deliverOrPool={this.props.deliverOrPool} />
				</div>
			</div>
		</motion.div>
	);
}
}

export default PackageTrack;