import React from "react";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import styles from "./ActionsContainer.module.scss";
import Card from "../../design-components/Card";

const ActionsContainer = () => {
  const actions = [
    {
      title: "Help In Every Step",
      subtext:
        "Missing a CV or coverletter, here are some tips and tricks to creating a exceptional presentation of you and your skills.",
      icon: <NearMeRoundedIcon />,
    },
    {
      title: "Easy Apply For A Job",
      subtext:
        "Apply with your profile or tell us what you're searching for and we will find you a job.",
      icon: <NearMeRoundedIcon />,
    },
    {
      title: "Register An Account",
      subtext: "Register an account and start browsing!",
      icon: <BoltRoundedIcon />,
    },
  ];
  return (
    <div className={styles.ActionsContainer}>
      {actions.map((action) => (
        <Card data={action} key={action.title} row />
      ))}
    </div>
  );
};

export default ActionsContainer;
