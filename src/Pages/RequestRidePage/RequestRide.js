import React from 'react'
import NavBar from '../../components/NavBarComponent/NavBar'
import Sidemenu from '../../components/Sidemenu/Sidemenu'
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo'
import WelcomePage from '../WelcomePage/WelcomePage'
import Text from '../../components/TextComponent/Text'
import './requestRide.css'
import RadioImgBackground from '../../components/RadioImgBackgroundComponent/RadioImgBackground'
import WideButton from '../../components/WideButtonComponent/WideButton'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';



function RequestRide(props) {
    console.log(props.deliverOrPool);
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}
         >
            <FloatingLogo/>
            <section class="middle" >
                <div class="realign">
                <Text text={props.deliverOrPool==="Deliver"?"Where to...":"Whete to ship..."}/>
                </div>
                <div>
                <select name="select destination" id="rideRoute">
                <option value="dhr">Dhahran</option>
                <option value="kbr">Khobar</option>
                <option value="dmm">Dammam</option>
                <option value="qtf">Qatif</option>
                <option value="jbl">Jubail</option>
                <option value="hsa">Alahasaa</option>
                <option value="ryd">Riyadh</option>
                <option value="qsm">Qasseem</option>
                <option value="hff">Hafoof</option>
                <option value="bqq">Albaqiq</option>
                </select>
                </div>

                <div className='RRIB'>
                {props.deliverOrPool==="Deliver"?<RadioImgBackground url1="https://audimediacenter-a.akamaihd.net/system/production/media/91178/images/1f201fd6f5fcbd78b452dd0ff4907b1cc4dc0a8c/A202506_blog.jpg?1587377988"
                url2="https://i2.wp.com/us.motorsactu.com/wp-content/uploads/2019/10/Bentley-Flying_Spur-2020-1280-07.jpg?fit=1200%2C675&ssl=1"
                Label1="Economy Tier" Label2="Luxury Tier"/>:<RadioImgBackground url1="https://www.cheapestwaytoship.org/wp-content/gallery/package-shipping/small-package.jpg
                "
                url2="https://images-na.ssl-images-amazon.com/images/I/81jGRJ%2BGmGL._AC_SL1500_.jpg"
                Label1="Small package" Label2="Large package"/>}
                <br/>
                <Link to="/dateAndTime"> <WideButton buttonTitle="Continue"/> </Link>
                </div>
            </section>
            
        </motion.div>
    )
}

export default RequestRide;