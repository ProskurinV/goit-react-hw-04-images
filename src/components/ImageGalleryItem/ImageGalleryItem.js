// import PropTypes from 'prop-types';

import { Item, Img } from './ImageGalleryItem.styled';
// Компонент элемента списка с изображением. Создает DOM-элемент следующей структуры.

export default function ImageGlleryItem() {
  return (
    <Item class="gallery-item">
      <Img src="" alt="" />
    </Item>
  );
}

// GI(item => {
//   setLaImgUrl(item.largeImUrl);
// });
