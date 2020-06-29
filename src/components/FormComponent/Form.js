/*-------- Nawaf --------*/
import React from 'react';
import Text from '../TextComponent/Text'
import './form.css';

import { Link } from 'react-router-dom';

export default function Form(props) {

	return (
		<div className="formContainer">
			<form>
				<Text text="Please enter your name:"/>
				<input type="text" placeholder="name" />
				<br></br>
				{props.userType!="Customer"?<Text text="Please enter your Government ID:"/>:
				""}
				{props.userType!="Customer"?<input type="text" placeholder="ID" />:
				""}
				<br></br>
				<Text text="Please enter your password:"/>
				<input type="password" placeholder="Password" />
				
			


			</form>
		</div>
	);
}
