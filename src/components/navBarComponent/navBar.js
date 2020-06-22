import React, {Component} from 'react';
import './navBar.css';
import { render } from '@testing-library/react';


class navBar extends Component{
    render() {
    return (
        <div id = "NavBar">
            <img id="SideMenu" src="https://www.hotel-igelheim.eu/img/mobile_nav_icon.png" alt="Side Menu"/>
            <h1>{this.props.header}</h1>
            <img id="Notif" src="https://www.iconsdb.com/icons/preview/white/bell-2-xxl.png" alt="Notifications"/>
        </div>
    )
    }
}

export default navBar;