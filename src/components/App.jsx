import { Component } from 'react';
// import OnlyScroll from 'only-scrollbar';
import SearchBar from './Searchbar/Searchbar';
import { getImg } from './pixabayApi';
// import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGlleryItem from './ImageGalleryItem/ImageGalleryItem';

// const scroll = new OnlyScroll(window, {
//   damping: 0.5,
// });

export default class App extends Component {
  state = {
    items: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
  };

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   try {
  //     const items = getImg(query, page);
  //     this.setState({ items });
  //     this.setState({ isLoading: false });
  //   } catch {
  //     this.setState({ error: 'Failed to load images' });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ isLoading: true });
    }

    try {
      const response = getImg(query, page);
      const images = response.hits;
      this.setState(({ items }) => ({
        items: [...items, ...images],
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handlerFormSubmit = data => {
    this.setState({
      page: 1,
      isLoading: false,
      error: false,
      items: [],
      query: data.search.trim(),
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();

  //   if (this.state.pokemonName.trim() === '') {
  //     toast.error('write pokenonName!');

  //     return;
  //   }

  //   this.props.onSubmit(this.state.pokemonName);
  //   this.setState({ pokemonName: '' });
  // };

  // setlargeImageURL = image => {
  //   this.setState({ largeImageURL: image });
  // };

  // clearLardeImageUrl = () => {
  //   this.setState({ largeImageURL: null });
  // };

  render() {
    const {
      items,
      // isLoading, error
    } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handlerFormSubmit} />
        <ImageGallery items={items} />
        {/* <Modal /> */}
      </div>
    );
  }
}
