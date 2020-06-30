import React from 'react';
import CarComponent from '../../components/CarComponent/CarComponent';
import PersonWithRating from '../../components/PersonWithRatingComponent/PersonWithRating';
import PackageTrack from '../../components/PackageTrackComponent/PackageTrack';
import './pickUpDetailsPage.css';
import Text from '../../components/TextComponent/Text';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
                <div className="middle">
			    <Link to="/RequestRide"><button className="rect1"></button></Link>
			    <Link to="/dateAndTime"><button className="rect1"></button></Link>
			    <button className="rect1"></button>
			    </div>
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
                    <div className="middle">
                        <div className="realign">
                            <Text text="Tracking:"/>
                        </div>
                    </div>
					<PackageTrack deliverOrPool={props.deliverOrPool} />
                        <div className="mapStyle">
                            <iframe className="mapStyle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.6000576845477!2d50.14370511515177!3d26.3070623833922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e65bb5c211d9%3A0x5258806f7443ff7d!2z2KzYp9mF2LnYqSDYp9mE2YXZhNmDINmB2YfYryDZhNmE2KjYqtix2YjZhCDZiNin2YTZhdi52KfYr9mG!5e0!3m2!1sen!2ssa!4v1593513943873!5m2!1sen!2ssa" width="90%" height="500" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
				        </div>
                </div>
			</div>
		</motion.div>
	);
}
