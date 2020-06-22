import React, { Component } from 'react';
import './RadioImgBackground.css';
                            /*Two Image-Background Radio Buttons*/
function RadioButton(){
    
/* -------------------------------Economy car url:---------------------------------- 

https://audimediacenter-a.akamaihd.net/
system/production/media/91178/images/
1f201fd6f5fcbd78b452dd0ff4907b1cc4dc0a8c/A202506_blog.jpg?1587377988*/


/* -------------------------------Luxury car url:----------------------------------

https://i2.wp.com/us.motorsactu.com/wp-content/uploads/2019/10/
Bentley-Flying_Spur-2020-1280-07.jpg?fit=1200%2C675&ssl=1*/


/* -------------------------------Small package url:----------------------------------

https://ae01.alicdn.com/kf/HTB1O9LVQVXXXXb8aXXXq6xXFXXXf/9-6-5-3cm-Ecofriendly-Small
-Brown-Kraft-Favor-Party-Gift-Craft-Paper-Packaging-Box-Handmade.jpg*/


/* -------------------------------Large package url:----------------------------------

https://images-na.ssl-images-amazon.com/images/I/81jGRJ%2BGmGL._AC_SL1500_.jpg*/


    return (
        <div className='TwoImagedRadios'>
            <input type="radio" id="First" name="ImageRad"/>
            <label className="FirstImage" style={{background: `url(${this.props.url2})`}}
             for="First">{/*Don't insert anything here*/}</label>
            
            <input type="radio" id="Second" name="ImageRad"/>
            <label className="SecondImage" style={{backgroundImage: `url(${this.props.url2})`}} 
            for="Second">{/*Don't insert anything here*/}</label>

            <div className='labels'>
            <p className='FirstLabel'>{this.props.Firstlabel}</p>
            <p className='SecondLabel'>{this.props.Secondlabel}</p>
            </div>
        </div>
    )
} export default RadioButton