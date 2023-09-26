import React from "react";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import styles from "./CVContainer.module.scss";
import Button from "./shared/Button";
import CVImage from "../assets/images/profile.png";
import Text from "./shared/Text";

const CVContainer = () => {
  return (
    <div className={styles.CVContainer}>
      <div className={styles.CVImage}>
        <img src={CVImage} alt="CV" />
      </div>
      <div className={styles.CVUpload}>
        <Text
          text="GET MACTHED WITH THE MOST VAUABLE JOBS, JUST ROP YOUR CV AT RAMSON"
          type="h3"
          bold
        />
        <Text
          text="Unlocking your potential, we pair your unique skillset with your dream career opportunities."
          size="tiny"
        />
        <Button
          label="Upload CV"
          onClick={() => {}}
          icon={<FileUploadRoundedIcon />}
        />
      </div>
    </div>
  );
};

export default CVContainer;
