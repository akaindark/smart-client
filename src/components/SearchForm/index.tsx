import React from "react";
// @ts-ignore
import classes from "./SearchForm.module.scss";

const SearchForm: React.FC = () => {
  return (
    <>
      <form className={classes.form}>
        <input
          className={classes.input}
          type="text"
          placeholder="Cine cauta - gaseste!"
        />
        <svg
          className={classes.searchIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <button className={classes.btn}>Cauta</button>
      </form>
    </>
  );
};

export default SearchForm;
