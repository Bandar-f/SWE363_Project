import React from 'react';
import './PopUp.css';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="modalButton"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;