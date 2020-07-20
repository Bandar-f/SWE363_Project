import React from 'react';
import Text from '../TextComponent/Text';
import './form.css';
import '../../Pages/PopUpPage/PopUp.css';
import { Container } from '../../Pages/PopUpPage/Container';

export default function Form(props) {
	const tT = 'Forgot my password';

	//________________Email reset link here
	const onSubmit = (event) => {
		event.preventDefault(event);
		const ph = event.target.phone.value;
		const format = /^(?:05|\5)\d{9}$/;
		if((ph.match(format)))
		alert("Reset link has been sent to "+ph);
		else 
		alert("Invalid format: please check your input");
	};

	const formHandel = (e) => {
		props.stateHandel(e);
	};

	const saveName = () => {
		props.name(document.getElementById("hisName").value);
	}

	return (
		<div className="formContainer">
			<form>
				<div className="leftAlign">
					{props.userAcc === 'New' ? <Text text="Please enter your name:" /> : ''}
				</div>
				{props.userAcc === 'New' ? <input onChange={saveName} type="text" id="hisName" placeholder="Ex.: John Doe" /> : ''}
				<br></br>
				<div className="leftAlign">
					{props.userType !== 'Customer' && props.userAcc === 'New' ? (
						<Text text="Please enter your car model name:" />
					) : (
						''
					)}
				</div>
				{props.userType !== 'Customer' && props.userAcc === 'New' ? (
					<input type="text" placeholder="Ex.: 2018 Ford Focus" />
				) : (
					''
				)}
				<br></br>
				<div className="leftAlign">
					<Text text="Please enter your password:" />
				</div>
				<input onChange={(e) => formHandel(e)} type="password" placeholder="Password" />
			</form>
			{props.userAcc === 'New' ? <p>Please enter a password that is at least 8 characters long</p>: ''}
			<br/>
			{props.userAcc === 'New' ? '' : <Container tT={tT} onSubmit={onSubmit} />}
		</div>
	);
}
