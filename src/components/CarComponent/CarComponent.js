import React from 'react'
import './style.css';

const CarComponent = (props) => {
  return (
    <div className="container">

      <div className="img-container">
        <img  src="http://www.pngmart.com/files/4/Car-Transparent-PNG.png" alt=""/>
      </div>

      <div className="text-container">
        <p>2017 Volkswagen Golf GTI</p>
        <p>Tier:Economy</p>
        
      </div>
      
    </div>
  )
}

export default CarComponent
