import React from "react";
import styles from "./Footer.module.scss";
import Text from "../design-components/Text";
import Button from "../design-components/Button";
import companyLogo from "../../assets/images/company-logo.png";

const Footer = () => {
  const companyInfo = [
    {
      logo: companyLogo,
      title: "",
      label: "Klarabergsviadukten 70, 111 64 Stockholm",
      buttonLabel: "Apply Now",
    },
    {
      logo: "",
      title: "ABOUT US",
      label: ["Our story", "Designer", "Partnership", "Recources"],
      buttonLabel: "",
    },
    {
      logo: "",
      title: "SUPPORT",
      label: ["FAQ's", "Find Job", "Category", "Condition"],
      buttonLabel: "",
    },
    {
      logo: "",
      title: "CONTACT US",
      label: ["++46 0770 22 44 88", "hello@ramason.com"],
      buttonLabel: "",
    },
  ];
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterCards}>
        {companyInfo.map((item: any) => (
          <div className={styles.FooterCard}>
            {item.logo ? (
              <img
                src={item.logo}
                alt="Companylogo"
                className={styles.CompanyLogo}
              />
            ) : (
              <Text text={item.title} type="h3" bold />
            )}
            <span className={styles.FooterLabel}>
              {Array.isArray(item.label) ? (
                item.label.map((link: string) => (
                  <>
                    <a href="/" className={styles.FooterLinks}>
                      {link}
                    </a>
                  </>
                ))
              ) : (
                <a href="/" className={styles.FooterLinks}>
                  {item.label}
                </a>
              )}
            </span>
            {item.buttonLabel ? (
              <Button label={item.buttonLabel} onClick={() => {}} />
            ) : null}
          </div>
        ))}
      </div>
      <div className={styles.Separator}></div>
      <span className={styles.FooterLegal}>
        <Text text="@Yasmin2023. All right reserved." size="tiny" />
        <div className={styles.Legal}>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/">Sweden Code</a>
        </div>
      </span>
    </div>
  );
};

export default Footer;
