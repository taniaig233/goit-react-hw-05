import { DNA } from "react-loader-spinner";
import style from "./Loader.module.css";

export default function Loader () {
  return (
    <div className={style.containerLoader}>
     <DNA
     visible={true}
     height="80"
     width="80"
     ariaLabel="dna-loading"
     wrapperStyle={{}}
     wrapperClass="dna-wrapper"
  />
    </div>
  );
}

