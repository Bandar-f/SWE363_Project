import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';
import PhoneNum from './components/phoneNumComponent/PhoneNum';
import Customer from './components/CustomerComponent/Customer'
import PackageTrack from './components/PackageTrackComponent/PackageTrack';
import Cap from './components/CarAndPerson/Cap';
import Ut from './components/UpcomingTripsComponent/Ut'
import RequestRide from './Pages/RequestRidePage/RequestRide';
import SelectService from './components/SelectServiceComponent/SelectService';
import LoginPage from './Pages/LoginPage/LoginPage';


//  
function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">
    <LoginPage/>
    
     
    </div>
  );
}

export default App;
