import React from 'react';
import './timePicker.css';

 export default function TimePicker() {
	 
	const stateHandle = (e) => {
		window.$timeValue = e.target.value;
	}
	const showList = () => {
		document.getElementById("cnd").style.display = "block";
		document.getElementById("sdr").style.display = "block";
	}
	return (
		<div className="picker-container">
			<input id="timePickerCustom" type="time" onChange={stateHandle}/>
		</div>
	);
}
