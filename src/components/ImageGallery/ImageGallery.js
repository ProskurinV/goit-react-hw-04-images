// import PropTypes from 'prop-types';
import { GalleryContainer } from './ImageGallery.styled';
import ImageGlleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

// Список карточек изображений. Создает DOM-элемент следующей структуры.

export default function ImageGallery(items) {
  return (
    <GalleryContainer>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGlleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </GalleryContainer>
  );
}
