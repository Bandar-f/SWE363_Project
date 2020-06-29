import React, {useState} from 'react'
import Personal from '../personalinfo/Personal';
import  './Sidemenu.css';
import {Link,useLocation} from 'react-router-dom'

const Sidemenu = (props) => {
            

  
let currentRoute=useLocation().pathname;


    
  return (


    <div> 
      {currentRoute!="/"&&currentRoute!="/welcomePage"&&currentRoute!="/Login"?
    <div className={props.isOpened? "sidemenu": "hidden-sidemenu"}>
      <header>
          <Personal name="Bandar Albalawi" rating="4.5"/>
      </header>

      <ul>       
       {props.titles.map((titles,index)=>(<Link to={`/${titles.replace(/\s+/g, '')}`}><li onClick={()=>{props.sidemenuItemClicked()}} className="side-menu-items">{titles}</li></Link>))}
      </ul>
      

     <Link to="/welcomePage"> <p className="logout">Logout</p></Link>
    </div>

      :""}
    </div>
  )
}

export default Sidemenu
