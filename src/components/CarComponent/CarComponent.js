import React from 'react'
import './car.css';

const CarComponent = (props) => {
  return (
    <div className="carComponent-container">

      <div className="img-container">
      <img  className="img-car-info" src="http://www.pngmart.com/files/4/Car-Transparent-PNG.png" alt=""/>
      </div>

      <div className="textCar-container">
        <p className="text-car-info">2017 Volkswagen Golf GTI</p>
        <p className="text-car-info">Tier:Economy</p>
        
      </div>
      
    </div>
  )
}

export default CarComponent
