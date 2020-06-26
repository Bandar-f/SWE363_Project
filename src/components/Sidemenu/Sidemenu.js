import React, {useState} from 'react'
import Personal from '../personalinfo/Personal';
import  './Sidemenu.css';
import {Link} from 'react-router-dom'

const Sidemenu = (props) => {
            
//the header is where the personal informtion are set
//for the option they are positioned as a ul list items
  const [isClosed,setState]=useState(false);

    
  return (


    <div> 
      
    <div className={props.isOpened? "sidemenu": "hidden-sidemenu"}>
      <header>
          <Personal name="Bandar Albalawi" rating="4.5"/>
      </header>

      <ul>       
       {props.titles.map((titles,index)=>(<Link to={`/${titles.replace(/\s+/g, '')}`}><li className="side-menu-items">{titles}</li></Link>))}
      </ul>
      

     <Link to="/welcomePage"> <p className="logout">Logout</p></Link>
    </div>
    </div>
  )
}

export default Sidemenu
