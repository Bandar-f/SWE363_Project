import React from 'react';
import './customer.css';

const Customer = (props) => {
	return (
		<div className="container">
				<p className="customer-name">{props.customer}</p>
				<button className="button-small">Call</button>
				
				
	
		</div>
	);
};

export default Customer;
