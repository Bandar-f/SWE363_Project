import React from 'react'
import { Link } from 'react-router-dom'
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
         <Link to="/secondLog">
        <button id="nxtbtn"><i class='fas fa-arrow-right'></i></button>
        </Link>
        </div>
    )
}

export default PhoneNum;