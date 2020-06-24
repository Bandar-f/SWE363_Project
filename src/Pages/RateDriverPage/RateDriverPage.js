/*import React, {useState} from 'react';
import './RateDriverPage.css';
import Cap from '../../components/CarAndPerson/Cap';
import { FaStar } from 'react-icons/fa';
function RateDriverPage(){
    const [rating, setRating] = useState(null);
    return(
        <div>
        <Cap/>
            <div className='star'>
             {[...Array(5)].map((star, i) =>{
                 const ratingValue = i+1;
                return (
                <label>
                    <input type="radio" name='rating' value={ratingValue}
                     onClick={()=>setRating(ratingValue)}/>
                    <FaStar className='rate' color={ratingValue<=rating ? "#ffc107" : "#e4e5e9"} size={25} />
                </label>
                );
                })}
            </div>
        </div>
    );
} export default RateDriverPage;*/