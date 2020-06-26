import React from 'react';
import Sidemenu from '../../components/Sidemenu/Sidemenu';
import Customer from '../../components/CustomerComponent/Customer';
import WideButton from '../../components/WideButtonComponent/WideButton';
import FloatingLogo from '../../components/floatingLogoComponent/FloatingLogo';
import './moreDetailsPage.css';
import uuid from 'react-uuid';

export default function MoreDetailsPage() {
    const customers = ['Nawaf al sharqi','Bandar Al Balawy','Tariq Al Khamis','Yasser Jaber'];
	return (
		<div>
             <FloatingLogo/>
            <h1 className="tag-info">Customers</h1>
			<div className="info-container">
            {customers.map(customer=>(
         <Customer key={uuid()} customer={customer}/>
            ))}
               <p className="wide-button-span">
               <WideButton/>
                </p> 
			    </div>
		</div>
	);
}
