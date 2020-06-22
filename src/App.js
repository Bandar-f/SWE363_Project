import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';

function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">

      <DatePicker/>
      
    </div>
  );
}

export default App;
