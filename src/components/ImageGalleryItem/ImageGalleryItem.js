// import PropTypes from 'prop-types';

import { Item, Img } from './ImageGalleryItem.styled';
// Компонент элемента списка с изображением. Создает DOM-элемент следующей структуры.

export default function ImageGlleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
}) {
  return (
    <Item id={id}>
      <Img src={webformatURL} alt={tags} />
    </Item>
  );
}

// GI(item => {
//   setLaImgUrl(item.largeImUrl);
// });
