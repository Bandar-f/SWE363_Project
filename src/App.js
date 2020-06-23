import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';
import PhoneNum from './components/phoneNumComponent/PhoneNum';
import FloatingLogo from './components/floatingLogoComponent/FloatingLogo';

import WelcomePage from './components/WelcomePage/WelcomePage';
import CarComponent from './components/CarComponent/CarComponent';
import Customer from './components/CustomerComponent/Customer'

import PackageTrack from './components/PackageTrackComponent/PackageTrack';
import Cap from './components/CarAndPerson/Cap';
import Ut from './components/UpcomingTripsComponent/Ut'
import NavBar from './components/NavBarComponent/NavBar';

//
function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">
            <Customer/>
            <NavBar header="is it cap?"/>
      <WelcomePage/>







    </div>
  );
}

export default App;
