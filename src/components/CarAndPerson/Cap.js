import React from 'react';
import PersonWithRating from '../PersonWithRatingComponent/PersonWithRating';
import './cap.css';
const cap = (props) => {
	return (
		<div className="cap-container">
			<button className="invisiButton"></button>
			<div className="person-info">
				<PersonWithRating />
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
						<p className="car-info">05/20/2020</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default cap;
