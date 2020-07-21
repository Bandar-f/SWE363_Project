import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './phoneNum.css';
/*----- TTK -----*/
const PhoneNum = (props) => {
	let [isDisabled, setIsDisabled] = useState(false);
	const handelForm = (e) => {
		props.formHandler(e);
	};
	const disableBtn = () => {
		const format = /^05\d{8}$/;
		const toCompare = document.getElementById("phone").value;
		if (toCompare.match(format)){
			setIsDisabled(true);
	}
		else{
			setIsDisabled(false);
			document.getElementById("warntxt").style.visibility="visible";
		}
	};
	return (
		<div>
			<select name="cc" id="countryCode" disabled={!props.isRadioClicked}>
				<option name="cc" value="+966">
					+966
				</option>
				<option name="cc" value="+965">
					+965
				</option>
				<option name="cc" value="+973">
					+973
				</option>
				<option name="cc" value="+971">
					+971
				</option>
				<option name="cc" value="+974">
					+974
				</option>
			</select>
			<input
				type="tel"
				id="phone"
				name="phone"
				placeholder="05XXXXXXXX"
				disabled={!props.isRadioClicked}
				pattern="[0-9]{10}"
				onChange={(e) => handelForm(e)}
				onKeyUp={disableBtn}
			></input>
			<Link to="/secondLog">
				<button id="nxtbtn" type="submit" onClick={props.fetchUser} disabled={!isDisabled}>
					<i className="fas fa-arrow-right"></i>
				</button>
			</Link>
			<p id="warntxt">*please enter in the format 05XXXXXXXX</p>
		</div>
	);
};

export default PhoneNum;
