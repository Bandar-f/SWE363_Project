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
			<div className="fixPos">
				<FloatingLogo />
				<div id="tariqFixedDis">
					<RadioButton UserOrWorker={props.UserOrWorker} />
				</div>
				<div className="middle">
					<div className="realign">
						<Text text="Please enter your mobile number" />
						<div className="realign">
							<div className="realign">
								<br />
								<PhoneNum />
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default MobileNumber;
