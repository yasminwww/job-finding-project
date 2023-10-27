import React from "react";
import styles from "./SearchInput.module.scss";
import Button from "../design-components/Button";

const SearchInput = () => {
  return (
    <div className={styles.SearchInputContainer}>
      <div className={styles.SearchInputItems}>
        <div className={styles.SearchInputItem}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input className={styles.Input} placeholder="Job title or keyword" />
          <div className={styles.Separator} />
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <input className={styles.Input} placeholder=" Location" />
        </div>
        <Button label="Search" onClick={() => {}} />
      </div>
    </div>
  );
};

export default SearchInput;
