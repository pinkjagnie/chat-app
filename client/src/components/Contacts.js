import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import styles from "./contacts.module.css";

const Contacts = () => {
  return(
    <div className={styles.contactsSection}>
      <ScrollToBottom className={styles.contactScroll}>

        <div className={styles.singleContact}>
          <div className={styles.emailContact}>
            <p>example@example.com</p>
          </div>
          <div className={styles.messageContact}>
            <p>Hello! I have a question about party on your Alpaca Farm.</p>
          </div>
        </div>

        <div className={styles.singleContact}>
          <div className={styles.emailContact}>
            <p>example@example.com</p>
          </div>
          <div className={styles.messageContact}>
            <p>Hello! I have a question about party on your Alpaca Farm.</p>
          </div>
        </div>

        <div className={styles.singleContact}>
          <div className={styles.emailContact}>
            <p>example@example.com</p>
          </div>
          <div className={styles.messageContact}>
            <p>Hello! I have a question about party on your Alpaca Farm.</p>
          </div>
        </div>

        <div className={styles.singleContact}>
          <div className={styles.emailContact}>
            <p>example@example.com</p>
          </div>
          <div className={styles.messageContact}>
            <p>Hello! I have a question about party on your Alpaca Farm.</p>
          </div>
        </div>

        <div className={styles.singleContact}>
          <div className={styles.emailContact}>
            <p>example@example.com</p>
          </div>
          <div className={styles.messageContact}>
            <p>Hello! I have a question about party on your Alpaca Farm.</p>
          </div>
        </div>

        <div className={styles.singleContact}>
          <div className={styles.emailContact}>
            <p>example@example.com</p>
          </div>
          <div className={styles.messageContact}>
            <p>Hello! I have a question about party on your Alpaca Farm.</p>
          </div>
        </div>

        <div className={styles.singleContact}>
          <div className={styles.emailContact}>
            <p>example@example.com</p>
          </div>
          <div className={styles.messageContact}>
            <p>Hello! I have a question about party on your Alpaca Farm.</p>
          </div>
        </div>

        <div className={styles.singleContact}>
          <div className={styles.emailContact}>
            <p>example@example.com</p>
          </div>
          <div className={styles.messageContact}>
            <p>Hello! I have a question about party on your Alpaca Farm.</p>
          </div>
        </div>

        <div className={styles.singleContact}>
          <div className={styles.emailContact}>
            <p>example@example.com</p>
          </div>
          <div className={styles.messageContact}>
            <p>Hello! I have a question about party on your Alpaca Farm.</p>
          </div>
        </div>

      </ScrollToBottom>
    </div>
  )
};

export default Contacts;