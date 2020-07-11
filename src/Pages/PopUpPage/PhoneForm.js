//credits for modal tutorial: K. Kaewsanmuang (2019) retrieved from https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571

import React from 'react';
import Text from '../../components/TextComponent/Text'
import './PopUp.css';

export const PhoneForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="middle realign">
        <Text text="Phone Number"/>
        <div className="realign">
          <br></br>
          <input
            type="tel"
            name="phone"
            className="phone"      
            placeholder="009XX5XXXXXXXX"
          />
          <button type="submit" className="btnSend">
          Send Password Reset Request
          </button>
        </div>
      </div>
    </form>
  );
};
export default PhoneForm;
