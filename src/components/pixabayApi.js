import axios from 'axios';

export async function getImg(searchQuery, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const myKey = 'key=29439204-c21465a1feaf8a905890908f9';
  // const searchQuery = '';
  const elseParams = 'image_type=photo&orientation=horizontal';
  // const page = 1;

  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&${myKey}&${elseParams}&per_page=12`
  );
  return response.data;
}
