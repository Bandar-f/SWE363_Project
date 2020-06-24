import React, {useState} from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import NavBar from "./components/navBarComponent/NavBar";
import LoginPage from './Pages/LoginPage/LoginPage';
import MoreDetailsPage from './Pages/MoreDetailsPage/MoreDetailsPage';
import PackageTrackPage from './Pages/PackageTrackPage/PackageTrackPage'

function App() {
   const titles=["History","Pickup Details", "Request ride"];
   const[isOpened,setIsOpened]=useState(false);

   const sidemenuClicked= ()=>{
     setIsOpened(true);

   }


  return (
    <div  className="App">
      <PackageTrackPage/>
   
     
  
      
      
     
    
    </div>
  );
}


// <NavBar header="test test" clicked={sidemenuClicked}/>
//<Sidemenu isOpened={isOpened} titles={titles}/>

export default App;
