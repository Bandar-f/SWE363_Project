import React, { Component } from 'react';
import './Ut.css';
import Text from '../TextComponent/Text';
function Ut(props) {
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
				<Text text={`Date: ${props.date}`} />
				<br />
				<Text text={`Destination: ${props.location}`} />
				<br />
				<Text text={`Pickup Time: ${props.time}`} />
				<br />
				<Text text="At: KFUPM Mall Parking" />
			</div>
		);
}

export default Ut;
