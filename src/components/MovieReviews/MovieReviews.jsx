import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";
import Loader from "../Loader/Loader";
import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";
import style from "./MovieReviews.module.css";

export default function MovieReviews () {
    const { movieid } = useParams();
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handelClick = async () => {
      try {
        setLoading(true);
        // setReviews([]);
        const dataCredits = await getMovieReviews(movieid, "/reviews");
        setReviews(dataCredits);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handelClick();
  }, [movieid]);
  return (
    <section>
          {loading && <Loader />}
          {error && <p>Something has gone wrong. Try again in a few minutes.</p>}
          {reviews && reviews.length > 0 ?
              (<ul className={style.reviewList}>
                  {reviews.map(review => (
                      <li className={style.reviewItem} key={review.id}>
                          <MovieReviewsItem dataReviews={review} />
                      </li>
                  ))}
              </ul>) : "There are no reviews for this movie"}
      </section>
  );
}

