import React, { ReactNode } from "react";
import styles from "./IconPop.module.scss";

interface IconPopProps {
  icon: ReactNode;
}
const IconPop = ({ icon }: IconPopProps) => {
  return (
    <div className={styles.IconPop}>
      <div>{icon}</div>
    </div>
  );
};

export default IconPop;
