import { Component } from 'react';
import OnlyScroll from 'only-scrollbar';
import SearchBar from './Searchbar/Searchbar';
import getImg from './pixabayApi';
// import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGlleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoadMoreBtn from './Button/Button';

new OnlyScroll(window, {
  damping: 0.5,
});

export default class App extends Component {
  state = {
    items: [],
    isLoading: false,
    error: false,
    query: '',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      // this.setState({ isLoading: true });
      const { page, query } = this.state;
      const { page: prevPage, query: prevQuery } = prevState;
      if (prevPage !== page || prevQuery !== query) {
        const response = await getImg(query, page);
        const images = response.hits;

        this.setState(({ items }) => ({
          items: [...items, ...images],
          // isLoading: false,
        }));
      }
    } catch (error) {
      this.setState({
        error: true,
        // isLoading: false
      });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handlerFormSubmit = values => {
    this.setState({
      page: 1,
      // isLoading: false,
      error: false,
      items: [],
      query: values.searchQuery,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const {
      items,
      // isLoading, error
    } = this.state;
    return (
      <div>
        {/* {error && <div>Opps</div>} */}
        <SearchBar onSubmit={this.handlerFormSubmit} />
        {/* {isLoading ? 'Loading' : } */}
        <ImageGallery items={items} />
        <LoadMoreBtn onClick={this.loadMore} />

        {/* <Modal /> */}
      </div>
    );
  }
}
