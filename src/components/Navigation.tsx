import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Navigation.module.scss";
import Button from "./shared/Button";

const Navigation = () => {
  return (
    <nav className={styles.NavContainer}>
      <div className={styles.NavIcon}>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/000000/query-inner-join.png"
          alt="query-inner-join"
        />
        <div>Ramason</div>
      </div>
      <div className={styles.NavLinks}>
        <Link to="#home" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link>
        <Link to="#jobs" spy={true} smooth={true} offset={50} duration={500}>
          Jobs
        </Link>
        <Link
          to="#category"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Category
        </Link>
        <Link
          to="#resurces"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Resources
        </Link>
        <Link
          to="#career-advice"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Career Advice
        </Link>
      </div>
      <Button label="Register Now" onClick={() => {}} dark />
    </nav>
  );
};

export default Navigation;
