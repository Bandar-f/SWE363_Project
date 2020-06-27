import React from 'react'
import './packageTrackPage.css';
import Cap from '../../components/CarAndPerson/Cap';
import PackageTrack from '../../components/PackageTrackComponent/PackageTrack';
import {motion} from 'framer-motion';


export default function PackageTrackPage() {
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}
         >
        <div className=''>
            <Cap/>
            <div className='track-container'>
          <PackageTrack/>
            </div>
        </div>
        </motion.div>
    )
}
