import React, { useState } from 'react';
import './login.css';
import Form from '../../components/FormComponent/Form';
import Button from '../../components/ButtonComponent/Button';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function LoginPage(props) {
	const [password, setPassword] = useState('');

	const stateHandel = (e) => {
		const _password = e.target.value;
		setPassword((password) => _password);
	};
	const authenticateUser = async () => {
		//before we authenticate the user we graph the username by the userPhone number from the prev
		//response
		try {
			const response = await axios.post('https://kptyn.herokuapp.com/login', {
				username: props.UN,
				password: password,
			});
			const data = response.data;

			if (data.status != 200) {
				console.log('password incorrect');
				return false;
			} else {
				console.log('successfully logged in as :', data.message);
				return true;
			}
		} catch (e) {
			console.log('request failed ', e.message);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<div className="Login-container">
				<FloatingLogo />
				<div className="middle">
					<Link to="/Login">
						<button className="rect1"></button>
					</Link>
					<button className="rect1"></button>
				</div>
				<div className="from-container-login">
					<Form userType={props.userType} userAcc={props.userAcc} stateHandel={stateHandel} />
				</div>

				<div className="button-container">
					<Link to={props.userType === 'Customer' ? '/RequestRide' : '/UpcomingTrips'}>
						<span className="Login-Button">
							<Button text={'Login'} fireUser={authenticateUser} />
						</span>
					</Link>
				</div>
				<br />
			</div>
		</motion.div>
	);
}
