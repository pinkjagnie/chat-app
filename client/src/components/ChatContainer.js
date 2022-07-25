import React, { useState } from "react";

import WelcomeAdmin from "./WelcomeAdmin";

import styles from "./chatContainer.module.css";

const ChatContainer = () => {
  const [chooseMessage, setChooseMessage] = useState(false);

  return(
    <div className={styles.chatContainerSection}>
      <WelcomeAdmin />
    </div>
  )
};

export default ChatContainer;