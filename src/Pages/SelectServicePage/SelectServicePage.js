import React from 'react';
import './SelectServicePage.css';
import SelectService from '../../components/SelectServiceComponent/SelectService';
import { motion } from 'framer-motion';

function SelectServicePage(props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<header>
				<h2 className="SSHeader">Select your service</h2>
			</header>
			<SelectService deliverOrPool={props.deliverOrPool} />
		</motion.div>
	);
}

export default SelectServicePage;
