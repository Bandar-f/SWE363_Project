import React, { Component } from 'react';
import './searchBar.css';
export default class searchBar extends Component {
	state = {
		users: ['nawaf8820', 'yaser2020', 'bandar2020', 'tariq2020'],
	};

	handleSearch(e) {
		return;
	}

	render() {
		return (
			<div className="searchbar-container">
				<form className="admin-form" onSubmit={(e) => e.preventDefault()}>
					<input
						type="text"
						size="40"
						placeholder="search for driver"
						onChange={this.handleSearch.bind(this)}
						className="realign"
					/><button id="admin-searchButton" type="submit">
					Search
					</button>
				</form>

				<div className="Result-container">
					<h3 className="result-header">Drivers</h3>
					<p className="driver-admin">
						Driver: Yaser
						<button className="band-button">Ban</button>
					</p>
					<p className="driver-admin">
						{' '}
						Driver: Nawaf
						<button className="band-button">Ban</button>
					</p>
					<p className="driver-admin">
						Driver: bandar
						<button className="band-button">Ban</button>
					</p>
					<p className="driver-admin">
						Driver: tariq2020
						<button className="band-button">Ban</button>
					</p>
				</div>
			</div>
		);
	}
}
