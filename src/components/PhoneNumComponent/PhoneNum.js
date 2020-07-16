import React from 'react';
import { Link } from 'react-router-dom';
import './phoneNum.css';
/*----- TTK -----*/
const PhoneNum = (props) => {
	return (
		<div>
			<select name="cc" id="countryCode" disabled={!props.isRadioClicked}>
				<option name="cc" value="+966">+966</option>
				<option name="cc" value="+965">+965</option>
				<option name="cc" value="+973">+973</option>
				<option name="cc" value="+971">+971</option>
				<option name="cc" value="+974">+974</option>
			</select>
			<input type="tel" id="phone" name="phone" placeholder="5XXXXXXXX" disabled={!props.isRadioClicked} pattern="[0-9]{9}"></input>
			<Link to="/secondLog">
				<button id="nxtbtn" type="submit" disabled={!props.isRadioClicked}>
					<i className="fas fa-arrow-right"></i>
				</button>
			</Link>
		</div>
	);
}

export default PhoneNum;
