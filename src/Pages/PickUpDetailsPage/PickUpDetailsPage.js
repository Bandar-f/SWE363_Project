import React from 'react';
import CarComponent from '../../components/CarComponent/CarComponent';
import PersonWithRating from '../../components/PersonWithRatingComponent/PersonWithRating';
import PackageTrack from '../../components/PackageTrackComponent/PackageTrack';
import './pickUpDetailsPage.css';
import { motion } from 'framer-motion';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';

export default function PickUpDetailsPage(props) {
	function CallingD() {
		window.location.href = 'tel:0581131070';
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
				<div className="personal-withRating-wrapper">
					<PersonWithRating name={'nawaf al sharqi'} rating={5} />
				</div>
				<CarComponent />
				<div className="middle">
					<button className="buttonT">Cancel</button>
					<button className="buttonT" onClick={CallingD}>
						Call
					</button>
				</div>
				<hr />

				<div className="updates-container">
					<PackageTrack deliverOrPool={props.deliverOrPool} />
				</div>
			</div>
		</motion.div>
	);
}
