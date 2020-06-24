import React from 'react';
import './App.css';
import RequestRide from './Pages/RequestRidePage/RequestRide'
import DateNDriver from './Pages/RequestRidePage/RequestRide';
import MoreDetailsPage from './Pages/MoreDetailsPage/MoreDetailsPage';


//  
function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">
      <MoreDetailsPage/>
    </div>
  );
}

export default App;
