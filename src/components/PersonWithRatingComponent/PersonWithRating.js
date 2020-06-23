import React, { Component } from 'react'
import './PersonWithRating.css'
                        /*Profile picture with full name and rating*/
function PersonWithRating(props){
        
            return (
                <div>
                  <img className="image" src="https://www.logolynx.com/images/logolynx/s_0d/0d63ec3fb980f07166db66e9ba273baa.jpeg" alt="personal pic"/>
                  <div className="text">
                  <p>Bandar albalawi</p>
                  <p>4.5/5</p>
                  </div>
                </div>
              )
        
    }export default PersonWithRating
