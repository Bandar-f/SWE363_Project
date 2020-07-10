
import React from 'react';
import './PopUp.css';
import ReactDOM from 'react-dom';
import { PhoneForm } from './PhoneForm';
import FocusTrap from 'focus-trap-react';
export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        className="modalCover"
        onClick={onClickOutside}
      >
        <div className="modalArea" ref={modalRef}>
          <button
            ref={buttonRef}
            className="close"
            onClick={closeModal}
          >
              X
          </button>
          <div className="modalBody">
            <PhoneForm onSubmit={onSubmit} />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
