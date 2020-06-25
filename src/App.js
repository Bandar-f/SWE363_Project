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
import Customer from './components/CustomerComponent/Customer'



//  
function App() {
   const titles=["History","Pickup Details", "Request ride"];
   const[isOpened,setIsOpened]=useState(false);

   const sidemenuClicked= ()=>{
     setIsOpened(true);

   }


  return (
    <div  className="App">

      <NavBar header="test test" clicked={sidemenuClicked}/>
      <Sidemenu isOpened={isOpened} titles={titles}/>
      <div className="content-b">
      <PickUpDetails updates={['arrived,yes']}/>
      </div>
      
    
    </div>
  );
}

export default App;
