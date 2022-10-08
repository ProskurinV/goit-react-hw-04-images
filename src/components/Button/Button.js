// import PropTypes from 'prop-types';

import { LoadMore } from './Button.styled';

export default function LoadMoreBtn({ onClick }) {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
}

// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими. Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. Если массив изображений пуст, кнопка не рендерится.

// <button id="myBtn" title="Go to top">Top</button>
