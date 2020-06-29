import React from 'react'
import './car.css';

const CarComponent = (props) => {
  return (
    <div className="carComponent-container">

      <div className="img-container">
      <img  className="img-car-info" src="https://groupeparkavenue.com/sites/default/files/styles/scale_1200/https/images.swift.fuseinteractive.ca/chrome/media/ChromeImageGallery/ColorMatched_01/Transparent/1280/cc_2019HOC17_01_1280/cc_2019HOC170002_01_1280_NH0.png?itok=-SijIKWe" alt="car"/>
      </div>

      <div className="textCar-container">
        <p className="text-car-info">Civic Type R</p>
        <p className="text-car-info">Tier:Economy</p>

      </div>

    </div>
  )
}

export default CarComponent
