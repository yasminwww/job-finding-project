import React from "react";
import styles from "./FooterCard.module.scss";
import Text from "./shared/Text";

interface FooterCardProps {
  title: string;
  label: string;
  link: string;
}

const FooterCard = ({ title, label, link }: FooterCardProps) => {
  return (
    <div className={styles.FooterCard}>
      <Text text="" size="34"></Text>
    </div>
  );
};

export default FooterCard;
