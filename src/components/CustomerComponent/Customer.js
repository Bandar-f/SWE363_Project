import React from 'react';
import './customer.css';

function Calling() {
	window.location.href = 'tel:12345';
}

const Customer = (props) => {
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
