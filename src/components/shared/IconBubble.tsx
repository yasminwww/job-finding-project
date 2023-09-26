import React, { ReactNode } from "react";
import styles from "./IconBubble.module.scss";

interface IconBubbleProps {
  icon: ReactNode;
}

const IconBubble = ({ icon }: IconBubbleProps) => {
  return (
    <div className={styles.IconBubbleBox}>
      <div>{icon}</div>
    </div>
  );
};

export default IconBubble;
