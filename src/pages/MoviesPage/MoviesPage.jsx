import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import MovieSearchBar from "../../components/MovieSearchBar/MovieSearchBar.jsx";
import { getSearchMovies } from "../../movies-api.js";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader.jsx";
// import toast, { Toaster } from "react-hot-toast";
import style from "./MoviesPage.module.css";



  export default function MoviesPage () {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";
 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

  useEffect(() => {
    setSearchResults([]);
    const searchData = async (query) => {
      try {
        setLoading(true);
        setError(false);

        const response = await getSearchMovies(query);
        setSearchResults(response);
       
      } catch (error) {
         setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      searchData(searchQuery);
    }
  }, [searchQuery]);

   
  return (
    <main>
      <section className={style.moviesSearch}>
        <MovieSearchBar onSubmit={(query) => setSearchParams({ search: query })} />
        {loading && <Loader />}
        {error && <p>Something has gone wrong. Try again in a few minutes.</p>}
        {searchResults?.length > 0 && <MovieList filmsList={searchResults} />}
        
       
      </section>
    </main>
  )
}