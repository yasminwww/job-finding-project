import React from "react";
import styles from "./SearchInput.module.scss";
import Button from "../design-components/Button";

const SearchInput = () => {
  return (
    <form className={styles.SearchFormContainer}>
      <div className={styles.SearchInputItems}>
        <div className={styles.SearchInputItem}>
          <label htmlFor="jobTitle">
            <i className="fa fa-search" aria-hidden="true"></i>
          </label>
          <input
            id="jobTitle"
            className={styles.Input}
            placeholder="Job title or keyword"
          />
        </div>
        <div className={styles.Separator} />
        <div className={styles.SearchInputItem}>
          <label htmlFor="location">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </label>
          <input
            id="location"
            className={styles.Input}
            placeholder="Location"
          />
        </div>
        <Button label="Search" onClick={() => {}} />
      </div>
    </form>
  );
};

export default SearchInput;
