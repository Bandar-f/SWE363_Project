import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './notif.css';
import styled from 'styled-components';
import uuid from 'react-uuid';

const ContainEr = styled.div`
	background-color: #2b578a;
	color: #ffffff;
	padding: 16px;
	position: absolute;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.3em;
	width: 150px;
	height: 350px;
	top: ${(props) => props.top}px;
	right: 0px;
	z-index: 1;
	transition: top 0.5s ease;
	overflow-y: scroll;
	border-radius: 5px;
`;

class Notif extends Component {
	constructor(props) {
		super(props);

		this.state = {
			top: -400,
		};
	}

	onShow = () => {
		if (!this.isOpen) {
			this.setState({ top: -400 });
			this.isOpen = true;
		} else {
			this.showNotif();
		}
	};

	showNotif = () => {
		this.setState({ top: 43 });
		this.isOpen = false;
	};

	render() {
		const notifications = [
			'Driver has arrived',
			'Driver is about to arrive',
			'Driver is arriving in 15m',
			'Driver is arriving in 30m',
			'Driver is arriving in 45m',
			'Driver is arriving in 1h',
			'Driver is arriving in 2h',
			'Ride Scheduled successfully',
		];
		return (
			<div>
				<React.Fragment>
					<button id="btnPos" onClick={this.onShow}></button>
					<ContainEr top={this.state.top}>
						{notifications.map((notifications, index) => (
							<Link
								key={uuid()}
								to={
									/* here we need to check or we pass the type of the service
                    if package delivery redirect the user to package track page
                    else redirect the user to # no where for know I will let it #
                     */
									'#'
								}
							>
								<p key={index} className="notification-element">
									{notifications}
									<hr />
								</p>
							</Link>
						))}
					</ContainEr>
				</React.Fragment>
			</div>
		);
	}
}

export default Notif;
