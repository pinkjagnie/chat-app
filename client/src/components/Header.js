import React from "react";

import lamPic from "../img/lam_chat_210-150.png";

import styles from "./header.module.css";

const Header = () => {
  return(
    <div className={styles.headerSection}>
      <div className={styles.logo}>
        <img src={lamPic} alt="lam chat" />
      </div>
    </div>
  )
};

export default Header;