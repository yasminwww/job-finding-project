import React from "react";
import styles from "./FooterCard.module.scss";
import Text from "../design-components/Text";

interface FooterCardProps {
  title: string;
  label: string;
  link: string;
}

const FooterCard = ({ title, label, link }: FooterCardProps) => {
  return (
    <div className={styles.FooterCard}>
      <Text text="" type="h2"></Text>
    </div>
  );
};

export default FooterCard;
