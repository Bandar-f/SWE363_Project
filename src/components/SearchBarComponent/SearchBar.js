import React, { Component } from 'react';
import './searchBar.css';
import axios from 'axios';

class SearchBar extends Component {
	state = {
		users: [],
		isLoading: true,
		isSearched: false,
	};

	componentDidMount() {
		this.getAllUsers();
	}

	getName = (item) => {
		const name = item.name;
		return name;
	};

	getAllUsers = async () => {
		try {
			const res = await axios.get('https://kptyn.herokuapp.com/users');
			const data = res.data;

			this.setState((users) => ({ users: [...res.data] }));
			window.$arr = data.map((user) => user.name);
			console.log(this.state.users);
			this.setState({ isLoading: false });
		} catch (err) {
			console.log(`Axios request failed to get data at getAllUsers (SearchBar component): ${err}`);
			this.setState({ isLoading: false });
		}
	};

	handleSearch(e) {
		window.$searchValue = e.target.value;
	}
	handler = (e) => {
		this.setState({isSearched: false});
	}
	getSearchedName = async () => {
		const nameValue = window.$searchValue;
		const Arr = window.$arr;
		console.log(nameValue);
		try {
			const Arr = window.$arr;
			if (Arr.some((x) => x == nameValue)) {
				window.$searchObject = this.state.users.find(
					(element) => element.name == window.$searchValue
				);
				this.setState({ isSearched: true });
			} else {
				alert('No such name is registered in the app');
			}
		} catch (err) {
			console.log(
				`Axios request failed to get data at getSearchdName (SearchBar component): ${err}`
			);
		}
	};
	deleteUser = async (id) => {
		try {
			const response = await axios.delete(`https://kptyn.herokuapp.com/users/${id}`);
			alert('User has been banned successfully');
			window.location.reload();
			console.log(response);
		} catch (e) {
			console.log(`😱 Axios request failed to delete user: ${e}`);
		}
	};

	render() {
		const { isLoading, isSearched, users } = this.state;
		return (
			<div>
				<div className="searchbar-container">
					{!isLoading ? (
						<div>
							<form className="admin-form" onSubmit={(e) => e.preventDefault()}>
								<input
									type="text"
									size="40"
									placeholder="search for user"
									onChange={this.handleSearch.bind(this)}
									className="realign"
								/>
								<button id="admin-searchButton" type="submit" onClick={this.getSearchedName}>
									Search
								</button>
							</form>

							<div className="Result-container">
								<h3 className="result-header">  {this.state.users.length} Users are registered</h3>

								{!isSearched ? (
									this.state.users.map((element) => {
										return (
											<div className="whiteBor">
												<p className="driver-admin">{element.name}</p>
												<button
													className="band-button"
													onClick={this.deleteUser.bind(null, element._id)}
												>
													Ban
												</button>
											</div>
										);
									})
								) : (
									<div className="whiteBord">
										<p className="driver-admin">{window.$searchValue}</p>
										<button
											className="band-button"
											onClick={this.deleteUser.bind(null, window.$searchObject._id)}
										>
											Ban
										</button>
										<button className="ShowAll-button" onClick={this.handler.bind(null, false)}>
											Show All
										</button>
									</div>
								)}
							</div>
						</div>
					) : (
						<h1>Loading...</h1>
					)}
				</div>
			</div>
		);
	}
}
export default SearchBar;
