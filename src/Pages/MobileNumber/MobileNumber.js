import React, { useState } from 'react';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import RadioButton from '../../components/RadioButtonComponent/RadioButton';
import './MobileNumber.css';
import PhoneNum from '../../components/PhoneNumComponent/PhoneNum';
import Text from '../../components/TextComponent/Text';
import { motion } from 'framer-motion';
import axios from 'axios';

const MobileNumber = (props) => {
	const [isRadioClicked, setRadioClick] = useState(false);
	// const phoneNumber = '0546677100';
	const [phoneNumber, setPhoneNumber] = useState('');

	const formHandler = (e) => {
		const updatedPhone = e.target.value;
		setPhoneNumber((phoneNumber) => updatedPhone);
	};
	const checkUserExisting = async (userNumber) => {
		// is not empty do request
		try {
			const response = await axios.post('https://kptyn.herokuapp.com/users/getUserByPhone', {
				phoneNumber: userNumber,
			});
			console.log('response data:', response);
			// checking the status of the response
			// true if the user exists
			//false if the user not exists
			if (response.data.status != 200) {
				document.getElementsByClassName('loader')[0].style.visibility = 'hidden';
				document.getElementsByClassName('Login-container')[0].style.backgroundColor = 'transparent';
				//document.getElementsByClassName("Login-container")[0].style.paddingBottom = "0";
				props.userAcc(false);
				props.num(userNumber);
				const un = `n${userNumber}`;
				props.UN(un);
			} else {
				document.getElementsByClassName('loader')[0].style.visibility = 'hidden';
				document.getElementsByClassName('Login-container')[0].style.backgroundColor = 'transparent';
				//document.getElementsByClassName("Login-container")[0].style.paddingBottom = "0";
				props.userAcc(true);
				const un = response.data.username;
				props.UN(un);
				props.num(userNumber);
			}
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	};

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
							<Text text="Login as..." />
						</div>
					</div>
					<div id="tariqFixedDis">
						<RadioButton
							UserOrWorker={props.UserOrWorker}
							isRadioClicked={() => {
								setRadioClick(true);
							}}
						/>
					</div>
					<div className="middle">
						<div className="realign">
							<Text text="Please enter your phone number" />
							<div className="realign">
								<div className="realign">
									<br />
									<PhoneNum
										fetchUser={() => checkUserExisting(phoneNumber)}
										formHandler={formHandler}
										isRadioClicked={isRadioClicked}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer className="footer-container-names">
					<p className="copyrights">
						<a id="spacePlz" href="https://twitter.com/" target="_blank">
							<img
								src="https://cdn.iconscout.com/icon/free/png-512/twitter-circle-1868970-1583134.png"
								width="50"
								target="_blank"
								alt="Twtter Link"
							/>
						</a>
						<a id="spacePlz" href="https://www.linkedin.com/" target="_blank">
							<img
								src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
								width="50"
								alt="Linkedin Link"
							/>
						</a>
						<a id="spacePlz" href="https://www.facebook.com/" target="_blank">
							<img
								src="https://cdn.iconscout.com/icon/free/png-512/facebook-circle-1868984-1583148.png"
								width="50"
								alt="Facebook Link"
							/>
						</a>
						<a id="spacePlz" href="https://www.instagram.com/" target="_blank">
							<img
								src="https://www.montessoriivyleague.com/wp-content/uploads/2018/10/instagram-logo-circle.png"
								width="50"
								alt="Instagram Link"
							/>
						</a>
						<a id="spacePlz" href="https://www.youtube.com/" target="_blank">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/1200px-YouTube_social_red_circle_%282017%29.svg.png"
								width="50"
								alt="Youtube Link"
							/>
						</a>
					</p>
					<p className="copyrights">© 2020 Copyright Nawaf, Tariq, Yasser, Bandar & Co</p>
					<br />
				</footer>
				<br />
			</div>
		</motion.div>
	);
};

export default MobileNumber;
