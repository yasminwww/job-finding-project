import React from "react";
import styles from "./Companies.module.scss";
import facebook from "../../../assets/images/companies/Facebook_Logo_(2019).svg-modified.png";
import reebok from "../../../assets/images/companies/Reebok_delta_logo.svg-modified.png";
import amazon from "../../../assets/images/companies/Amazon_logo.svg.png";
import prudential from "../../../assets/images/companies/Prudential-modified.png";
import google from "../../../assets/images/companies/Google_2015_logo.svg-modified.png";
import microsoft from "../../../assets/images/companies/Microsoft_logo_(2012).svg-modified.png";
import zoover from "../../../assets/images/companies/Zoover-logo-2021_RGB-pos-modified.png";
import thousand from "../../../assets/images/thousand.png";
import Text from "../../design-components/Text";

const Companies = () => {
  const companies = [
    facebook,
    reebok,
    prudential,
    google,
    microsoft,
    zoover,
    amazon,
  ];

  return (
    <div className={styles.CompaniesContainer} id="companies">
      <div className={styles.CompaniesHeadline}>
        <span className={styles.CompaniesFirstSection}>
          <Text text="WE HAVE WORKED WITH" type="h2" bold />
          <img src={thousand} alt="Tousand plus" />
        </span>
        <Text text="TRUSTED COMPANIES!" type="h2" bold />
      </div>
      <div className={styles.Companies}>
        {companies.map((src) => (
          <div key={src} className={styles.Company}>
            <img src={src} alt="Customer-companies" />
            <div className={styles.overlay}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
