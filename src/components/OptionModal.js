import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
        <Modal
          isOpen={!!props.handlePick}
          onRequestClose={props.handleClearModal}
          contentLabel="Example Modal"
        >
          <h2>{props.handlePick}</h2>
          <button onClick={props.handleClearModal}>close</button>
        </Modal>
    );



export default OptionModal;