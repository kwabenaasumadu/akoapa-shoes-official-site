"use client"

import React from "react";
import styles from "../../styles/about-us.module.css";
import Image from "next/image";

function index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.aboutImage}>
            <Image
              width={100}
              height={100}
              alt="about_image"
              src="/image20.jpg"
              className={styles.aboutImg}
            />
          </div>

          <div className={styles.aboutTextContainer}>
            <div className={styles.aboutHeader}>
              <h1>About Us</h1>
            </div>

            <div className={styles.aboutMainText}>
              <p>
                Designed with educators and administrators in mind, our system
                ensures a user-friendly experience, reducing the learning curve
                Designed with educators and administrators in mind, our system
                ensures a user-friendly experience, reducing the learning curve
                Designed with educators and administrators in mind, our system
                ensures a user-friendly experience, reducing the learning curve
                Designed with educators and administrators in mind, our system
                ensures a user-friendly experience, reducing the learning curve
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
