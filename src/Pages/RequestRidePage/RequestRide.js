import React, { useState } from 'react';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import Text from '../../components/TextComponent/Text';
import './requestRide.css';
import RadioImgBackground from '../../components/RadioImgBackgroundComponent/RadioImgBackground';
import WideButton from '../../components/WideButtonComponent/WideButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

function RequestRide(props) {
	//check if the city option is selected
	const [Selected, setSelected] = useState(false);
	//check if the tier button is choosen
	const [radioClicked, setRadio] = useState(false);
	const [trips, setTrips] = useState([]);
	let tripList = [];

	const handleTripState = (data) => {
		setTrips((prev) => data);
		console.log('trips inside handle trips', trips);
	};
	const stateHandle = async (e) => {
		window.$cityValue = e.target.value;
		console.log(e.target.value);
		//fetching trips
		await fetchTrips(e.target.value);
	};

	const fetchTrips = async (location) => {
		//handling the state

		try {
			// getting all trips satisfying location
			const res = await axios.post('https://kptyn.herokuapp.com/trips/getTripByLocation', {
				location: location,
			});

			handleTripState(res.data);

			tripList = [...res.data];
			window.$globalList = tripList;
			console.log('list is ', tripList);
		} catch (e) {
			console.log('network Failed', e);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<FloatingLogo />
			<div className="middle">
				<button className="rect1"></button>
				<button className="rect2"></button>
			</div>
			<section class="middle">
				<div class="realign">
					<Text text={props.deliverOrPool === 'Deliver' ? 'Where to...' : 'Where to ship...'} />
				</div>
				<div>
					<select
						onInput={() => {
							setSelected(true);
						}}
						name="destination"
						id="rideRoute"
						onChange={(e) => stateHandle(e)}
					>
						<option value="" disabled selected>
							Select Destination
						</option>
						<option value="dhahran">Dhahran</option>
						<option value="khobar">Khobar</option>
						<option value="dammam">Dammam</option>
						<option value="qatif">Qatif</option>
						<option value="jubail">Jubail</option>
						<option value="alahasaa">Alahasaa</option>
						<option value="riyadh">Riyadh</option>
						<option value="qasseem">Qasseem</option>
						<option value="hafoof">Hafoof</option>
						<option value="albaqiq">Albaqiq</option>
					</select>
				</div>
				<div class="realign2">
					<Text
						text={props.deliverOrPool === 'Deliver' ? 'Select your tier' : 'Select package size'}
					/>
				</div>
				<div className="RRIB">
					{props.deliverOrPool === 'Deliver' ? (
						<RadioImgBackground
							isSelected={() => {
								setRadio(true);
							}}
							url1="https://audimediacenter-a.akamaihd.net/system/production/media/91178/images/1f201fd6f5fcbd78b452dd0ff4907b1cc4dc0a8c/A202506_blog.jpg?1587377988"
							url2="https://i2.wp.com/us.motorsactu.com/wp-content/uploads/2019/10/Bentley-Flying_Spur-2020-1280-07.jpg?fit=1200%2C675&ssl=1"
							Label1="Economy Tier"
							Label2="Luxury Tier"
						/>
					) : (
						<RadioImgBackground
							isSelected={() => {
								setRadio(true);
							}}
							url1="https://www.cheapestwaytoship.org/wp-content/gallery/package-shipping/small-package.jpg"
							url2="https://images-na.ssl-images-amazon.com/images/I/81jGRJ%2BGmGL._AC_SL1500_.jpg"
							Label1="Small package"
							Label2="Large package"
						/>
					)}
					<br />
					<Link to={Selected && radioClicked ? '/dateAndTime' : '/RequestRide'} trips={tripList}>
						{' '}
						<WideButton buttonTitle="Next" />{' '}
					</Link>
				</div>
			</section>
		</motion.div>
	);
}

export default RequestRide;
