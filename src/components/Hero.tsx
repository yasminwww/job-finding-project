import * as React from "react";
import SearchInput from "./SearchInput";
import styles from "./Hero.module.scss";

export interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <div className={styles.HeroContainer}>
      <section className={styles.HeroText}>
        <h1>MAKE THE BEST MOVE</h1>
        <h1>TO CHOOSE YOUR NEW JOB</h1>
      </section>
      <section className={styles.HeroSubText}>
        <p>
          Hire and manage talent globally with automated contract and payroll
        </p>
        <p>100% compliance guaranteed.</p>
      </section>
      <SearchInput />
    </div>
  );
};

export default Hero;
