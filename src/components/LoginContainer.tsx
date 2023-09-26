import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import styles from "./LoginContainer.module.scss";
import Text from "./shared/Text";
import Button from "./shared/Button";
import Toggle from "./shared/Toggle";

const LoginContainer = () => {
  const [seePassword, setSeePassword] = useState(false);
  return (
    <div className={styles.LoginSectionContainer}>
      <div className={styles.Phone}>
        <div className={styles.LoginCard}>
          <Text text="Enter your password" size="tiny" bold />
          <div className={styles.LoginAvatar}>Hello</div>
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
          <a href="https://sweary.com/funny-password-generator/">
            <Text text="Reset password" size="tiny" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
