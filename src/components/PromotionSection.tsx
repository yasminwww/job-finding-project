import React from "react";
import styles from "./PromotionSection.module.scss";
import CVContainer from "./CVContainer";

const PromotionSection = () => {
  return (
    <div className={styles.PromotionSection}>
      <div className={styles.PromotionContent}>
        <CVContainer />
      </div>
    </div>
  );
};

export default PromotionSection;
