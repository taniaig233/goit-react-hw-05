import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../movies-api";
import Loader from "../Loader/Loader";
import style from "./MovieCast.module.css";

export default function MovieCast () {
  const { movieid } = useParams();
    const [credits, setCredits] = useState(null);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handelClick = async () => {
      try {
        setLoading(true);
        // setCredits([]);
        const dataCredits = await getMovieCast(movieid, "/credits");
        setCredits(dataCredits);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handelClick();
  }, [movieid]);
  return (
    <section className={style.castSection}>
          {loading && <Loader />}
          {error && <p>Something has gone wrong. Try again in a few minutes.</p>}
      {credits && credits.length > 0 ? (
        <ul className={style.castList}>
          {credits.map(actor => (
              <li className={style.castItem} key={actor.id}>
                  <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : `https://storage.googleapis.com/pod_public/1300/169106.jpg`}
                      alt="actor photo" />
                  <p> {actor.name} </p>
                  <p> Character: {actor.character}  </p>
            </li>
          ))}
        </ul>) : (<p> The information did not found </p>)
      }
    </section>
  );
}

