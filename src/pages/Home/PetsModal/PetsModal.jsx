import React from 'react';
import PropTypes from 'prop-types';
import Pets from '../PetsGrid';
import './styles.css'

const PetsModal = props => {
  const handleClick = e => {
    console.log(e.target);
    if (e.target.tagName === 'IMG') return;
    props.closeModal();
  }

  return (
    <div className="modal-bg" onClick={handleClick}>
      <div className="pets-modal">
        <Pets />
      </div>
    </div>
  );
}

PetsModal.propTypes = {
  closeModal: PropTypes.func
};

export default PetsModal;