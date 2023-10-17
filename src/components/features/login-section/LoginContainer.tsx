import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import styles from "./LoginContainer.module.scss";
import Text from "../../design-components/Text";
import Button from "../../design-components/Button";
import Toggle from "../../design-components/Toggle";
import avatar from "../../../assets/images/thumbnail.png";

const LoginContainer = () => {
  const [seePassword, setSeePassword] = useState(false);
  return (
    <div className={styles.LoginSectionContainer}>
      <div className={styles.Phone}>
        <div className={styles.LoginCard}>
          <Text text="Enter your password" size="large" bold />
          <div className={styles.LoginAvatar}>
            <img src={avatar} alt="Avatar" />
            <span>
              <Text text="Business Manager" size="tiny" />
              <Text text="Alina Marshall" size="tiny" bold />
            </span>
          </div>
          <Text text="Password" size="tiny" bold />
          <div className={styles.LoginInputContainer}>
            <div className={styles.LoginInput}>
              <input type={seePassword ? "none" : "password"} />
              <div className={styles.LoginActions}>
                <Toggle label="Stay signed in" />
                <Button label="Continue" onClick={() => {}} />
              </div>
            </div>
            {seePassword ? (
              <RemoveRedEyeRoundedIcon
                onClick={() => setSeePassword(!seePassword)}
              />
            ) : (
              <VisibilityOffIcon onClick={() => setSeePassword(!seePassword)} />
            )}
          </div>
          <a
            href="https://sweary.com/funny-password-generator/"
            target="_blank"
            rel="noreferrer"
          >
            <Text text="Reset password" size="tiny" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
