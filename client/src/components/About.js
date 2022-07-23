import React from "react";

import styles from "./about.module.css";

const About = () => {
  return(
    <div className={styles.aboutSection}>
      <div className={styles.aboutText}>
        <p>Alpaca Farm is a place where we will make your dream of a walk with an alpaca come true. Our alpacas are friendly and willing to pose for a shared selfie for a treat.</p>
        <p>The walk takes 1 hour.</p>
        <p>It is possible to organize an event at Alpaca Farm - thanks to us your birthday will be unforgettable!</p>
        <p>If you have any questions, chat with our alpacas consultant. Just click on the alpaca!</p>
      </div>
    </div>
  )
};

export default About;