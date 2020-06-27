import React from 'react';
import './newUser.css';
import {Link} from 'react-router-dom';
import Button from '../ButtonComponent/Button';

export default function NewUser(props) {
    return (
        <div className="NewUserContainer">
            <form>
            
           
            <input type="text" placeholder="First Name" required />
            <br></br>
            <input type="text" placeholder="Last Name" required />
            <br></br>
            <input type="email" placeholder="nawaf720@example.com" required />
            <br></br>
				<input type="text" placeholder="Username" required />
				<br></br>
				<input type="password" placeholder="Password" required/>
                <br></br>
	
                    <Link
                    className='NewUser-Links' 
                     to="/welcomePage"><Button text={'Back'} /></Link>
                    
                    <Link 
                    className='NewUser-Links' 
                    to={props.userType==="Customer"?"/RequestRide":"/UpcomingTrips"}><Button text={'Start'} /></Link>
				
			</form>
        </div>
    )
}
