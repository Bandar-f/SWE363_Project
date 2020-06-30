import React, { Component } from 'react';
import uuid from 'react-uuid';
import './packageTrack.css';

export default class PackageTrack extends Component {
	state = {
		updates: [
			{
				id: uuid(),
				details: 'test test 3',
			},
			{
				id: uuid(),
				details: 'test test 2',
			},
			{
				id: uuid(),
				details: 'test test 3',
			},
		],
	};

	render() {
		return (
			<div className="update-container">
				{this.state.updates.map((update) => (
					<p className="text-holder" key={update.id}>
						{this.props.deliverOrPool === 'Pool' ? 'Delivery update: ' : 'Trip update: '}
						{update.details}
					</p>
				))}
			</div>
		);
	}
}
