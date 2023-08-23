import styles from "./Category.module.scss";

import React, { ReactElement } from "react";
import IconBubble from "./IconBubble";
import Text from "./Text";

interface CategoryProps {
  data: { icon: ReactElement; title: string; subtext: string };
}

const Category = ({ data }: CategoryProps) => {
  return (
    <div className={styles.Category}>
      <div>
        <IconBubble icon={data.icon} />
      </div>
      <Text text={data.title} bold />
      <Text text={data.subtext} thin />
    </div>
  );
};

export default Category;
