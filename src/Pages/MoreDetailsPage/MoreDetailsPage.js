import React from 'react';
import Sidemenu from '../../components/Sidemenu/Sidemenu';
import Customer from '../../components/CustomerComponent/Customer';
import WideButton from '../../components/WideButtonComponent/WideButton';
import FloatingLogo from '../../components/floatingLogoComponent/FloatingLogo';
import './moreDetailsPage.css';
import uuid from 'react-uuid';

export default function MoreDetailsPage() {
	return (
		<div>
             <FloatingLogo/>
            <h1 className="tag-info">Customers</h1>
			<div className="info-container">
                <Customer/>
               <p className="wide-button-span">
               <WideButton/>
                </p> 
			    </div>
		</div>
	);
}
