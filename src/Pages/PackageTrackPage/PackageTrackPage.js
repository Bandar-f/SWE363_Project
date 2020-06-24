import React from 'react'
import './packageTrackPage.css';
import Cap from '../../components/CarAndPerson/Cap';
import PackageTrack from '../../components/PackageTrackComponent/PackageTrack';

export default function PackageTrackPage() {
    return (
        <div className=''>
            <Cap/>
            <div className='track-container'>
          <PackageTrack/>
            </div>
        </div>
    )
}
