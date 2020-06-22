import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';
import PhoneNum from './components/phoneNumComponent/PhoneNum';
import FloatingLogo from './components/FloatingLogoComponent/FloatingLogo';
import WelcomePage from './components/WelcomePage/WelcomePage';
import NavBar from './components/navBarComponent/NavBar';
import PackageTrack from './components/PackageTrackComponent/PackageTrack';
import Cap from './components/CarAndPerson/Cap';

//  
function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">
      <WelcomePage/>

      <Cap/>
     <WelcomePage/>
      
    </div>
  );
}

export default App;
