import React from "react";
import styles from "./IconBubble.module.scss";
import { Icon } from "@mui/material";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";

interface IconBubbleProps {
  icon: any;
}

const IconBubble = ({ icon }: IconBubbleProps) => {
  return (
    <div className={styles.IconBubbleBox}>
      <div>{icon}</div>
    </div>
  );
};

export default IconBubble;
