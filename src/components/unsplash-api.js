import axios from 'axios';

const ACCESS_KEY = 'r1bv0cGSOPN9yma5sswCw-JahRtAD_RuqGm3j75US3w';
axios.defaults.baseURL = 'https://api.unsplash.com/';
// https://unsplash.com/developers 
// axios.defaults.headers.common['Authorization'] = ACCESS_KEY;


export default async function getImages(searchImage, page) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchImage,
      page,
      per_page: 12,
    },
  });
  //console.log('response >> ', response);
  return response.data;
  
}

// import axios from 'axios';
// const API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
// axios.defaults.baseURL = 'https://api.pexels.com/v1/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 15,
// };

// export const getPhotos = async (query, page) => {
//   const { data } = await axios.get(`search?query=${query}&page=${page}`);

//   return data;
// };