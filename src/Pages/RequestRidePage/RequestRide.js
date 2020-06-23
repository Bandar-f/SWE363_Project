import React from 'react'
import NavBar from '../../components/navBarComponent/NavBar'
import Sidemenu from '../../components/Sidemenu/Sidemenu'
import FloatingLogo from '../../components/floatingLogoComponent/FloatingLogo'
import WelcomePage from '../WelcomePage/WelcomePage'
const titles=["History","Pickup Details", "Request ride"];
function RequestRide() {
    return (
        <div>
            <NavBar header="request ride"/>
            <Sidemenu titles={titles}/>
            <FloatingLogo/>
            <WelcomePage/>
        </div>
    )
}

export default RequestRide;