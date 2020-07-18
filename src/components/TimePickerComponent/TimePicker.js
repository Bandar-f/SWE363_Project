import React from 'react';
import './timePicker.css';

export default function TimePicker() {
	const showList = () => {
		document.getElementById("cnd").style.display = "block";
		document.getElementById("sdr").style.display = "block";
	}
	return (
		<div className="picker-container">
			<input id="timePickerCustom" type="time" disabled={true} onChange={showList} />
		</div>
	);
}
