import React from "react";
import styles from "./PromotionSection.module.scss";
import CVContainer from "./CVContainer";
import Companies from "./Companies";
import Subscribtion from "./Subscribtion";

const PromotionSection = () => {
  return (
    <div className={styles.PromotionSection} id="promotion">
      <div className={styles.PromotionContent}>
        <CVContainer />
        <Companies />
        <Subscribtion />
      </div>
    </div>
  );
};

export default PromotionSection;
