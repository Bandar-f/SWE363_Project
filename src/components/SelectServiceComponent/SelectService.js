import React from 'react';
import './SelectService.css';
import { Link } from 'react-router-dom';
function SelectService(props) {
	return (
		<div>
			<header>
				<h2 className="SSHeader">Select your service</h2>
			</header>
			<Link to="/Login">
				<button
					onClick={() => {
						props.deliverOrPool(true);
					}}
					className="Travel"
				>
					<p className="TravelLabel">
						CarPool Service
					</p>
				</button>

				<button
					onClick={() => {
						props.deliverOrPool(false);
					}}
					className="Deliver"
				>
					<p className="DeliverLabel">
						Package Handling Service
					</p>
				</button>
			</Link>
		</div>
	);
}
export default SelectService;
