import PropTypes from 'prop-types';

import { useState } from 'react';
import { Item, Img } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

export default function ImageGlleryItem(item) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => ({
      showModal: !showModal,
    }));
  };

  return (
    <>
      <Item id={item.id}>
        <Img src={item.webformatURL} alt={item.tags} onClick={toggleModal} />
        {showModal && <Modal image={item} toggleModal={toggleModal} />}
      </Item>
    </>
  );
}

ImageGlleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
