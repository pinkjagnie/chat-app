import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import styles from "./contacts.module.css";

const Contacts = (props) => {
  return(
    <div className={styles.contactsSection}>
      <ScrollToBottom className={styles.contactScroll}>

      {props.contacts.map((contact) => {
        <div className={styles.singleContact}>
        <div className={styles.emailContact}>
          <p>{contact.id}</p>
        </div>
        <div className={styles.messageContact}>
          <p>{contact.message}</p>
        </div>
      </div>
      })}
        {/* <div className={styles.singleContact}>
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
        </div> */}

      </ScrollToBottom>
    </div>
  )
};

export default Contacts;