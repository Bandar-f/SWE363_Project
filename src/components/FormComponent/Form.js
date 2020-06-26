/*-------- Nawaf --------*/
import React from 'react';
import './form.css';
import Button from '../ButtonComponent/Button';
import FloatingLogo from '../FloatingLogoComponent/FloatingLogo';
import { Link } from 'react-router-dom';

export default function Form(props) {
	return (
		<div className="formContainer">
			<FloatingLogo />
			<form>
				<input type="text" placeholder="Username" />
				<br></br>
				<input type="password" placeholder="Password" />

				<div className="button-container">
					<Link to="/welcomePage"><Button text={'Back'} /></Link>
					<Link to={props.userType==="Customer"?"/RequestRide":"/UpcomingTrips"}><Button text={'Login'} /></Link>
				</div>
			</form>
		</div>
	);
}
