import PropTypes from 'prop-types';

import { Component } from 'react';
import { Item, Img } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
// Компонент элемента списка с изображением. Создает DOM-элемент следующей структуры.

export default class ImageGlleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { item } = this.props;
    return (
      <>
        <Item id={item.id}>
          <Img
            src={item.webformatURL}
            alt={item.tags}
            onClick={this.toggleModal}
          />
          {showModal && <Modal image={item} toggleModal={this.toggleModal} />}
        </Item>
      </>
    );
  }
}

ImageGlleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
