import React from 'react';
import CarComponent from '../../components/CarComponent/CarComponent';
import PersonWithRating from '../../components/PersonWithRatingComponent/PersonWithRating';
import PackageTrack from '../../components/PackageTrackComponent/PackageTrack';
import './pickUpDetailsPage.css';
import Text from '../../components/TextComponent/Text';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import axios from 'axios';

export default function PickUpDetailsPage(props) {
	let removeFromTrip = [];
	const CallingD = async (id) => {
		try {
		const response = await axios.get(`https://kptyn.herokuapp.com/users/${id}`); 
		const data = response.data.user;
		const userNumber = data.phoneNumber;
		window.location.href = `tel:${userNumber}`;
		} catch (e) {
			console.log(`😱 Axios request failed: ${e}`);
		}
	}
	const Cancel = async (id) => {
		try {
		const response = await axios.get(`https://kptyn.herokuapp.com/trips/${id}`); 
		const data = response.data.trip.customer;
		data.map(customerMatch => (
			( props.userPresence.id !== customerMatch || customerMatch._id !== props.userPresence.id ? removeFromTrip.push(customerMatch):'' )
		))
		await axios.put(`https://kptyn.herokuapp.com/trips/${id}`, {
			customer: removeFromTrip,
		});
		} catch (e) {
			console.log(`😱 Axios request failed: ${e}`);
		}
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<div className="pickup-container">
				<FloatingLogo />
                <div className="middle">
			    </div>
				<div className="personal-withRating-wrapper">
					<PersonWithRating name={'nawaf al sharqi'} rating={5} />
				</div>
				<CarComponent />
				<div className="middle">
					<button className="buttonT" onClick={Cancel}>Cancel</button>
					<button className="buttonT" onClick={CallingD}>
						Call
					</button>
				</div>
				<hr />

				<div className="updates-container">
                    <div className="middle">
                        <div className="realign">
                            <Text text="Tracking:"/>
                        </div>
                    </div>
					<PackageTrack deliverOrPool={props.deliverOrPool} />
                </div>
			</div>
		</motion.div>
	);
}
