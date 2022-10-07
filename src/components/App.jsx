import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { getImg } from './pixabayApi';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const images = getImg();
      this.setState({ images });
      this.setState({ isLoading: false });
    } catch (error) {}
  }

  componentDidUpdate() {}

  // setlargeImageURL = image => {
  //   this.setState({ largeImageURL: image });
  // };

  // clearLardeImageUrl = () => {
  //   this.setState({ largeImageURL: null });
  // };

  render() {
    return (
      <div>
        <SearchBar onSubmit={console.log} />
      </div>
    );
  }
}
