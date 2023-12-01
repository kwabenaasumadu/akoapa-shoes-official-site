import React from "react";
import styles from "../../styles/feedback.module.css";
import Image from "next/image";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Our satisfied customer says</h1>
        </div>

        <div className={styles.feedbackContainer}>
          <div className={styles.feedbackImage}>
            <Image
              width={100}
              height={100}
              alt="feedback_image"
              src="/showcase2.png"
              className={styles.userImage}
            />
          </div>

          <div className={styles.feedbackName}>
            <p>Kwabena Sakyi</p>
          </div>

          <div className={styles.feedbackMessage}>
            <p>
               
             Good and quality shoes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
