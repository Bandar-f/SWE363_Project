import React from 'react';
import PersonWithRating from '../PersonWithRatingComponent/PersonWithRating';
import './cap.css';
const cap = () => {
	return (
		<div className="cap-container">
			<button className="invisiButton"></button>
			<div className="person-info">
				<PersonWithRating />
				<br />
				<div className="car">
					<img
						className="car-img"
						src="https://groupeparkavenue.com/sites/default/files/styles/scale_1200/https/images.swift.fuseinteractive.ca/chrome/media/ChromeImageGallery/ColorMatched_01/Transparent/1280/cc_2019HOC17_01_1280/cc_2019HOC170002_01_1280_NH0.png?itok=-SijIKWe"
						alt="car"
					/>

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
