import React from "react";
import styles from "../../styles/services.module.css";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.containerHeader}>
            <h1>Services</h1>
          </div>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <h1>Shipping</h1>
              </div>

              <div className={styles.boxText}>
                <p>
                  Designed with educators and administrators in mind, our system
                  ensures a user-friendly experience, reducing the learning
                  curve
                </p>
              </div>
            </div>


            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <h1>Customer Care</h1>
              </div>

              <div className={styles.boxText}>
                <p>
                  Designed with educators and administrators in mind, our system
                  ensures a user-friendly experience, reducing the learning
                  curve
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <h1>Secure Payment</h1>
              </div>

              <div className={styles.boxText}>
                <p>
                  Designed with educators and administrators in mind, our system
                  ensures a user-friendly experience, reducing the learning
                  curve
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
