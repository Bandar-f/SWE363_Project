import React from 'react'
import CarComponent from '../../components/CarComponent/CarComponent';
import Personal from '../../components/personalinfo/Personal';
import PackageTrack from  '../../components/PackageTrackComponent/PackageTrack';
import './pickUpDetailsPage.css'
import {motion} from 'framer-motion';



export default function PickUpDetailsPage(props) {
    return (

        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}
         >
        <div className='pickup-container'>
            <CarComponent/>
            <Personal name={'nawaf al sharqi'} rating={5}/>
            <div className='updates-container'>
              <PackageTrack/>
            </div>
        </div>
        </motion.div>
    )
}
