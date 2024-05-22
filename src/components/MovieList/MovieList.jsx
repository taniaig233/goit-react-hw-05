import { Link, useLocation } from "react-router-dom";
import style from "./MovieList.module.css"


export default function MovieList ({ filmsList })  {
    const location = useLocation();
    
  return (
    <div className={style.containerList}>
      <ul className={style.filmsList}>
        {filmsList?.map(movie => (
          <li key={movie.id} className={style.filmItem}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    <p>* {movie.title } </p> 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

