import React from 'react'
import PersonWithRating from '../PersonWithRatingComponent/PersonWithRating'
import './style.css'
const cap = () => {
  return (
    <div>
      
      <div>
      <PersonWithRating/>
      <br/>
      <div className="car">
        <img className="car-img" src="http://www.pngmart.com/files/4/Car-Transparent-PNG.png" alt="car"/>


        <div className="text-under">
        <p className="car-info">2013 volswagen beetle</p>
        <p className="car-info">05/20/2020</p>
        </div>

      </div>


      </div>
    </div>
  )
}

export default cap
