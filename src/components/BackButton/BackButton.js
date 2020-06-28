import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import "./backButton.css";
import { useHistory, useLocation } from 'react-router-dom';


const BackButton = () => {

  let History=useHistory();
  let currentRoute=useLocation().pathname;
  return (

    <>
    
    {currentRoute!="/"&&currentRoute!="/welcomePage"&&currentRoute!="/Login"&& currentRoute!="/RequestRide"&& currentRoute!="/PickupDetails"&&currentRoute!="/ScheduleRide"&&currentRoute!="/UpcomingTrips"&&currentRoute!="/History"?

    <div  onClick={()=>{History.goBack()}} className="button-contain-b">
       
      <IoIosArrowBack  color="#2B578A" />
      
    </div>:""}
    </>
    
  )
}

export default BackButton;
