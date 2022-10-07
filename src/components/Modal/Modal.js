// import PropTypes from 'prop-types';

// При клике по элементу галереи должно открываться модальное окно с темным оверлеем и отображаться большая версия изображения. Модальное окно должно закрываться по нажатию клавиши ESC или по клику на оверлее.

// Внешний вид похож на функционал этого VanillaJS-плагина, только вместо белого модального окна рендерится изображение (в примере нажми Run). Анимацию делать не нужно!

/* <div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>; */

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
      this.props.onClose();
    }
  };

  handleClikOnBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleClikOnBackdrop}>
        <ModalWindow>
          <Img src="" alt="" />
        </ModalWindow>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
