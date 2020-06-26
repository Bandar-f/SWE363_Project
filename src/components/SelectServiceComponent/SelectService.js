import React, { Component } from 'react';
import './SelectService.css';
import {Link} from 'react-router-dom';
function SelectService(props){
    return (
        <div>

            <Link to="/welcomePage">
            <button onClick={()=>{props.deliverOrPool(false)}} className='Travel'><p className='TravelLabel'>
                Travel With Our Experienced <br/> Drivers</p></button>
            
            <button onClick={()=>{props.deliverOrPool(true)}} className='Deliver'><p className='DeliverLabel'>
                Send Packages Immediately To Your <br/>Loved ones</p></button>

                </Link>
        </div>
    )
} export default SelectService;