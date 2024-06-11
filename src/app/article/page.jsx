import React from 'react';
import styles from './article.module.css';
import Link from 'next/link';

function ArticlePage() {
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

      <div className={styles.articlesContainer}>
        <div className={styles.article}>
          <h2 className={styles.title}>Ruwanweliseya</h2>
          <p className={styles.meta}>
            <span className={styles.author}>By King Dutugemunu</span> | 
            <span className={styles.date}> June 10, 2024</span>
          </p>
          <p className={styles.content}>
          Ruwanweliseya is a sacred stupa in Sri Lanka, revered by Buddhists. Built by King Dutugemunu, it stands as a symbol of architectural grandeur and religious significance, drawing pilgrims and tourists alike.
         </p>
        </div>

        <div className={styles.article}>
          <h2 className={styles.title}>Minneriya wewa</h2>
          <p className={styles.meta}>
            <span className={styles.author}>By King Mahasen</span> | 
            <span className={styles.date}> June 11, 2024</span>
          </p>
          <p className={styles.content}>
          Minneriya is an old water storage pond in Sri Lanka, made around the 3rd century AD. It helped farmers by providing water for their crops. It's also a home for many animals, like elephants that come there in large groups.
          </p>
        </div>

        <div className={styles.article}>
          <h2 className={styles.title}>Sigiriya</h2>
          <p className={styles.meta}>
            <span className={styles.author}>By king Kashapa</span> | 
            <span className={styles.date}> June 12, 2024</span>
          </p>
          <p className={styles.content}>
          Sigiriya is an ancient rock fortress in Sri Lanka. It was built by King Kasyapa in the 5th century AD. The fortress is famous for its frescoes, ancient graffiti, and the lion's paw entrance at the base of the rock.
          </p>
        </div>
      </div>
    </>
  );
}

export default ArticlePage;
