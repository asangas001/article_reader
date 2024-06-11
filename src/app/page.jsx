import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
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


  

    <div className={styles.ph}>
    <p1 className={styles.p1} > The article is...</p1><br></br>
    <br></br>
    <p2 className={styles.p2}>The article is a detailed examination of climate <br></br>
      change's impact on global food security, focusing on<br></br>
      factors like extreme weather, shifting precipitation<br></br>
       patterns, and increased pests and diseases.<br></br>
       <br></br>
          It emphasizes the need for adaptation strategies, <br></br>
        such as drought-resistant crops and sustainable practices,<br></br>
        and calls for international cooperation to address <br></br>
        these challenges.<br></br>
    </p2>
    </div>
    </>
  );
}
