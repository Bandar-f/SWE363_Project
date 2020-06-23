/*-------- Nawaf --------*/
import React from 'react';
import './form.css';
import Button from '../ButtonComponent/Button';
import FloatingLogo from '../floatingLogoComponent/FloatingLogo';

export default function Form() {
	return (
		<div className="formContainer">
			<FloatingLogo />
			<form>
				<input type="text" placeholder="Username" />
				<br></br>
				<input type="password" placeholder="Password" />

				<div className="button-container">
					<Button text={'Back'} />
					<Button text={'Login'} />
				</div>
			</form>
		</div>
	);
}
