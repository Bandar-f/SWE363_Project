import React from 'react';
import Personal from '../personalinfo/Personal';
import './Sidemenu.css';
import { Link, useLocation } from 'react-router-dom';

const Sidemenu = (props) => {
	let currentRoute = useLocation().pathname;

	return (
		<div>
			{currentRoute !== '/' && currentRoute !== '/welcomePage' && currentRoute !== '/Login' ? (
				<div className={props.isOpened ? 'sidemenu' : 'hidden-sidemenu'}>
					<header>
						<Personal name="Bandar Albalawi" rating="4.5" />
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
					</ul>

					<Link to="/welcomePage">
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
