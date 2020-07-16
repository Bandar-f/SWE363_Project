/* ------ Nawaf ------ */
import React from 'react';
import './button.css';

export default function Button(props) {
	const fireEvent = () => {
		props.fireUser();
	};
	return (
		<button onClick={() => fireEvent()} className="button">
			{props.text}
		</button>
	);
}
