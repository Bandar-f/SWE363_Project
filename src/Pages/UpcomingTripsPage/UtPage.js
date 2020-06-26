import React from 'react';
import './UtPage.css';
import Ut from '../../components/UpcomingTripsComponent/Ut';
import FloatingLogo from '../../components/floatingLogoComponent/FloatingLogo';
import WideButton from '../../components/WideButtonComponent/WideButton';
function UtPage() {
    return(
    <div>
        <FloatingLogo/>
        <div className='UTWB1'>
        <Ut date='Today'
        destination='Riyadh'
        time='15:20' 
        place='KFUPM Mall Parking'/>
        <WideButton buttonTitle='More Details'/>
        <hr/>
        <Ut date='06/29/2020'
        destination='Dammam'
        time='13:00' 
        place='KFUPM Mall Parking'/>
        <WideButton buttonTitle='More Details'/>
        </div>
    </div>
    )
} export default UtPage;