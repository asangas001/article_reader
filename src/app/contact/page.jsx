
import React from 'react';
import styles from './contact.module.css';
import Link from 'next/link';

function ContactForm() {
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
          <h1 className={styles.contactHeader}>Contact Us</h1>

          <div className={styles.formGroup}>
            <label className={styles.label}>Name:</label>
            <input className={styles.input} type="text" placeholder="Enter your name" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email:</label>
            <input className={styles.input} type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Subject:</label>
            <input className={styles.input} type="text" placeholder="Enter subject" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Message:</label>
            <textarea className={styles.textarea} placeholder="Enter your message"></textarea>
          </div>

          <div>
            <button className={styles.button} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;

  
