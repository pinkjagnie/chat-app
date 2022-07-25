import React from "react";

import styles from "./chatContainer.module.css";

const ChatContainer = () => {
  return(
    <div className={styles.chatContainerSection}>
      <div className={styles.welcomeAdmin}>
        <p>Welcome to the Alpaca Farm Admin Panel.</p>
        <p>Please select one of the conversations from the window on the left</p>
      </div>
    </div>
  )
};

export default ChatContainer;