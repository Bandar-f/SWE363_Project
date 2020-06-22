import React, { Component } from 'react'
import './PersonWithRating.css'
                        /*Profile picture with full name and rating*/
function PersonWithRating(){
        return (
            <div id="Person">
               <img id="profilePic" alt="Profile Pic"/>
                <p id="nameNrating">
                {/*Full Name*/}
                <br/>
                {/*Rating out of 5*/}
                </p>
            </div>
        )
    }export default PersonWithRating
