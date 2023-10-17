import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  icon?: ReactNode;
  mt?: number;
  mb?: number;
  dark?: boolean;
  onClick: () => void;
};

const Button = ({ label, icon, mt, mb, dark, onClick }: ButtonProps) => {
  const buttonStyle = {
    marginTop: mt,
    marginBottom: mb,
    backgroundColor: dark ? "#03221b" : "#00a056",
  };
  return (
    <button className={styles.Button} onClick={onClick} style={buttonStyle}>
      {icon ? icon : ""} {label}
    </button>
  );
};

export default Button;
