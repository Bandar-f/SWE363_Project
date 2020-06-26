import React, {useState} from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import NavBar from "./components/NavBarComponent/NavBar";
import SelectService from './Pages/SelectServicePage/SelectServicePage'
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import RequestRide from './Pages/RequestRidePage/RequestRide';
import RateDriverPage from './Pages/RateDriverPage/RateDriverPage';
import PickUpDetails from './Pages/PickUpDetailsPage/PickUpDetailsPage';
import PackageTrack from './Pages/PackageTrackPage/PackageTrackPage';
import MoreDetailsPage from './Pages/MoreDetailsPage/MoreDetailsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import History from './Pages/History/History';
import DateNDriver from './Pages/DateNDriverPage/DateNDriver';
import Customer from './components/CustomerComponent/Customer';
import Ut from './components/UpcomingTripsComponent/Ut';
import UtPage from './Pages/UpcomingTripsPage/UtPage';

//react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import MobileNumber from './Pages/MobileNumber/MobileNumber';
import ScheduleRide from './Pages/ScheduleRide/ScheduleRide';



function App() {
   
   const costumerTitles=["History","Pickup Details", "Request Ride"];
   const workerTitles=["History","Schedule Ride","Upcoming Trips"]


   const[isOpened,setIsOpened]=useState(false);

   const sidemenuClicked= ()=>{
     setIsOpened(true);

   }





   const [deliverOrPool,setDeliverOrPool]=useState("");

  const getDeliverOrPool=(isDeliver)=>{

     if(isDeliver)
     setDeliverOrPool("Deliver");
     else
     setDeliverOrPool("Pool");
     
   }


   const [userType,setUserType]=useState("");



   const getUserType=(isCustomer)=>{

     if(isCustomer)
     setUserType("Customer");
     else
     setUserType("Worker");
     
   }














  return (
    <div  className="App">

      <NavBar header="test test" clicked={sidemenuClicked}/>
      <Sidemenu isOpened={isOpened} titles={userType==="Customer" ? costumerTitles:workerTitles} />
      <div className={isOpened ?"content-b content-b-sidemenu-open":"content-b "}>

        <Switch>

        <Route exact path="/test">
             

            </Route>

        

          <Route exact path="/">
             <SelectService deliverOrPool={getDeliverOrPool}/>

            </Route>

            <Route exact path="/History">
            <History/>

            </Route>
            <Route exact path="/dateAndTime">

              <DateNDriver/>


            <History/>

            </Route>

            <Route exact path="/PickupDetails">
            <PickUpDetails/>

            </Route>

            <Route exact path="/RequestRide">
            <RequestRide/>

            </Route>

            <Route exact path="/welcomePage">
            <WelcomePage/>

            </Route>

            <Route exact path="/Login">
            <MobileNumber UserOrWorker={getUserType}/>

            </Route>

            <Route exact path="/secondLog">
            <LoginPage userType={userType}/>

            </Route>


            <Route exact path="/UpcomingTrips">
            <UtPage/>

            </Route>

            <Route exact path="/MoreDetails">
            <MoreDetailsPage/>

            </Route>

            <Route exact path="/ScheduleRide">
            <ScheduleRide/>

            </Route>



            



           

          </Switch>

        
      </div>
    
    </div>
  );
}

export default App;
