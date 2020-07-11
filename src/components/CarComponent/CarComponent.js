import React from 'react';
import './car.css';

const CarComponent = (props) => {
	return (
		<div className="carComponent-container">
			<div className="img-container">
				<img
					className="img-car-info"
					src="https://pngwebicons.com/uploads/car/ico/car_icon4927.ico"
					alt="car"
				/>
			</div>

			<div className="textCar-container">
				<p className="text-car-info">Civic Type R</p>
				<p className="text-car-info">Tier:Economy</p>
			</div>
		</div>
	);
};

export default CarComponent;
