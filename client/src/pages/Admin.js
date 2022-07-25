import React from "react";

import Contacts from "../components/Contacts";

import styles from "../components/admin.module.css"

const Admin = () => {
  return(
    <div className={styles.adminSection}>
      <p className={styles.title}>Alpaca Farm Admin Panel</p>
      <div className={styles.adminContainer}>
        <Contacts />
        {/* <ChatContainer /> */}
      </div>
    </div>
  )
};

export default Admin;