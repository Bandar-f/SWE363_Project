import React from 'react';
import './datePicker.css';

export default function DatePicker() {
	const getCurrentDate = () => {
		var currentDate = new Date();
		const d = String(currentDate.getDate()).padStart(2, '0');
		const m = String(currentDate.getMonth() + 1).padStart(2, '0');
		const y = currentDate.getFullYear();
		currentDate = y + '-' + m + '-' + d;
		const x = document.getElementById("datePickerCustom").min = currentDate;
		return x;
	}
	const getDate = () => {
		const x = document.getElementById("datePickerCustom").value;
		const y = document.getElementById("timePickerCustom").disabled=false;
	  }
	return (
		<div className="picker-container">
			<input id="datePickerCustom" placeholder="DD / MM / YYYY" type="date" onChange={getDate} onClick={getCurrentDate} required/>
		</div>
	);
}
