import React from "react";

import styles from "./welcomeAdmin.module.css";

const WelcomeAdmin = () => {
  return(
    <div className={styles.welcomeAdmin}>
      <p>Welcome to the Alpaca Farm Admin Panel.</p>
      <p>Please select one of the conversations from the window on the left</p>
    </div>
  )
};

export default WelcomeAdmin;