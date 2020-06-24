import React from 'react'
import './customer.css'

const Customer = (props) => {
  const customers = ['Nawaf al sharqi','Bandar Al Balawy','Tariq Al Khamis','Yasser Jaber'];
  return (
    <div className="container">
        <p className="customer-name">
        {customers.map(customer=>
          <>
             <p className="customer-name">
               {customer}
             </p>
             <button className='button-small'>Call</button>
           
             
          </>
          )}
        </p>
       
         
        
      
    </div>
  )
}

export default Customer
