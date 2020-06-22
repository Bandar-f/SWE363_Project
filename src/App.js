import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';

function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">

      <TimePicker/>
      
    </div>
  );
}

export default App;
