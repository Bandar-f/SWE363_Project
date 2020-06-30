import React from 'react';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import RadioButton from '../../components/RadioButtonComponent/RadioButton';
import './MobileNumber.css';
import PhoneNum from '../../components/PhoneNumComponent/PhoneNum';
import Text from '../../components/TextComponent/Text';
import { motion } from 'framer-motion';

const MobileNumber = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<div className="welcome">
				<div className="pushDownT">
					<FloatingLogo />
				</div>
				<div className="middle">
					<div className="realign">
						<Text text="Welcome to" />
						<strong>KBTYN</strong>
					</div>
				</div>
				<div className="homePageT">
					<div className="middle">
					<button className="rect1"></button>
					<button className="rect2"></button>
						<div className="realign">
							<Text text="Login as..."/>
						</div>
					</div>
					<div id="tariqFixedDis">
						<RadioButton UserOrWorker={props.UserOrWorker} />
					</div>
					<div className="middle">
						<div className="realign">
							<Text text="Please enter your phone number" />
							<div className="realign">
								<div className="realign">
									<br />
									<PhoneNum />
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer className="footer-container-names">
					<p id="copyrights">© 2020 Copyright Nawaf, Tariq, Yasser, Bandar & Co</p>
					<br />
				</footer>
				<br/>
			</div>
		</motion.div>
	);
};

export default MobileNumber;
