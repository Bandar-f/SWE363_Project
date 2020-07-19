import React from 'react';
import './customer.css';



const Customer = (props) => {
	function Calling() {
		window.location.href = `tel:${props.number}`;
	}
	return (
		<div className="container">
			<p className="customer-name">{props.customer}</p>
			<button className="button-small" onClick={Calling}>
				Call
			</button>
		</div>
	);
};

export default Customer;
