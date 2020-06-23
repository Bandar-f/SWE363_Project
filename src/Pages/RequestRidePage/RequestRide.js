import React from 'react'
import NavBar from '../../components/NavBarComponent/NavBar'
import Sidemenu from '../../components/Sidemenu/Sidemenu'
import FloatingLogo from '../../components/FloatingLogoComponent/FloatingLogo'
import WelcomePage from '../WelcomePage/WelcomePage'
import Text from '../../components/TextComponent/Text'
const titles=["History","Pickup Details", "Request ride"];
function RequestRide() {
    return (
        <div>
            <Sidemenu titles={titles}/>
            <NavBar header="request ride"/>
            <FloatingLogo/>
            <section>
                <Text text=""/>
            </section>
        </div>
    )
}

export default RequestRide;