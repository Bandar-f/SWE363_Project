import React, { Component } from 'react'
import './PersonWithRating.css'
                        /*Profile picture with full name and rating*/
function PersonWithRating(props){
        
            return (
                <div>
                  <img className="image" src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey.png" alt="personal pic"/>
                  <div className="text">
                  <p>Bandar albalawi</p>
                  <p>4.5/5</p>
                  </div>
                </div>
              )
        
    }export default PersonWithRating
