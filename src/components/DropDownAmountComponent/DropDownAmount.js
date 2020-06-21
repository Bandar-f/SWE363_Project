import React from 'react';
import './dropDownAmount.css';

export default function DropDownAmount() {
    const amount = [1,2,3,4];
    return (

        <div>
            <h1>Package Amount</h1>
           <select id='#custom_amount'>
    <option key={'inial'} value={null}>{'1-4'}</option>
               {amount.map((amount,index)=>(
                
               <option key={index} value={amount}>{amount}</option>
               ))}
           </select>
        </div>
    )
}
