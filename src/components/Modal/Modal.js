import PropTypes from 'prop-types';

import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWindow, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleClikOnBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { image } = this.props;
    return createPortal(
      <ModalBackdrop onClick={this.handleClikOnBackdrop}>
        <ModalWindow onClick={this.handleKeyDown}>
          <Img src={image.largeImageURL} alt={image.tags} />
        </ModalWindow>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  toggleModal: PropTypes.func.isRequired,
};
