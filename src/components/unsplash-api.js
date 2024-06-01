import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
// https://unsplash.com/developers 
const ACCESS_KEY = 'r1bv0cGSOPN9yma5sswCw-JahRtAD_RuqGm3j75US3w';

export default async function getPhotos(searchImage, page) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchImage,
      page,
      per_page: 12,
    },
  });
  return response.data;
}