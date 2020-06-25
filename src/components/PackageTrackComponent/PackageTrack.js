import React, { Component } from 'react';
import uuid from 'react-uuid'
import './packageTrack.css';

export default class PackageTrack extends Component {
	state = {
		updates: [{
            id: uuid(),
            details: ' Update: your package is now left'
        },
        {
            id: uuid(),
            details: ' Update: your package is now out'
        },
        {
            id: uuid(),
            details: 'Update: your package is now received'
        }
		],
	};

	render() {
		return (
			<div className="update-container">
				{this.state.updates.map((update) => (
					<p className='text-holder' key={update.id} >Delivery update : {update.details}</p>
				))}
			</div>
		);
	}
}
