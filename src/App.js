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



//history should contains the package information



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
import PackageTrackPage from './Pages/PackageTrackPage/PackageTrackPage';

function App() {
	//Sidemenu choices
	const costumerTitles = ['History', 'Pickup Details', 'Request Ride'];
	const workerTitles = ['History', 'Schedule Ride', 'Upcoming Trips'];
	const workerPackageTitles=["History","Shipment Track"]

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

	//is user customer or employee
	const [userType, setUserType] = useState('');

   //the object of your user
	const[userPresence,setUserpresence]=useState({});

	//Does user already have account or not
	const [userAcc, setUserAcc] = useState('');

	//this  will be passed to every component that needs to update usertype state
	const getUserType = (isCustomer) => {
		if (isCustomer) setUserType('Customer');
		else setUserType('Worker');
	};

	//this  will be passed to determine if the user already has an account or not
	const getUserAcc = (hasAccount) => {
		if (hasAccount) setUserAcc('Existing');
		else setUserAcc('New');
	};


  //why? to pass username to the login page
	const [UN, setUN] = useState('');

	const getUN = (Username) => {
		setUN(Username);
	};

	const [num, setNum] = useState('');

	const getNum = (phoneNum) => {
		setNum(phoneNum);
	};

	//to update nav bar header













	 //to know if the user is admin
	 const [isAdmin,setAdmin]=useState(false);

	return (
		<div className="App">
			<NavBar deliverOrPool={deliverOrPool} userType={userType}  clicked={sidemenuClicked} />

			<BackButton />
       
				 {deliverOrPool==="Deliver"?
			<Sidemenu
			isAdmin={isAdmin}
				isOpened={isOpened}
				sidemenuItemClicked={() => {
					setIsOpened(false);
				}}
				titles={userType === 'Customer' ? costumerTitles : workerTitles}
			/>:	<Sidemenu
			isAdmin={isAdmin}
			isOpened={isOpened}
			sidemenuItemClicked={() => {
				setIsOpened(false);
			}}
			titles={userType === 'Customer' ? costumerTitles : workerPackageTitles}
		/>



			}
			

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
						<Route exact path="/Rating">
							<RateDriverPage userType={userType} />
						</Route>

						<Route exact path="/">
							<SelectService deliverOrPool={getDeliverOrPool} />
						</Route>

						<Route exact path="/History">
							<History userPresence={userPresence} userType={userType} />
						</Route>

						<Route exact path="/dateAndTime">
							<DateNDriver/>
						</Route>

						<Route exact path="/PickupDetails">
							<PickUpDetails userPresence={userPresence} deliverOrPool={deliverOrPool} />
						</Route>

						<Route exact path="/RequestRide">
							<RequestRide deliverOrPool={deliverOrPool} />
						</Route>

						<Route exact path="/welcomePage">
							<WelcomePage />
						</Route>

						<Route exact path="/Login">
							<MobileNumber UserOrWorker={getUserType} userAcc={getUserAcc} UN={getUN} num={getNum}/>
						</Route>

						<Route exact path="/secondLog">
							<LoginPage setUserpresence={setUserpresence} userType={userType} userAcc={userAcc} UN={UN} num={num}/>
						</Route>

						<Route exact path="/UpcomingTrips">
							<UtPage/>
						</Route>

						<Route exact path="/MoreDetails">
							<MoreDetailsPage userPresence={userPresence} />
						</Route>

						<Route exact path="/ScheduleRide">
							<ScheduleRide userPresence={userPresence}/>
						</Route>

						<Route exact path="/ShipmentTrack">
							<PackageTrackPage deliverOrPool={deliverOrPool}/>
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
