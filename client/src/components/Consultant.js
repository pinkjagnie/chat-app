import React, { useState } from "react";
import Form from "./Form";

import lamaConsultant from "../img/lama_consultant_800-800.png";

import styles from "./consultant.module.css";

const Consultant = () => {
  const [hidden, setHidden] = useState(false);

  const showChatHandler = () => {
    setHidden(prevState => !prevState);
  };

  return(
    <div className={styles.consultantSection}>
      {hidden && <Form />}
      <div className={styles.lamaPicture} onClick={showChatHandler}>
        <img src={lamaConsultant} alt="lama consultant" />
      </div>
    </div>
  )
};

export default Consultant;