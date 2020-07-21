import React, { useState } from 'react';
import './RateDriverPage.css';
import Cap from '../../components/CarAndPerson/Cap';
import { FaStar } from 'react-icons/fa';
import Text from '../../components/TextComponent/Text';
import { motion } from 'framer-motion';
import WideButton from '../../components/WideButtonComponent/WideButton';
import axios from 'axios';

let rate = 0;
const updateRating = async (id) => {
	try {
		let response = await axios.get(`https://kptyn.herokuapp.com/users/${id}`);
		let data = response.data.user;
		let totRating = data.totalRating;
		let numRated = data.numberOfRated;
		let newRating = totRating*numRated+rate;
		++numRated;
		newRating /= numRated;
		await axios.put(`https://kptyn.herokuapp.com/users/${id}`, {
			totalRating: newRating,
			numberOfRated: numRated,
		});
		alert("Rating has been submitted successfully")
} catch (e) {
	console.log(`😱 Axios request failed: ${e}`);
}
}

function RateDriverPage(props) {
	const starLabels = ['Terrible 😠', 'Bad 😓', 'Good 😒', 'Excellent 😃', 'Spactacular 😎'];
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	rate=rating;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<Cap userType={props.userType} name={window.$ratedTrip.name} totalRating={window.$ratedTrip.totalRating}/>
			<div className="middle">
				<p className="RatingText">
					<div className="realign">
						<Text text="Rating: " /> <p className="sLabel">{starLabels[rating - 1]}</p>
					</div>
				</p>
				<div className="star">
					{[...Array(5)].map((star, i) => {
						const ratingValue = i + 1;
						return (
							<label>
								<input
									type="radio"
									name="rating"
									value={ratingValue}
									onClick={() => setRating(ratingValue)}
								/>
								<FaStar
									className="rate"
									fill={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
									size={37}
									onMouseEnter={() => setHover(ratingValue)}
									onMouseLeave={() => setHover(null)}
								/>
							</label>
						);
					})}
				</div>
				<textarea className="Complain" placeholder="Tell us about your ride ..."></textarea>
				<br />
				<div onClick={() => updateRating(window.$ratedTrip._id)}>
				<WideButton buttonTitle="Submit"/>
				</div>
				<br />
			</div>
		</motion.div>
	);
}
export default RateDriverPage;
