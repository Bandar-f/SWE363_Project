import React from 'react'
import CarComponent from '../../components/CarComponent/CarComponent';
import Personal from '../../components/personalinfo/Personal';

export default function PickUpDetailsPage() {
    return (
        <div className='pickup-container'>
            <CarComponent/>
            <Personal name={'nawaf al sharqi'} rating={5}/>

        </div>
    )
}
