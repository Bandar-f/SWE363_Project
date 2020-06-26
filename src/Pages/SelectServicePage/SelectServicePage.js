import React , { Component } from 'react';
import './SelectServicePage.css';
import SelectService from '../../components/SelectServiceComponent/SelectService';

function SelectServicePage(props) {
    
    return (
        <div>
           <SelectService deliverOrPool={props.deliverOrPool}/>
        </div>
    )
}

export default SelectServicePage;