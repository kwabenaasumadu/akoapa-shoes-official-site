import React, { useState, useEffect } from "react";
import styles from "../../styles/navigation-bar.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

function Index() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function openMobileNavLinks() {
    setIsMobileOpen(true);
  }

  function closeMobileNavLinks() {
    setIsMobileOpen(false);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.companyName}>
            <h1>Akoapa shoes</h1>
          </div>

          <div className={styles.navigationContainer}>
            <div className={styles.link}>
              <Link href="/" className={styles.eachLink}>
                Home
              </Link>
              <Link href="/" className={styles.eachLink}>
                About
              </Link>
              <Link href="/" className={styles.eachLink}>
                Gallery
              </Link>
              <Link href="/" className={styles.eachLink}>
                Contact
              </Link>
            </div>
          </div>

          <div
            className={styles.mobileNavigationContainer}
            onClick={isMobileOpen ? closeMobileNavLinks : openMobileNavLinks}
          >
            <MenuIcon />
          </div>

          {isMobileOpen && (
            <div
              className={`${styles.mobileNavigationLinks} ${
                isMobileOpen ? "active" : ""
              }`}
            >
              <div className={styles.link}>
                <Link href="/" className={styles.eachLink}>
                  Mobile
                </Link>
                <Link href="/" className={styles.eachLink}>
                  About
                </Link>
                <Link href="/" className={styles.eachLink}>
                  Gallery
                </Link>
                <Link href="/" className={styles.eachLink}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
