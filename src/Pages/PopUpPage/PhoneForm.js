import React from 'react';
import Text from '../../components/TextComponent/Text'
import PhoneNum from '../../components/PhoneNumComponent/PhoneNum'
import './PopUp.css';

export const PhoneForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="middle realign">
        <Text text="Phone Number"/>
        <div className="realign">
        <br></br>
        <PhoneNum onSubmit={onSubmit}/>
        </div>
        </div>
    </form>
  );
};
export default PhoneForm;
