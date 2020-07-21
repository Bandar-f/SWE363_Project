import React, { useState, Component } from 'react';
import './Comments.css';
import Text from '../../components/TextComponent/Text';
import WideButton from '../../components/WideButtonComponent/WideButton';
import axios from 'axios';

class Comments extends Component {
	render() {
		return (
			<div className="middle">
				<textarea className="com" placeholder="Send trip updates to customers"></textarea>
				<br />
				<br />
				<WideButton buttonTitle="Send" />

				<br />
			</div>
		);
	}
}
export default Comments;
