import React, {useState} from 'react'
import Personal from '../personalinfo/Personal';
import  './Sidemenu.css';

const Sidemenu = (props) => {
            
//the header is where the personal informtion are set
//for the option they are positioned as a ul list items
  const [isClicked,setState]=useState(false);

    
  return (


    <div>  <button onClick={()=>{setState(true); console.log("hi")}} className="test">Click me</button>
    <div className={isClicked? "sidemenu": "hidden-sidemenu"}>
      <header >
          <Personal name="Bandar Albalawi" rating="4.5"/>
        
      </header>

      <ul>
        

              
       {props.titles.map((titles,index)=>(<li>{titles}</li>))}
      </ul>
      

      <p className="logout">Logout</p>
    </div>
    </div>
  )
}

export default Sidemenu
