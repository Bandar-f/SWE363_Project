/*-------- Nawaf --------*/
import React from 'react';
import './form.css';
import Button from '../ButtonComponent/Button';
import FloatingLogo from '../FloatingLogoComponent/floatingLogo';


export default function Form() {
    return (
        <div className='formContainer'>
           <FloatingLogo/>
        <form>
            <input type='text' placeholder='Username'></input>
            <br></br>
            <input type='password' placeholder='Password'></input>
            <div className="button-container">
            <Button text={'Login'}/>
            <Button text={'back'}/>
            </div>
        </form>
        </div>
    )

}




