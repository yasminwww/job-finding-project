import styles from "./Card.module.scss";
import React, { ReactNode } from "react";
import IconBubble from "./IconBubble";
import Text from "./Text";
import IconPop from "./IconPop";

interface CardProps {
  data: { icon: ReactNode; title: string; subtext: string };
  row?: boolean;
}

const Card = ({ data, row }: CardProps) => {
  return (
    <div className={row ? styles.CardRow : styles.Card}>
      {!row && <IconBubble icon={data.icon} />}
      <div>
        <Text text={data.title} bold size={row ? "small" : "medium"} />
        <Text text={data.subtext} thin size={row ? "small" : "medium"} />
      </div>
      {row && (
        <div>
          <IconPop icon={data.icon} />
        </div>
      )}
    </div>
  );
};

export default Card;
