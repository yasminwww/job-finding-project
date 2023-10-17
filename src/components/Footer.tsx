import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterCards}>
        <div className={styles.FooterCard}></div>
        <div className={styles.FooterCard}>About us</div>
        <div className={styles.FooterCard}>Support</div>
        <div className={styles.FooterCard}>Contact</div>
      </div>
    </div>
  );
};

export default Footer;
