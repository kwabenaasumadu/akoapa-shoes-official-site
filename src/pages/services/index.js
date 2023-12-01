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
                For our global customers, we extend our shipping services beyond borders. Wherever you are, we aim to bring our quality products to your doorstep
                </p>
              </div>
            </div>


            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <h1>Customer Care</h1>
              </div>

              <div className={styles.boxText}>
                <p>
                Our customer care team is here to assist you at every stage. If you have any questions regarding your order, shipping details, or need further assistance, don&apos;t hesitate to reach out to our dedicated support team.
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.boxHeader}>
                <h1>Secure Payment</h1>
              </div>

              <div className={styles.boxText}>
                <p>
                Your security is paramount, especially when it comes to online transactions. We offer secure payment options, providing you with peace of mind while making your purchase. 
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
