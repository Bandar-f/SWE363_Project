import React from 'react';
import './login.css';
import Form from '../../components/FormComponent/Form';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import {motion} from 'framer-motion';



export default function LoginPage(props) {
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}
         >
        <div className="Login-container">
        <Form userType={props.userType}/>
        </div>
        </motion.div>
    )
}
