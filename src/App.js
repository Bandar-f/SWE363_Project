import React, {useState} from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import NavBar from "./components/NavBarComponent/NavBar";
import LoginPage from './Pages/LoginPage/LoginPage';
import MoreDetailsPage from './Pages/MoreDetailsPage/MoreDetailsPage';
import PackageTrackPage from './Pages/PackageTrackPage/PackageTrackPage'
import RateDriverPage from './Pages/RateDriverPage/RateDriverPage';
import StarRating from './components/StarRatingComponent/StarRating';

function App() {
   const titles=["History","Pickup Details", "Request ride"];
   const[isOpened,setIsOpened]=useState(false);

   const sidemenuClicked= ()=>{
     setIsOpened(true);

   }


  return (
    <div  className="App">
      <StarRating/>
   
     
  
      
      
     
    
    </div>
  );
}


// <NavBar header="test test" clicked={sidemenuClicked}/>
//<Sidemenu isOpened={isOpened} titles={titles}/>

export default App;
