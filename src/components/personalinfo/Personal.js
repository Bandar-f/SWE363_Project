import React from 'react'
import './personal.css';


const Personal = (props) => {
  return (
    <div className="main-b">
      <img width="50" height="50" className="image" src="https://www.logolynx.com/images/logolynx/s_0d/0d63ec3fb980f07166db66e9ba273baa.jpeg" alt="personal pic"/>
      <div className="text">
      <p>{props.name}</p>
      <p>{props.rating}/5</p>
      </div>
    </div>
  )
}

export default Personal
