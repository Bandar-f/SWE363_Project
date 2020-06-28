/*-------- Nawaf --------*/
import React from 'react';
import './form.css';

import { Link } from 'react-router-dom';

export default function Form(props) {

	return (
		<div className="formContainer">
			<form>
				<input type="text" placeholder="name" />
				<br></br>
				{props.userType!="Customer"?<input type="text" placeholder="Government ID" />:
				""}
				<br></br>
				<input type="password" placeholder="Password" />
				
			


			</form>
		</div>
	);
}
