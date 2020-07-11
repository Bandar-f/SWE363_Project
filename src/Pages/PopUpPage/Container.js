//credits for modal tutorial: K. Kaewsanmuang (2019) retrieved from https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571

import React, { Component } from 'react';
import './PopUp.css';
import { Modal } from '../PopUpPage/Modal';
import TriggerButton from '../PopUpPage/TriggerButton';
export class Container extends Component {
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };
  render() {
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
          tT={this.props.tT}
        />
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : '' }
      </React.Fragment>
    );
  }
}

export default Container;
