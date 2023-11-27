"use client";

import React from "react";
import styles from "../../styles/about-us.module.css";
import Image from "next/image";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import  Instagram from "@mui/icons-material/Instagram";

function index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Follow Us</h1>
        </div>

        <div className={styles.socialHandles}>
          <div className={styles.socialmedia}>
            <div className={styles.socialmediaIcon}>
              <Facebook className={styles.icon1} />
            </div>

            <div className={styles.socialmediaName}>
              <h1>FaceBook</h1>
            </div>
          </div>

          <div className={styles.socialmedia}>
            <div className={styles.socialmediaIcon}>
              <LinkedIn className={styles.icon2}/>
            </div>

            <div className={styles.socialmediaName}>
              <h1>LinkedIn</h1>
            </div>
          </div>


          <div className={styles.socialmedia}>
            <div className={styles.socialmediaIcon}>
              <Twitter className={styles.icon3} />
            </div>

            <div className={styles.socialmediaName}>
              <h1>Twitter</h1>
            </div>
          </div>

          <div className={styles.socialmedia}>
            <div className={styles.socialmediaIcon}>
              <Instagram className={styles.icon4} />
            </div>

            <div className={styles.socialmediaName}>
              <h1>Instagram</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
