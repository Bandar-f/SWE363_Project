import React, { useEffect } from 'react';
import Cap from '../../components/CarAndPerson/Cap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

const History = (props) => {



	useEffect(()=>{getTrips()});
	let output=[];



	const getTrips= ()=>{

		let trips=[];
		


		axios({
			method:'get',
			url:"https://kptyn.herokuapp.com/trips/",
				
		})
		.then((res)=>{trips=res.data})
		.catch((err)=>{console.log(err)});









         //with each trip look for the user inside customer
	trips.map((trip)=>{
		
		//second map to look inside the customer array within trip
		trip.customer.map((customer)=>{if(customer===props.userPresence)
			output.push(trip);
		})


	})











	}






	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<Link to="/rating">
				{output.map(()=><Cap userType={props.userType}/>)}
			</Link>
		</motion.div>
	);
};

export default History;
