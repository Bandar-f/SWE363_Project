import React from 'react';
import './UtPage.css';
import Ut from '../../components/UpcomingTripsComponent/Ut';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import WideButton from '../../components/WideButtonComponent/WideButton';
import { Link } from 'react-router-dom';
function UtPage() {
    return(
    <div>
        <FloatingLogo/>
        <div className='UTWB1'>
        <Ut date='Today'
        destination='Riyadh'
        time='15:20' 
        place='KFUPM Mall Parking'/>
        <Link to="/MoreDetails"><WideButton buttonTitle='More Details'/></Link>
        <hr/>
        <Ut date='06/29/2020'
        destination='Dammam'
        time='13:00' 
        place='KFUPM Mall Parking'/>
        <Link to="/MoreDetails"><WideButton buttonTitle='More Details'/></Link>
        </div>
    </div>
    )
} export default UtPage;