import React from 'react';
import Text from '../TextComponent/Text';
import './form.css';
import '../../Pages/PopUpPage/PopUp.css';
import { Container } from '../../Pages/PopUpPage/Container';

export default function Form(props) {
	const tT = 'Forgot my password';

	//________________PhoneNum reset here
	const onSubmit = (event) => {
	  event.preventDefault(event);
	  const ph = event.target.phone.value;
	  const format = /^(?:009|\+9)\d{11}$/;
	  if((ph.match(format)))
	  alert("Reset link has been sent to "+ph);
	  else 
	  alert("Invalid format: please check your input");
	};

	return (
		<div className="formContainer">
			<form>
				<div className="leftAlign">
					{props.userAcc === 'New' ? <Text text="Please enter your name:" /> : ''}
				</div>
				{props.userAcc === 'New' ? <input type="text" placeholder="Ex.: John Doe" /> : ''}
				<br></br>
				<div className="leftAlign">
					{props.userType !== 'Customer' && props.userAcc === 'New' ? <Text text="Please enter your car model name:" /> : ''}
				</div>
				{props.userType !== 'Customer' && props.userAcc === 'New' ? <input type="text" placeholder="Ex.: 2018 Ford Focus" /> : ''}
				<br></br>
				<div className="leftAlign">
					<Text text="Please enter your password:" />
				</div>
				<input type="password" placeholder="Password" />
			</form>
			{ props.userAcc === 'New' ? '' : <Container tT={tT} onSubmit={onSubmit} />}
		</div>
	);
}
