import React from 'react'
import CarComponent from '../../components/CarComponent/CarComponent';
import Personal from '../../components/personalinfo/Personal';
import PackageTrack from  '../../components/PackageTrackComponent/PackageTrack';
import './pickUpDetailsPage.css'

export default function PickUpDetailsPage(props) {
    return (
        <div className='pickup-container'>
            <CarComponent/>
            <Personal name={'nawaf al sharqi'} rating={5}/>
            <div className='updates-container'>
              <PackageTrack/>
            </div>
        </div>
    )
}
