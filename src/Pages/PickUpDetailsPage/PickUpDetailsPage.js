import React from 'react'
import CarComponent from '../../components/CarComponent/CarComponent';
import PersonWithRating from '../../components/PersonWithRatingComponent/PersonWithRating'
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
            <div className='personal-withRating-wrappe'>
            <PersonWithRating name={'nawaf al sharqi'} rating={5}/>
            </div>
           
           
          
            <div className='updates-container'>
              <PackageTrack deliverOrPool={props.deliverOrPool}/>
            </div>
        </div>
        </motion.div>
    )
}
