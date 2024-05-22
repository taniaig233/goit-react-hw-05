import { Link, useLocation } from "react-router-dom";
import { AiFillFrown } from "react-icons/ai";
import style from "./NotFoundPage.module.css";

export default function NotFoundPage () {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <section className={style.containerNotFound}>
      <div className={style.notFound}>
        <h1 className={style.notFoundTitle}>404</h1>

       <AiFillFrown className={style.notFoundIcon}></AiFillFrown>
        <h2 className={style.notFoundTitleInform}>Page not found</h2>

        <p className={style.notFoundMessage}>
         The requested page has not been found. 
        </p>
        <Link to={backLinkHref}>
          <button className={style.notFoundBtn}>Go to homepage</button>
        </Link>
      </div>
    </section>
  );
}