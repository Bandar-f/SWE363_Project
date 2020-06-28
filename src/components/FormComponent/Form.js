/*-------- Nawaf --------*/
import React from 'react';
import './form.css';

import { Link } from 'react-router-dom';

export default function Form(props) {
	return (
		<div className="formContainer">
			<form>
				<input type="text" placeholder="Username" />
				<br></br>
				<input type="password" placeholder="Password" />

			</form>
		</div>
	);
}
