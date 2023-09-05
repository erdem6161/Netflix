import axios from 'axios';
import { ActionTypes } from '../ActionTypes';

// ? api isteği yaparken gönderilecek
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzFhYTVmNTkwMjBlM2JlODJlNGZkOTA2MGM2ZTYzNiIsInN1YiI6IjY0NzQ5OTM5OTQwOGVjMDBjMjhmYTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KKe2uazo7iAtiZVbMS4VQ2mhnm32Kx7p1q6IiVwkdbw',
  },
};

// axiosun davranışınını belirleme
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// asenkron aksiyon
export const getMovies = () => (dispatch) => {
  // store aktarmadn yapılan işlemler
  axios
    .get('/movie/popular', options)
    // apiden gelen veriyi reducera aktarma
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_MOVIES,
        payload: res.data.results,
      })
    );
};

// kategori verilerini almak için aksiyon
export const getGenres = () => (dispatch) => {
  // kategori verisini çekme isteği
  axios
    .get('/genre/movie/list', options)
    // veriyi store'a aktar
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    );
};

// custom hook
export const fetchByUrl = async (url) => {
  const res = await axios.get(url, options);

  return res.data;
};












//

//

//

//

//

//

// function getMovies() {
//   return async function (dispatch) {
//     // asenkron işlemler yapılıyor....
//    await axios
//     dispatch({
//       // reducera gönderme
//     });
//   };
// }
