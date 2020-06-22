import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';
import PhoneNum from './components/phoneNumComponent/PhoneNum';
import FloatingLogo from './components/floatingLogoComponent/FloatingLogo';
import WelcomePage from './components/WelcomePage/WelcomePage';
import NavBar from './components/navBarComponent/NavBar';
import RadioImgBackground from './components/RadioImgBackgroundComponent/RadioImgBackground'
import Cap from './components/CarAndPerson/Cap'

function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">
      <WelcomePage/>

      <Cap/>
      
    </div>
  );
}

export default App;
