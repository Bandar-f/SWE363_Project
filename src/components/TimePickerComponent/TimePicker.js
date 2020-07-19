import React from 'react';
import './timePicker.css';

 export default function TimePicker() {
	 
	const showList = (e) => {
		// document.getElementById("cnd").style.display = "block";
		// document.getElementById("sdr").style.display = "block";
		window.$timeValue = e.target.value;
	}
	return (
		<div className="picker-container">
			<input id="timePickerCustom" type="time" disabled={true} onChange={showList}/>
		</div>
	);
}
