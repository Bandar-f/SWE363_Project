import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';
import PhoneNum from './components/PhoneNumComponent/PhoneNum';
import Customer from './components/CustomerComponent/Customer'
import Button from './components/ButtonComponent/Button';
import PackageTrack from './components/PackageTrackComponent/PackageTrack';
import Cap from './components/CarAndPerson/Cap';
<<<<<<< HEAD
import Ut from './components/UpcomingTripsComponent/Ut';
import Personal from './components/personalinfo/Personal';
import MoreDetailsPage from './Pages/MoreDetailsPage/MoreDetailsPage';
=======
import Ut from './components/UpcomingTripsComponent/Ut'
import RequestRide from './Pages/RequestRidePage/RequestRide';
import SelectService from './components/SelectServiceComponent/SelectService';
import LoginPage from './Pages/LoginPage/LoginPage';


//  
>>>>>>> efa84cbc8c3c059d533d1a7f94fb117964ee0d10
function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">
    <MoreDetailsPage/>
    </div>
  );
}

export default App;

//<Personal name={'nawaf'} rating={5}/>