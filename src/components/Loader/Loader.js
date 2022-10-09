// import PropTypes from 'prop-types';
import { FallingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

// Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой готовый компонент, например react-loader-spinner или любой другой.
export default function Loader() {
  return (
    <LoaderWrapper>
      <FallingLines
        color="#3f51b5"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LoaderWrapper>
  );
}
