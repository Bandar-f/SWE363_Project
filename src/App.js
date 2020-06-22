import React from 'react';
import './App.css';
import './components/Form';
import Form from './components/Form';
import Sidemenu from './components/Sidemenu/Sidemenu';

function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div className="App">
      <Sidemenu titles={titles} />
      
      
    </div>
  );
}

export default App;
