import React, { Component } from 'react';
import './Ut.css';
import Text from '../TextComponent/Text';
function Ut() {
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
				<Text text={`Date: ${this.props.trip}`} />
				<br />
				<Text text={`Destination: ${this.props.trip}`} />
				<br />
				<Text text={`Pickup Time: ${this.props.trip}`} />
				<br />
				<Text text="At: KFUPM Mall Parking" />
			</div>
		);
}

export default Ut;
