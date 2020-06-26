import React, { Component } from 'react'
import './Ut.css';
import Text from '../TextComponent/Text';
class Ut extends Component{
render()  {
  return (
      <div className="texts">
        <Text  text={this.props.date}/>
        <br/>
        <Text  text={`Destination: ${this.props.destination}`}/> 
        <br/>
        <Text  text={`Pickup Time: ${this.props.time}`}/>
        <br/>
        <Text  text={`At: ${this.props.place}`}/>
    </div>
      )
  }
}

export default Ut
