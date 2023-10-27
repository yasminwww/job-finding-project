import * as React from "react";
import SearchInput from "./SearchInput";
import styles from "./Hero.module.scss";
import Text from "../design-components/Text";
import bestMove from "../../assets/images/best-move.png";

const Hero = () => {
  return (
    <div className={styles.HeroContainer}>
      <section className={styles.HeroText}>
        <span>
          <h1>MAKE THE </h1>
          <img src={bestMove} alt="Best move" className={styles.BestMove} />
        </span>
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
