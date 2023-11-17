import React from "react";
import styles from "../../styles/navigation-bar.module.css";
import Link from "next/link";
import Shop2Icon from "@mui/icons-material/Shop2";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

function Index() {
  return (
    <>
      <div className={`${styles.container} ${styles.stickeyHeader}`}>
        <div className={styles.containerItems}>
          <div className={styles.leftItems}>
            <div className={styles.companyName}>
              <h1>Akoapa Shoes</h1>
            </div>
          </div>

          <div className={styles.navigationLinks}>
            <div className={styles.links}>
              <Link href="/"className={styles.link}>Home</Link>
            </div>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>Contact</Link>
            </div>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>About</Link>
            </div>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>Services</Link>
            </div>

            <div className={styles.links}>
              <Link href="/" className={styles.link}>Gallery</Link>
            </div>

            <div className={styles.links}>
              <Link href="/" className={styles.link}>Categories</Link>
            </div>

            <div className={styles.links}>
              <Link href="/" className={styles.link}>More</Link>
            </div>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>Products</Link>
            </div>
          </div>

          <div className={styles.personalItems}>
            <div className={styles.savedItems}>
              <Shop2Icon />
              <p>Saved Items</p>
            </div>

            <div className={styles.addCart}>
              <ShoppingCart />
              <p>Added Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
