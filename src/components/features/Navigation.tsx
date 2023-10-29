import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import Button from "../design-components/Button";
import companyLogo from "../../assets/images/c-logo.png";
import Text from "../design-components/Text";

const Navigation = () => {
  const [, setScrollPosition] = useState(0);
  const scrollToSection = (sectionId: string, offset: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
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

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.NavContainer}>
      <figure className={styles.NavIcon} onClick={goToTop}>
        <img width="48" height="48" src={companyLogo} alt="query-inner-join" />
        <Text text="Ramason" size="medium" bold />
      </figure>
      <div className={styles.NavLinks}>
        <a href="#home" onClick={goToTop}>
          Home
        </a>
        <a href="#jobs" onClick={goToTop}>
          Job Search
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
          Partners
        </a>
      </div>
      <Button label="Register Now" onClick={() => {}} dark />
    </nav>
  );
};

export default Navigation;
