import React from "react";
import styles from "./SearchInput.module.scss";
import Button from "./shared/Button";

type Props = {};

const SearchInput = (props: Props) => {
  return (
    <div className={styles.SearchInputContainer}>
      <div className={styles.SearchInputItems}>
        <div className={styles.SearchInputItem}>
          <input className={styles.Input} />
        </div>
        <Button label="Search" onClick={() => {}} />
      </div>
    </div>
  );
};

export default SearchInput;
