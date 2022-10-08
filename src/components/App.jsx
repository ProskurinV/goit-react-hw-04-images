import { Component } from 'react';
// import OnlyScroll from 'only-scrollbar';
import SearchBar from './Searchbar/Searchbar';
import getImg from './pixabayApi';
// import Modal from './Modal/Modal';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGlleryItem from './ImageGalleryItem/ImageGalleryItem';

// const scroll = new OnlyScroll(window, {
//   damping: 0.5,
// });

export default class App extends Component {
  state = {
    items: [],
    // isLoading: false,
    // error: null,
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    const { page: prevPage, query: prevQuery } = prevState;
    if (prevPage !== page || prevQuery !== query) {
      this.setState({ isLoading: true });

      const response = getImg(query, page);
      const images = response.hits;

      this.setState(({ items }) => ({
        items: [...items, ...images],
      }));

      this.setState({ isLoading: false });
    }
  }

  handlerFormSubmit = () => {
    this.setState({
      page: 1,
      isLoading: false,
      error: false,
      items: [],
      query: '',
    });
  };

  render() {
    // const {
    //   items,
    //   isLoading, error
    // } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handlerFormSubmit} />
        {/* <ImageGallery items={items} /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}
