import React, {useState} from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';
import PhoneNum from './components/PhoneNumComponent/PhoneNum';
import Customer from './components/CustomerComponent/Customer'
import PackageTrack from './components/PackageTrackComponent/PackageTrack';
import Cap from './components/CarAndPerson/Cap';
import Ut from './components/UpcomingTripsComponent/Ut'
import RequestRide from './Pages/RequestRidePage/RequestRide';
import SelectService from './components/SelectServiceComponent/SelectService';
import LoginPage from './Pages/LoginPage/LoginPage';
import SelectServicePage from './Pages/SelectServicePage/SelectServicePage';
import MoreDetailsPage from './Pages/MoreDetailsPage/MoreDetailsPage';
import NavBar from "./components/NavBarComponent/NavBar";


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
        

      </div>
    
    </div>
  );
}

export default App;
