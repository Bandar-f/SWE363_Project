import React from 'react';
import './dropdownDate.css'

export default function DropDownDate() {
    const date = {
        months:['MM',1,2,3,4,5,6,7,8,9,10,11,12],
        days:['DD',1,2,3,4,5,6,7,8,9,10,11,12
            ,13,14,15,16,17,18,19,20,21
            ,22,23,24,25,26,27,28,29,30],
        years:['YYY',2020,2021,2022]}

    const {months,days,years} = date;

    return (
        <div className='options-container'>
            <select 
            className='options' 
            name='month'>
                {months.map( (month,index) =>(
                 <option key={index} value={month}> {month} </option>
                ))}
            </select>

            <select 
            className='options' 
            name='day'>
                {days.map( (day,index) =>(
                <option key={index} value={day}> {day} </option>
                ))}
            </select>
            <select
            id='custom' 
            name='year'>
                {years.map( (year,index) =>(
                <option key={index} value={year}> {year} </option>
                ))}
            </select>
            <hr/>
        </div>
        
    )
}
