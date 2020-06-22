import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';
import PhoneNum from './components/phoneNumComponent/PhoneNum';

function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">

      <TimePicker/>
      <PhoneNum/>
      
    </div>
  );
}

export default App;
