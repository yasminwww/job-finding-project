import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import Button from "../design-components/Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const scrollToSection = (sectionId: string, offset: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the scroll position with the offset
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={styles.NavContainer}>
      <figure className={styles.NavIcon} onClick={goToTop}>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/000000/query-inner-join.png"
          alt="query-inner-join"
        />
        <div>Ramason</div>
      </figure>
      <div className={styles.NavLinks}>
        <a href="#home" onClick={goToTop}>
          Home
        </a>
        <a href="#jobs" onClick={goToTop}>
          Jobs
        </a>
        <a href="#category" onClick={() => scrollToSection("categories", 140)}>
          Category
        </a>
        <a href="#resurces" onClick={() => scrollToSection("resources", 140)}>
          Resources
        </a>
        <a
          href="#career-advice"
          onClick={() => scrollToSection("companies", 0)}
        >
          Collaburations
        </a>
      </div>
      <Button label="Register Now" onClick={() => {}} dark />
    </nav>
  );
};

export default Navigation;
