import React from 'react'
import NavBar from '../../components/navBarComponent/NavBar'
import Sidemenu from '../../components/Sidemenu/Sidemenu'
import FloatingLogo from '../../components/floatingLogoComponent/FloatingLogo'
import WelcomePage from '../WelcomePage/WelcomePage'
import Text from '../../components/TextComponent/Text'
import './requestRide.css'
import RadioImgBackground from '../../components/RadioImgBackgroundComponent/RadioImgBackground'
import Button from '../../components/WideButtonComponent/WideButton'

const titles=["History","Pickup Details", "Request ride"];
function RequestRide() {
    return (
        <div>
            <NavBar header="request ride"/>
            <FloatingLogo/>
            <section class="middle" >
                <div class="realign">
                <Text text="Where to..."/>
                </div>
                {/*<DropDownMenu/> to be added */}
                <RadioImgBackground url1="https://audimediacenter-a.akamaihd.net/system/production/media/91178/images/1f201fd6f5fcbd78b452dd0ff4907b1cc4dc0a8c/A202506_blog.jpg?1587377988"
                url2="https://i2.wp.com/us.motorsactu.com/wp-content/uploads/2019/10/Bentley-Flying_Spur-2020-1280-07.jpg?fit=1200%2C675&ssl=1"
                Label1="Economy Tier" Label2="Luxury Tier"/>
                <Button/>
            </section>
        </div>
    )
}

export default RequestRide;