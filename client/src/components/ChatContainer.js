import React, { useEffect, useState } from "react";

import WelcomeAdmin from "./WelcomeAdmin";
import CurrentClient from "./CurrentClient";

import styles from "./chatContainer.module.css";

const ChatContainer = (props) => {
  const [chooseChat, setChooseChat] = useState(false);
  const [currentChat, setCurrentChat] = useState("");

  useEffect(() => {
    setCurrentChat(props.currentChat)
  }, [props.currentChat]);

  useEffect(() => {
    if (chooseChat !== "") {
      setChooseChat(true)
    };
  }, []);

  // console.log(currentChat)

  return(
    <div className={styles.chatContainerSection}>
      {!currentChat && <WelcomeAdmin />}
      {currentChat && <CurrentClient currentChat={currentChat}/>}
    </div>
  )
};

export default ChatContainer;