/* ---- nawaf ---- */

import React, { Component } from 'react';
import './dropDownAmount.css';
class DropDownAmount extends Component {
	render() {
		const amount = [1, 2, 3, 4];
		return (
			<div>
				<select id="#custom_amount">
					<option key={'initial'} value={null}>
						{'1-4'}
					</option>
					{amount.map((amount, index) => (
						<option key={index} value={amount}>
							{amount}
						</option>
					))}
				</select>
			</div>
		);
	}
}
export default DropDownAmount;
