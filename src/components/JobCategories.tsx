import React from "react";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import AdUnitsRoundedIcon from "@mui/icons-material/AdUnitsRounded";
import Text from "./design-components/Text";
import styles from "./JobCategories.module.scss";
import Card from "./design-components/Card";

const JobCategories = () => {
  const subtext = (jobType: string) =>
    `You will be expected to lead the company's entire ${jobType} strategy`;

  const categories = [
    {
      title: "Graphic Design",
      subtext: subtext("Graphic Design"),
      icon: <DesignServicesRoundedIcon />,
    },
    {
      title: "Development",
      subtext: subtext("Development"),
      icon: <LaptopChromebookRoundedIcon />,
    },
    {
      title: "UI/UX Design",
      subtext: subtext("UI/UX Design"),
      icon: <DomainVerificationRoundedIcon />,
    },
    {
      title: "Web Application Design",
      subtext: subtext("Web App Design"),
      icon: <WebRoundedIcon />,
    },
    {
      title: "Digital Marketing",
      subtext: subtext("Marketing"),
      icon: <CampaignRoundedIcon />,
    },
    {
      title: "Mobile App Design",
      subtext: subtext("Mobile App"),
      icon: <AdUnitsRoundedIcon />,
    },
  ];
  return (
    <div className={styles.JobCategoriesContainer} id="categories">
      <div className={styles.JobCategoriesIntro}>
        <Text text="JOB CATEGORY" type="h2" bold />
        <Text
          text="Finding a job should not be a full-time endeavor. Tell us what you're searching for, and we'll find you a job."
          longLine
        />
      </div>
      <div className={styles.JobCategories}>
        {categories.map((category) => (
          <Card data={category} key={category.title} />
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
