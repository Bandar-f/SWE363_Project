import React, {useState} from 'react';
import './RateDriverPage.css';
import Cap from '../../components/CarAndPerson/Cap';
import { FaStar } from 'react-icons/fa';
import Text from '../../components/TextComponent/Text';
import {motion} from 'framer-motion';

function RateDriverPage(){
    const starLabels = ['Terrible 😠', "Bad 😓", 'Good 😒', 'Excellent 😃', 'Spactacular 😎'];
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null);
    return(
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}
         >
        <Cap/>
        <p className='RatingText'><Text text='Rating: '/>  <p className='sLabel'>{starLabels[rating-1]}</p></p>
            <div className='star'>
             {[...Array(5)].map((star, i) =>{
                 const ratingValue = i+1;
                return (
                <label>
                    <input type="radio" name='rating' value={ratingValue}
                        onClick={()=>setRating(ratingValue)}/>
                    <FaStar className='rate' fill={ratingValue<=(hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size={37}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}/>
                </label>
                );
                })}
            </div>
            <textarea className='Complain' placeholder='Tell us about your ride ...'></textarea>
        </motion.div>
    );
} export default RateDriverPage;