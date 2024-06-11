import React from 'react';
import styles from './login.module.css';
import Link from 'next/link';

function LoginForm() {
  return (
    <>
      <div className={styles.home}></div>
      <h1 className={styles.header}>Article</h1>

      <div className={styles.navbar}>
        <ul className={styles.navbarlist}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/article">Article</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
        </li>
        </ul>
      </div>

      <div className={styles.frame}>
        <form className={styles.form}>
          <h1 className={styles.loging}>Login</h1>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email:</label>
            <input className={styles.input} type="email" placeholder="Enter your Email" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password:</label>
            <input className={styles.input} type="password" placeholder="Enter your Password" />
          </div>

          <div>
            <button className={styles.button} type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
