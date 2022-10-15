import { useState, useEffect } from 'react';

import { MainBox } from './App.styled';
import OnlyScroll from 'only-scrollbar';
import SearchBar from '../Searchbar/Searchbar';
import getImg from '../pixabayApi';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../Button/Button';
import Loader from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

new OnlyScroll(window, {
  damping: 0.5,
});

export default function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (query === '') {
  //     toast.error('Write something!');
  //     return;
  //   }
  // }, [query]);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchImg(query, page) {
      try {
        setIsLoading(true);

        const response = await getImg(query, page);
        const images = response.hits;

        if (images.length === 0) {
          toast.error(
            'Sorry, there are no images matching your query. Please try again.'
          );
          return;
        }
        setItems(items => [...items, ...images]);
      } catch {
        setError('Can`t load images!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchImg(query, page);
  }, [page, query]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  const handlerFormSubmit = values => {
    if (query !== values.searchQuery.trim()) {
      setPage(1);
      setItems([]);
      setQuery(values.searchQuery.trim());
      setError(false);
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  return (
    <MainBox>
      <SearchBar onSubmit={handlerFormSubmit} />
      {isLoading && <Loader />}
      <ImageGallery items={items} />
      {items.length > 0 && <LoadMoreBtn onClick={loadMore} />}
      {isLoading && <Loader />}
      <Toaster />
    </MainBox>
  );
}
// export default class App extends Component {
//   state = {
//     items: [],
//     isLoading: false,
//     error: false,
//     query: '',
//     page: 1,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { page, query, error } = this.state;
//     const { page: prevPage, query: prevQuery, error: prevError } = prevState;

// if (query === '') {
//   toast.error('Write something!');
//   return;
// } else if (prevPage !== page || prevQuery !== query) {
//   this.fetchImg(query, page);

//   if (prevError !== error) {
//     toast.error(error);
//   }
// }
//   }

//   handlerFormSubmit = values => {
// const { query } = this.state;
// if (query !== values.searchQuery.trim()) {
//   this.setState({
//     page: 1,
//     isLoading: false,
//     error: false,
//     items: [],
//     query: values.searchQuery.trim(),
//   });
// }
//   };

// fetchImg = async (query, page) => {
//   try {
//     this.setState({ isLoading: true });

//     const response = await getImg(query, page);
//     const images = response.hits;

//     if (images.length === 0) {
//       toast.error(
//         'Sorry, there are no images matching your query. Please try again.'
//       );
//       return;
//     }

//     this.setState(({ items }) => ({
//       items: [...items, ...images],
//     }));
//   } catch {
//     this.setState({ error: 'Can`t load images!' });
//   } finally {
//     this.setState({ isLoading: false });
//   }
// };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       isLoading: true,
//     }));
//   };

//   render() {
//     const { items, isLoading } = this.state;
//     return (
//       <MainBox>
//         <SearchBar onSubmit={this.handlerFormSubmit} />
//         {isLoading && <Loader />}
//         <ImageGallery items={items} />
//         {items.length > 0 && <LoadMoreBtn onClick={this.loadMore} />}
//         {isLoading && <Loader />}
//         <Toaster />
//       </MainBox>
//     );
//   }
// }
