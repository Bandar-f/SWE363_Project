import React from 'react';
import './login.css';
import Form from '../../components/FormComponent/Form';
import Button from '../../components/ButtonComponent/Button';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function LoginPage(props) {
	const checkUserExisting = async (userNumber) => {
		try {
			const response = await axios.post(' http://127.0.0.1:8000/users/getUserByPhone', {
				phoneNumber: userNumber,
			});

			console.log('👉 Returned data:', response);
			// checking the status of the response
			// true if the user exists 
			//false if the user not exists  
			if(response.status === 200){
				return true; 
			}else {
				return false ; 
			}

		} catch (e) {
			console.log(`😱 Axios request failed: ${e}`);
		}
	};
	const defaultProps = {
		error: null,
		userObj: {},
		loginUser: () => null,
		toggleLogin: () => null,
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
					<Form userType={props.userType} userAcc={props.userAcc} />
				</div>

				<div className="button-container">
					<Link to={props.userType === 'Customer' ? '/RequestRide' : '/UpcomingTrips'}>
						<span className="Login-Button">
							<Button text={'Login'} />
						</span>
					</Link>
				</div>
				<br />
			</div>
		</motion.div>
	);
}
