import React from "react";
import { Link } from 'react-router-dom';

import styles from "../components/errorPage.module.css";

const ErrorPage = () => {
  return(
    <section className={styles.page404}>
      <h1>404</h1>
      <div className={styles.background404}></div>
      <div className={styles.contantBox404}>
        <h2>Look like you're lost</h2>
        <p>the page you are looking for not avaible!</p>
        <Link to='/' className={styles.link404}>Go Home</Link>
      </div>        
    </section> 
  )
};

export default ErrorPage;