import React, { useState } from "react";
import styles from "./Toggle.module.scss"; // Import the CSS file
import Text from "./Text";

interface ToggleProps {
  label?: string;
}

const Toggle = ({ label }: ToggleProps) => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleSwitch} onClick={handleToggle}>
        <div
          className={`${styles.slider} ${
            isToggled ? styles.sliderOn : styles.sliderOff
          }`}
        ></div>
      </div>
      {label && <Text text={label} size="11" />}
    </div>
  );
};

export default Toggle;
