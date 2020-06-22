import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import CarComponent from "./components/CarComponent/CarComponent"

function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div className="App">
      <CarComponent/>
     
      
      
    </div>
  );
}

export default App;
