import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
        <Modal
          isOpen={!!props.handlePick}
          onRequestClose={props.handleClearModal}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
          className="modal"
        >
          <h3 className="modal__title">Selected Option</h3>
          {props.handlePick && <p className="modal__body">{props.handlePick}</p>}
          <button className="button" onClick={props.handleClearModal}>close</button>
        </Modal>
    );



export default OptionModal;