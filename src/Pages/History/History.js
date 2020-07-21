import React, { Component } from 'react';
import Cap from '../../components/CarAndPerson/Cap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

class History extends Component {

	constructor(props){
		super(props);
	}
		state = { 
		trips: [],
		isLoading: true }
	
	componentDidMount(){
			this.getTrips();
		};
		
	getTrips(){
		axios({
			method:'get',
			url:"https://kptyn.herokuapp.com/trips/",
		})
		.then((res)=>{
		this.setState({
			trips: res.data,
			isLoading: false
		})
	})
		.catch((err)=>{console.log(err)
	});

	}





	render(){
		const { isLoading, trips } = this.state;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<Link to="/rating">
			{this.props.userType=='Customer'? (!isLoading ? ( 
						trips.map((trip)=>
						trip.customer.map((cust)=>
						(this.props.userPresence.username == cust.username && trip.isComplete==true ?
					<div  onClick={function(){window.$ratedTrip = trip.driver}}>
				 	<Cap name={trip.driver.name} date={trip.date} totalRating={trip.driver.totalRating}/>
					 </div>: '' ))
						)) : <h1>Loading...</h1>
			) : (!isLoading ? ( 
				trips.map((trip)=>
				(this.props.userPresence.id == trip.driver._id  && trip.isComplete==true ?
					trip.customer.map((cust)=>
					<div onClick={function(){window.$ratedTrip = cust}}>
					<Cap name={cust.name} date={trip.date} rating={cust.totalRating}/>
					</div>) : '' )
				)) : <h1>Loading...</h1>)}
			</Link>
		</motion.div>
	);
}
};

export default History;
