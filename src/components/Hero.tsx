import * as React from "react";
import SearchInput from "./SearchInput";
import styles from "./Hero.module.scss";
import Text from "./design-components/Text";

const Hero = () => {
  return (
    <div className={styles.HeroContainer}>
      <section className={styles.HeroText}>
        <h1>MAKE THE BEST MOVE</h1>
        <h1>TO CHOOSE YOUR NEW JOB</h1>
      </section>
      <section className={styles.HeroSubText}>
        <Text
          text="Hire and manage talent globally with automated contract and payroll"
          longLine
        />
        <Text text="100% compliance guaranteed." longLine />
      </section>
      <SearchInput />
    </div>
  );
};

export default Hero;
