import React from "react";
import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterCards}>
        <div className={styles.FooterCard}></div>
        <div className={styles.FooterCard}>Hello</div>
        <div className={styles.FooterCard}>Hello</div>
        <div className={styles.FooterCard}>Hello</div>
      </div>
    </div>
  );
};

export default Footer;
