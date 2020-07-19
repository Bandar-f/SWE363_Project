import React from 'react';
import Personal from '../personalinfo/Personal';
import './Sidemenu.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Sidemenu = (props) => {
	let currentRoute = useLocation().pathname;

	const logOut = async () => {
		try {
			const response = await axios('https://kptyn.herokuapp.com/logout');
			console.log(response);
		} catch (e) {
			console.log(`network failure ${e}`);
		}
	};

	return (
		<div>
			{currentRoute !== '/' &&
			currentRoute !== '/secondLog' &&
			currentRoute !== '/welcomePage' &&
			currentRoute !== '/Login' ? (
				<div className={props.isOpened ? 'sidemenu' : 'hidden-sidemenu'}>
					<header>
						<Personal name={props.userPresence.name} rating={props.userPresence.totalRating} />
					</header>

					<ul>
						{props.titles.map((titles, index) => (
							<Link key={index} to={`/${titles.replace(/\s+/g, '')}`}>
								<li
									onClick={() => {
										props.sidemenuItemClicked();
									}}
									className="side-menu-items"
								>
									{titles}
								</li>
							</Link>
						))}

						{props.isAdmin ? (
							<Link to="/admin">
								<li
									onClick={() => {
										props.sidemenuItemClicked();
									}}
									className="side-menu-items"
								>
									Admin
								</li>
							</Link>
						) : (
							''
						)}
					</ul>

					<Link to="/Login" onClick={() => logOut()}>
						{' '}
						<p className="logout">
							Logout{' '}
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/OOjs_UI_icon_logOut-ltr-invert.svg/1200px-OOjs_UI_icon_logOut-ltr-invert.svg.png"
								width="30"
								height="20"
								alt="logout icon"
							></img>
						</p>
					</Link>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Sidemenu;
