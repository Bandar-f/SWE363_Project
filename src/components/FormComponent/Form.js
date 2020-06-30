/*-------- Nawaf --------*/
import React from 'react';
import Text from '../TextComponent/Text';
import './form.css';

export default function Form(props) {
	return (
		<div className="formContainer">
			<form>
				<div className="leftAlign">
					<Text text="Please enter your name:" />
				</div>
				<input type="text" placeholder="name" />
				<br></br>
				<div className="leftAlign">
					{props.userType !== 'Customer' ? <Text text="Please enter your Government ID:" /> : ''}
				</div>
				{props.userType !== 'Customer' ? <input type="text" placeholder="ID" /> : ''}
				<br></br>
				<div className="leftAlign">
					<Text text="Please enter your password:" />
				</div>
				<input type="password" placeholder="Password" />
			</form>
		</div>
	);
}
