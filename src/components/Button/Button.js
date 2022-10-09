// import PropTypes from 'prop-types';

import { LoadMore } from './Button.styled';

export default function LoadMoreBtn({ onClick }) {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
}

// <button id="myBtn" title="Go to top">Top</button>
