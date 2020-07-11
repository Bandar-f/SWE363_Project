//credits for modal tutorial: K. Kaewsanmuang (2019) retrieved from https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571

import React from 'react';
import './PopUp.css';
const Trigger = ({ tT, buttonRef, showModal }) => {
  return (
    <button
      className="modalButton"
      ref={buttonRef}
      onClick={showModal}
    >
      {tT}
    </button>
  );
};
export default Trigger;