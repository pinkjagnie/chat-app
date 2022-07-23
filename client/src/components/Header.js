import React from "react";

import lamPic from "../img/alpaca_farm_250-150.svg";

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