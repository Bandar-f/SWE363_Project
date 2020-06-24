import React from 'react';
import './App.css';
import RequestRide from './Pages/RequestRidePage/RequestRide'
import DateNDriver from './Pages/RequestRidePage/RequestRide';


//  
function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">
      <RequestRide/>
    </div>
  );
}

export default App;
