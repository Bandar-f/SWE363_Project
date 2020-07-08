import React from 'react';
import Cap from '../../components/CarAndPerson/Cap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const History = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<Link to="/rateDriver">
				<Cap userType={props.userType}/>
			</Link>
			<Link to="/rateDriver">
				<Cap userType={props.userType}/>
			</Link>
			<Link to="/rateDriver">
				<Cap userType={props.userType}/>
			</Link>
			<Link to="/rateDriver">
				<Cap userType={props.userType}/>
			</Link>
		</motion.div>
	);
};

export default History;
