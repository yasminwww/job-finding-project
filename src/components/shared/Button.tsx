import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  mt?: number;
  mb?: number;
  onClick: () => void;
};

const Button = ({ label, mt, mb, onClick }: ButtonProps) => {
  const buttonStyle = {
    marginTop: mt,
    marginBottom: mb,
  };
  return (
    <button className={styles.Button} onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
};

export default Button;
