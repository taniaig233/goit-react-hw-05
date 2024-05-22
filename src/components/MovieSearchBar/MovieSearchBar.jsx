import { Field, Form, Formik } from "formik";
import { useId } from "react";
import style from "./MovieSearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const searchId = useId();
  
  const handleSubmit = (values, actions) => {
  const formattedSearch = values.search.trim().toLowerCase();
    if (!values.search.trim()) {
      toast.error("The search field cannot be empty!");
      return;
    }
    onSubmit(formattedSearch);
    actions.resetForm();
  };
  return (
    <div className={style.searchThumb}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={style.inputSearch}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            id={searchId}>
          </Field>          
          <button className={style.btnSearch} type="submit">
            Search
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </Form>
      </Formik>
    </div>
  );
}

