import React from 'react';
import './RadioButton.css';
/*-------------------------Two circular blue Radio Button-----------------------------*/
/*-------------------DON'T USE IT, USE RADIOBUTTONIMAGEDBACKGROUND-----------------------------*/
function RadioButton(props) {
	return (
		<div className="TwoRadios">
			<input
				onClick={() => {
					props.UserOrWorker(false);
					props.isRadioClicked();
				}}
				type="radio"
				id="First"
				name="Rad"
			
			/>
			<label for="First">Driver</label>

			<input
				onClick={() => {
					props.UserOrWorker(true);
					props.isRadioClicked();
				}}
				type="radio"
				id="Second"
				name="Rad"

			/>
			<label for="Second">Customer</label>
		</div>
	);
}
export default RadioButton;
