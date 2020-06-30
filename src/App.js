import React, { useState } from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import NavBar from './components/NavBarComponent/NavBar';
import SelectService from './Pages/SelectServicePage/SelectServicePage';
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import RequestRide from './Pages/RequestRidePage/RequestRide';
import RateDriverPage from './Pages/RateDriverPage/RateDriverPage';
import PickUpDetails from './Pages/PickUpDetailsPage/PickUpDetailsPage';
import MoreDetailsPage from './Pages/MoreDetailsPage/MoreDetailsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import History from './Pages/History/History';
import DateNDriver from './Pages/DateNDriverPage/DateNDriver';
import UtPage from './Pages/UpcomingTripsPage/UtPage';
import MobileNumber from './Pages/MobileNumber/MobileNumber';
import ScheduleRide from './Pages/ScheduleRide/ScheduleRide';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import AdminPage from './Pages/AdminPage/AdminPage';

//seclude ride should be in the package system ---> shipment track
// upComing trips should be removed from the package service
//history should contains the package information
/* in the notification if the user clicks on any notification then
it should redirect the user to the shipment track page
*/

//react router
/*

*/
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useLocation,
	useHistory,
} from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import BackButton from './components/BackButton/BackButton';

function App() {
	//Sidemenu choices
	const costumerTitles = ['History', 'Pickup Details', 'Request Ride'];
	const workerTitles = ['History', 'Schedule Ride', 'Upcoming Trips'];

	//to get the currentRoute
	let currentRoute = useLocation().pathname;

	const [isOpened, setIsOpened] = useState(false);

	const sidemenuClicked = () => {
		setIsOpened(true);
	};

	const [deliverOrPool, setDeliverOrPool] = useState('');

	//this is used to to set the type of app we are in. it will be passed to the first page of the app
	const getDeliverOrPool = (isDeliver) => {
		if (isDeliver) setDeliverOrPool('Deliver');
		else setDeliverOrPool('Pool');
	};

	//is user customer or employer
	const [userType, setUserType] = useState('');

	//this  will be passed to everycomponent that needs to update usertype state
	const getUserType = (isCustomer) => {
		if (isCustomer) setUserType('Customer');
		else setUserType('Worker');
	};

	//to update nav bar header

	return (
		<div className="App">
			<NavBar clicked={sidemenuClicked} />

			<BackButton />

			<Sidemenu
				isOpened={isOpened}
				sidemenuItemClicked={() => {
					setIsOpened(false);
				}}
				titles={userType === 'Customer' ? costumerTitles : workerTitles}
			/>

			<div
				onClick={() => {
					if (isOpened) setIsOpened(false);
				}}
				className={
					isOpened
						? `content-b content-b-sidemenu-open ${
								currentRoute === '/secondLog' || currentRoute === '/' || currentRoute === '/Login'
									? ''
									: 'add-top'
						  }`
						: `content-b ${
								currentRoute === '/secondLog' || currentRoute === '/' || currentRoute === '/Login'
									? ''
									: 'add-top'
						  } `
				}
			>
				<AnimatePresence>
					<Switch>
						<Route exact path="/rateDriver">
							<RateDriverPage />
						</Route>

						<Route exact path="/">
							<SelectService deliverOrPool={getDeliverOrPool} />
						</Route>

						<Route exact path="/History">
							<History />
						</Route>

						<Route exact path="/dateAndTime">
							<DateNDriver />
						</Route>

						<Route exact path="/PickupDetails">
							<PickUpDetails deliverOrPool={deliverOrPool} />
						</Route>

						<Route exact path="/RequestRide">
							<RequestRide deliverOrPool={deliverOrPool} />
						</Route>

						<Route exact path="/welcomePage">
							<WelcomePage />
						</Route>

						<Route exact path="/Login">
							<MobileNumber UserOrWorker={getUserType} />
						</Route>

						<Route exact path="/secondLog">
							<LoginPage userType={userType} />
						</Route>

						<Route exact path="/UpcomingTrips">
							<UtPage />
						</Route>

						<Route exact path="/MoreDetails">
							<MoreDetailsPage />
						</Route>

						<Route exact path="/ScheduleRide">
							<ScheduleRide />
						</Route>

						<Route exact path="/register">
							<RegisterPage />
						</Route>

						<Route exact path="/admin">
							<AdminPage />
						</Route>
					</Switch>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default App;
