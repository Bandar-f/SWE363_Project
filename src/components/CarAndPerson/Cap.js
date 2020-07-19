import React from 'react';
import PersonWithRating from '../PersonWithRatingComponent/PersonWithRating';
import './cap.css';
const cap = (props) => {
	// Expecting to receive an array of drivers object
	return (
		<div className="cap-container">
			<button className="invisiButton"></button>
			<div className="person-info">
				<PersonWithRating name={props.name} rating={props.totalRating}/>
				<br />
				<div className="car">
					{props.userType !== 'Worker' ?						
						<img
						className="car-img"
						src="https://pngwebicons.com/uploads/car/ico/car_icon4927.ico"
						alt="car"
						/>:<img
						className="pers-img"
						src="https://www.pinclipart.com/picdir/big/185-1850464_person-icon-question-mark-clipart.png"
						alt="car"
						/> 
						
					}

					<div className="text-under">
						<p className="car-info">Honda Civic Type R</p>
						<p className="car-info">{props.date}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default cap;
