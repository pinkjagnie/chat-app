import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import styles from "./contacts.module.css";

const Contacts = (props) => {
  return(
    <div className={styles.contactsSection}>
      <ScrollToBottom className={styles.contactScroll}>
        {props.data.contacts.map((contact) => {
          return (
          <div className={styles.singleContact} key={contact.id}>
            <div className={styles.emailContact}>
              <p>{contact.id}</p>
            </div>
            <div className={styles.messageContact}>
              <p>{contact.messages[contact.messages.length - 1].message}</p>
            </div>
          </div>)
        })}
      </ScrollToBottom>
    </div>
  )
};

export default Contacts;