import React, { useState, Component } from 'react';
import './Comments.css';
import Text from '../../components/TextComponent/Text';
import WideButton from '../../components/WideButtonComponent/WideButton';
import axios from 'axios';

const Comments = () => {
	const [text, setText] = useState('');
	const trip = { id: '5f16276a3bb214001793a9f1' };

	const handleTextArea = (e) => {
		setText(e.target.value);
	};
	const postComment = async (trip, comment) => {
		try {
			const response = await axios.post(
				`https://kptyn.herokuapp.com/trips/${trip.id}/statusUpdates`,
				{
					statusUpdates: comment,
				}
			);
			console.log(response);
		} catch (e) {
			console.log(`error ${e}`);
		}
	};

	return (
		<div className="middle">
			<textarea
				className="com"
				placeholder="Send trip updates to customers"
				onChange={(e) => handleTextArea(e)}
			></textarea>
			<br />
			<br />
			<div onClick={() => postComment(trip, text)}>
				<WideButton buttonTitle="Send" />
			</div>

			<br />
		</div>
	);
};
export default Comments;
