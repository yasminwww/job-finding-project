import React from "react";
import styles from "./AppSection.module.scss";
import notifications from "../../../assets/images/notifications.png";
import Text from "../../design-components/Text";
import Button from "../../design-components/Button";

const AppSection = () => {
  return (
    <div className={styles.AppSectionContainer}>
      <div className={styles.AppSection}>
        <img
          className={styles.AppSectionImage}
          src={notifications}
          alt="notifications"
        />
      </div>
      <div className={styles.AppSectionInfo}>
        <Text text="GET YOUR JOB TODAY FIND THE JOBS YOU LOVE" type="h2" bold />
        <Text
          text="Finding a job should not be a full-time endeavor. Tell us what you're searching for, and we'll find you a job. This is the new way to find a job that suit you. Find a job you love. Research the fastest-growing companies."
          longLine
        />
        <Button label="Apply Now" onClick={() => {}} mt={18} />
      </div>
    </div>
  );
};

export default AppSection;
