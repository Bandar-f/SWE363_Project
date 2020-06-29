import React from 'react';
import './UtPage.css';
import Ut from '../../components/UpcomingTripsComponent/Ut';
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo';
import WideButton from '../../components/WideButtonComponent/WideButton';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

function UtPage() {
    return(
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}
         >
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
        <br/>
        </div>
    </motion.div>
    )
} export default UtPage;