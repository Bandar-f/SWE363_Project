import React, { Component } from 'react';
import './RadioButton.css';
                            /*Two circular blue Radio Button*/
function RadioButton(){
    return (
        <div className='TwoRadios'>
            <input type="radio" id="First" name="Rad"/>
            <label for="First">{/*Label Name*/}</label>

            <input type="radio" id="Second" name="Rad"/>
            <label for="Second">{/*Label Name*/}</label>
        </div>
    )
} export default RadioButton