import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWindow, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ image, toggleModal }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      toggleModal();
    }
  };

  const handleClikOnBackdrop = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleClikOnBackdrop}>
      <ModalWindow onClick={handleKeyDown}>
        <Img src={image.largeImageURL} alt={image.tags} />
      </ModalWindow>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  toggleModal: PropTypes.func.isRequired,
};
