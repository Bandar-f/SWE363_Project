import React, {useState} from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import NavBar from "./components/NavBarComponent/NavBar";
import SelectService from './Pages/SelectServicePage/SelectServicePage'
import WelcomePage from './Pages/WelcomePage/WelcomePage';


//  
function App() {
   const titles=["History","Pickup Details", "Request ride"];
   const[isOpened,setIsOpened]=useState(false);

   const sidemenuClicked= ()=>{
     setIsOpened(true);

   }


  return (
    <div  className="App">

      <NavBar header="test test" clicked={sidemenuClicked}/>
      <Sidemenu isOpened={isOpened} titles={titles}/>
      <div className="content-b">
      <SelectService/>
      </div>
    
    </div>
  );
}

export default App;
