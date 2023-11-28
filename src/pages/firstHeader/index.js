import React, { useState } from "react";
import styles from "../../styles/first-Header.module.css";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import Twitter from "@mui/icons-material/Twitter";

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
          <div className={styles.containerName}>
            <h1>Akoapa Shoes</h1>
          </div>

          <div
            className={styles.mobileNavigationContainer}
            onClick={isMobileOpen ? closeMobileNavLinks : openMobileNavLinks}
          >
            <MenuIcon className={styles.MenuIcon} />
          </div>

          {isMobileOpen && (
            <div
              className={`${styles.mobileNavigationLinks} ${
                isMobileOpen ? "active" : ""
              }`}
            >
              <div className={styles.link}>
                <Link href="/" className={styles.eachLink} onClick={closeMobileNavLinks}>
                  Home
                </Link>
                <Link href="/" className={styles.eachLink} onClick={closeMobileNavLinks}>
                  About
                </Link>
                <Link href="/shoe_categories/" className={styles.eachLink} onClick={closeMobileNavLinks}>
                  Categories
                </Link>
                <Link href="/" className={styles.eachLink} onClick={closeMobileNavLinks}>
                  Contact
                </Link>
              </div>
            </div>
          )}

          <div className={styles.searchContainer}>
            <input placeholder="search" />
            <div className={styles.SearchIconContainer}>
              <SearchIcon className={styles.SearchIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
