import React, { useState, useEffect } from "react";
import styles from "../../styles/navigation-bar.module.css";
import Link from "next/link";

import AddCart from "@mui/icons-material/ShoppingCart";

function Index() {


  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.navigationContainer}>
            <Link href="/" className={styles.eachLink}>
              Home
            </Link>
            <Link href="/" className={styles.eachLink}>
              MEN
            </Link>
            <Link href="/" className={styles.eachLink}>
              WOMEN
            </Link>
            <Link href="/" className={styles.eachLink}>
              Contact
            </Link>
            <Link href="/" className={styles.eachLink}>
              Contact
            </Link>
          </div>

          <div className={styles.addCart}>
            <AddCart className={styles.cartIcon} />
            <div className={styles.cartText}>
              <p>Cart</p>
              <p>[0]</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
