import React from 'react';
import { Link } from 'react-router-dom';
import './phoneNum.css';
import axios from 'axios';
/*----- TTK -----*/
const PhoneNum = (props) => {
	const handelForm = (e) => {
		props.formHandler(e);
	};

	return (
		<div>
			<select name="cc" id="countryCode">
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
				placeholder="5XXXXXXXX"
				disabled={!props.isRadioClicked}
				pattern="[0-9]{9}"
				onChange={(e) => handelForm(e)}
			></input>
			<Link to="/secondLog">
				<button onClick={props.fetchUser} id="nxtbtn" type="submit">
					<i className="fas fa-arrow-right"></i>
				</button>
			</Link>
		</div>
	);
};

export default PhoneNum;
