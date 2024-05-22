import axios from 'axios'

const params = {
  headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTdlOGM4ZmU2Zjc1MGVjMDcwOWFhZDAyMjk4OTRlOCIsInN1YiI6IjY2NDg4YmU0MTA2OGMzMGY0ZDBhYmRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dYxt73d9gvvAwGAdeKrC5VZhfbc6ValwsuoeVhH7tvU'
}
};

export const getMoviesTrendingAccess = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const response = await axios.get(url, params);
    return response.data.results;
};

export const getSearchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(url, params);
    return response.data.results;
};

export const getMovieId = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
  const responce = await axios.get(url, params)
    return responce.data;
}

export const getMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const responce = await axios.get(url, params);
    return responce.data.cast;
}

export const getMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`
  const responce = await axios.get(url, params);
    return responce.data.results;
}