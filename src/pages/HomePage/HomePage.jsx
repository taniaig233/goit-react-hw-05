import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getMoviesTrendingAccess } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import style from "./HomePage.module.css";

export default function HomePage () {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      // setFilms([]);
      const data = await getMoviesTrendingAccess();
      setFilms(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className={style.mainSection}>
      <h2 className={style.mainTitle}>Trending today</h2>
          {loading && <Loader />}
          {error && <p>Something has gone wrong. Try again in a few minutes.</p>}
          {films.length > 0 && <MovieList filmsList={films}/>}
    </main>
  );
}

