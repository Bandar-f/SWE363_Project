import React, { Component } from 'react';
import './searchBar.css';
import axios from 'axios';

export default class searchBar extends Component {
	state = {
		users: [],
	};

	getName = (item) => {
		const name = item.name;
		return name;
	};

	getAllUsers = async () => {
		try {
			const res = await axios.post('https://kptyn.herokuapp.com/users');
			const data = res.data;
			this.setState({ users: data.map(this.getName(data)) });
			console.log(this.state.users[0]);
		} catch (err) {
			console.log(`Axios request failed to get data at getAllUsers (SearchBar component): ${err}`);
		}
	};

	handleSearch(e) {
		window.$searchValue = e.target.value;
	}
	getSearchedName = async () => {
		const nameValue = window.$searchValue;
		try {
			const res = await axios.post('https://kptyn.herokuapp.com/users', {
			name: nameValue,
			});
		} catch(err){
			console.log(`Axios request failed to get data at getSearchdName (SearchBar component): ${err}`);
		}
	};

	render() {
		this.getAllUsers();

		return (
			<div className="searchbar-container">
				<form className="admin-form" onSubmit={(e) => e.preventDefault()}>
					<input
						type="text"
						size="40"
						placeholder="search for driver"
						onChange={this.handleSearch.bind(this)}
						className="realign"
					/>
					<button id="admin-searchButton" type="submit" onClick={this.getSearchedName}>
						Search
					</button>
				</form>

				<div className="Result-container">
					<h3 className="result-header">Drivers</h3>
					<p className="driver-admin">
						User: {this.state.users[0]}
						<button className="band-button">Ban</button>
					</p>
					<p className="driver-admin">
						{' '}
						User: {this.state.users[1]}
						<button className="band-button">Ban</button>
					</p>
					<p className="driver-admin">
						User: {this.state.users[2]}
						<button className="band-button">Ban</button>
					</p>
					<p className="driver-admin">
						User: {this.state.users[3]}
						<button className="band-button">Ban</button>
					</p>
				</div>
			</div>
		);
	}
}
