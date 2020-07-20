import React from 'react';
import './Ut.css';
import Text from '../TextComponent/Text';
import WideButton from '../../components/WideButtonComponent/WideButton';
import { Link } from 'react-router-dom';
function Ut(props) {

		function passTrip() {
			window.$tripPass = props.trip;
		}

		return (
			<div className="texts">
				{/* <Text text={this.props.date} />
				<br />
				<Text text={`Destination: ${this.props.location}`} />
				<br />
				<Text text={`Pickup Time: ${this.props.time}`} />
				<br />
				<Text text={`At: ${this.props.place}`} /> */}

				<br />
				<Text text={`Date: ${props.trip.date}`} />
				<br />
				<Text text={`Destination: ${props.trip.location}`} />
				<br />
				<Text text={`Pickup Time: ${props.trip.time}`} />
				<br />
				<Text text="At: KFUPM Mall Parking" />
				<div onClick={passTrip}>
				<Link to="/MoreDetails">
					<WideButton buttonTitle="More Details" />
				</Link>
				</div>
				<hr/>
			</div>
		);
}

export default Ut;
