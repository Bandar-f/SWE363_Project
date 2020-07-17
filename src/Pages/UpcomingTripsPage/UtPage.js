import React from 'react';
import './UtPage.css';
import Ut from '../../components/UpcomingTripsComponent/Ut';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import WideButton from '../../components/WideButtonComponent/WideButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

function UtPage() {

	const getTrips = async () => {
		try {
			const response = await axios.get('https://kptyn.herokuapp.com/trips');
			//const data = response.data;
			console.log('response data:', response.data);
	
			if (response.status != 200) {
				console.log('no');
				alert('nope')
			} else {
				console.log('yes');
				alert(response);
			response.map(currenttrip => (
				<Ut trip={currenttrip}/>
			))
			}
		} catch (e) {
			console.log('request failed ', e.message);
			alert('fail');
		}
	};
		
	const tripList = () => {

	}
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<FloatingLogo />
			<div className="UTWB1" onClick={getTrips}>
				{/* <Ut date="Today" destination="Riyadh" time="15:20" place="KFUPM Mall Parking" /> */}
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
export default UtPage;
