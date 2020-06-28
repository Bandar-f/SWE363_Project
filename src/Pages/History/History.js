import React from 'react'
import Cap from '../../components/CarAndPerson/Cap'
import {motion} from 'framer-motion';
import {Link,useLocation} from 'react-router-dom'


const History = () => {
  return (
    <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
     >
     

     <Link to="/rateDriver"><Cap/></Link>
     <Cap/>
     <Cap/>
     <Cap/>

      
    </motion.div>
  )
}

export default History