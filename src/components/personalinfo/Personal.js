import React from 'react'
import './personal.css';


const Personal = (props) => {
  return (
    <div className="main-b">
      <img width="50" height="50" className="image" src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey.png" alt="personal pic"/>
      <div className="text">
      <p>{props.name}</p>
      <p>{props.rating}/5</p>
      </div>
    </div>
  )
}

export default Personal
