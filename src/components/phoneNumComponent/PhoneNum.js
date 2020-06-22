import React from 'react'
import './phoneNum.css'
                            /*----- TTK -----*/
function PhoneNum() {
    return (
        <div>
        <select name="+966" id="countryCode">
         <option value="+966">+966</option>
         <option value="+965">+965</option>
         <option value="+973">+973</option>
         <option value="+971">+971</option>
        </select>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{9}"></input>
        </div>
    )
}

export default PhoneNum;