import React, { Component } from 'react'
import './text.css'

class Text extends Component{
    render(){
    return (
        <div class= "textStyling">
             {this.props.text} {/* allows for a consistant type of displayed text, apply by initiating <NavBar text="Any text"> */}
        </div>
    )
    }
}

export default Text;