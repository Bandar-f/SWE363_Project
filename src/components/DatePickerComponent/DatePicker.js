import React from 'react';
import './datePicker.css';
import {  useLocation } from 'react-router-dom';

export default function DatePicker(props) {
	 const getCurrentDate = () => {
	 	var currentDate = new Date();
	 	const d = String(currentDate.getDate()).padStart(2, '0');
	 	const m = String(currentDate.getMonth() + 1).padStart(2, '0');
	 	const y = currentDate.getFullYear();
	 	currentDate = y + '-' + m + '-' + d;
	 	const x = document.getElementById("datePickerCustom").min = currentDate;
	 	return x;
	 }
	 ///dateAndTime
	 let currentRoute = useLocation().pathname;
	const getDate = (e) => {
		
		window.$dateValue = e.target.value;

		if(currentRoute!="/dateAndTime"){
		 const x = document.getElementById("datePickerCustom").value;
		 const y = document.getElementById("timePickerCustom").disabled=false;
		}
    
		
		console.log(window.$dateValue+" hiii there");
	  }
	return (
		<div className="picker-container">
			<input id="datePickerCustom" placeholder="DD / MM / YYYY" type="date" onChange={getDate} onClick={getCurrentDate}  required/>
		</div>
	);
}
