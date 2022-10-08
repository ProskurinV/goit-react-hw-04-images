import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const myKey = 'key=29439204-c21465a1feaf8a905890908f9';
const elseParams = 'image_type=photo&orientation=horizontal';

export default async function getImg(query, page) {
  const response = await axios.get(
    `?q=${query}&page=${page}&${myKey}&${elseParams}&per_page=12`
  );
  return response.data;
}
