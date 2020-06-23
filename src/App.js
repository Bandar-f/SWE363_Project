import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';
import PhoneNum from './components/phoneNumComponent/PhoneNum';

import WelcomePage from './components/WelcomePage/WelcomePage';

import PackageTrack from './components/PackageTrackComponent/PackageTrack';
import Cap from './components/CarAndPerson/Cap';
import Ut from './components/UpcomingTripsComponent/Ut'

//  
function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">

      <Ut/>

      
      
    </div>
  );
}

export default App;
