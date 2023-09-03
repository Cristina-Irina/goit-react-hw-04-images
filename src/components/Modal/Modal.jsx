import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent, ModalImage } from './Modal.styled';

const Modal = ({ imageURL, imageTags, toggleModal }) => {
  const handleClickESC = useCallback(
    e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleClickESC);

    return () => {
      window.removeEventListener('keydown', handleClickESC);
    };
  }, [handleClickESC]);

  return (
    <ModalBackdrop onClick={toggleModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalImage src={imageURL} alt={imageTags} />
      </ModalContent>
    </ModalBackdrop>
  );
};

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  imageTags: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
