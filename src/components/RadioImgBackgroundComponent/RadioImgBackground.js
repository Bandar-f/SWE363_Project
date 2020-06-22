import React, { Component } from 'react';
import './RadioImgBackground.css';
                            /*Two Image-Background Radio Buttons*/

class RadioImgBackground extends Component {
    
/* -------------------------------Economy car url:---------------------------------- 

https://audimediacenter-a.akamaihd.net/
system/production/media/91178/images/
1f201fd6f5fcbd78b452dd0ff4907b1cc4dc0a8c/A202506_blog.jpg?1587377988*/


/* -------------------------------Luxury car url:----------------------------------

https://i2.wp.com/us.motorsactu.com/wp-content/uploads/2019/10/
Bentley-Flying_Spur-2020-1280-07.jpg?fit=1200%2C675&ssl=1*/


/* -------------------------------Small package url:----------------------------------

https://www.cheapestwaytoship.org/wp-content/gallery/package-shipping/small-package.jpg*/


/* -------------------------------Large package url:----------------------------------

https://images-na.ssl-images-amazon.com/images/I/81jGRJ%2BGmGL._AC_SL1500_.jpg*/


        render() {
            return (
        <div className='TwoImagedRadios'>
            <input type="radio" id="First" name="ImageRad"/>
            <label className="FirstImage" style={{backgroundImage: `url(${this.props.url1})`, backgroundSize: "cover"}}
             for="First">{/*Don't insert anything here*/}</label>
            
            <input type="radio" id="Second" name="ImageRad"/>
            <label className="SecondImage" style={{backgroundImage: `url(${this.props.url2})`, backgroundSize: "cover"}}
            for="Second">{/*Don't insert anything here*/}</label>

            <div className='labels'>
            <p className='FirstLabel'>{this.props.Label1}</p>
            <p className='SecondLabel'>{this.props.Label2}</p>
            </div>
        </div>
        )
    }
} export default RadioImgBackground