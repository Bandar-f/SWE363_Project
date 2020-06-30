import React, { useState, useEffect } from 'react';
import './navBar.css';
import Notif from '../NotificationsComponent/Notif';
import { useLocation } from 'react-router-dom';

/*----- TTK -----*/
const NavBar = (props) => {
	let currentRoute = useLocation().pathname;

	const [header, setHeader] = useState('initial');

	const getTitle = () => {
		let char = '';

		for (let i = 1; i <= currentRoute.length; i++) {
			char = currentRoute.charAt(i);

			if (char === char.toUpperCase()) {
				setHeader(
					currentRoute.substring(1, i) + ' ' + currentRoute.substring(i, currentRoute.length)
				);

				break;
			}
		}
	};
	useEffect(getTitle, [currentRoute]);

	return (
		<>
			{currentRoute !== '/' &&currentRoute !== '/secondLog'&& currentRoute !== '/welcomePage' && currentRoute !== '/Login' ? (
				<div id="NavBar">
					<img
						onClick={props.clicked}
						id="SideMenu"
						src="https://www.hotel-igelheim.eu/img/mobile_nav_icon.png"
						alt="Side Menu"
					/>
					<Notif deliverOrPool={props.deliverOrPool} userType={props.userType} />
					<h1>{header}</h1>{' '}
					{/* allows for a variable page navigation information title, apply by initiating <NavBar header="Any Page Title"> */}
					<img
						id="Notif"
						src="https://i.ya-webdesign.com/images/notification-bell-white-icon-png-18.png"
						alt="Notifications"
					/>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default NavBar;
