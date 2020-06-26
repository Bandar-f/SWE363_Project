import React from 'react';
import './login.css';
import Form from '../../components/FormComponent/Form';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';



export default function LoginPage(props) {
    return (
        <div className="Login-container">
        <Form userType={props.userType}/>
        </div>
    )
}
