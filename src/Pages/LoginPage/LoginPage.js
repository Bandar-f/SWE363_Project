import React from 'react';
import './login.css';
import Form from '../../components/FormComponent/Form';
import Button from '../../components/ButtonComponent/Button';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LoginPage(props) {
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
				<Link to="/Login"><button className="rect1"></button></Link>
				<button className="rect1"></button>
				</div>
				<div className="from-container-login">
					<Form userType={props.userType} />
				</div>

				<div className="button-container">
					<Link to={props.userType === 'Customer' ? '/RequestRide' : '/UpcomingTrips'}>
						<span className="Login-Button">
							<Button text={'Login'} />
						</span>
					</Link>
				</div>
				<br/>
			</div>
		</motion.div>
	);
}
