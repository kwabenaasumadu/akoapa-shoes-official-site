import React from "react";
import styles from "../../styles/footer.module.css";
import Phone from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsApp from "@mui/icons-material/WhatsApp";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <h1>Akoapa Shoes </h1>
            </div>

            <div className={styles.columnBody}>
              <p>Welcome to Akoapa Shoes, your quality shoes for sales</p>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <h1>Menu </h1>
            </div>

            <div className={styles.columnBody}>
              <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <h1>Help </h1>
            </div>

            <div className={styles.columnBody}>
              <ul>
                <li>Shipping Information</li>
                <li>Return & Exchange</li>
                <li>Terms & Conditions</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <h1>Have a question </h1>
            </div>

            <div className={styles.columnBody}>
              <ul>
                <li>
                  <Phone /> +233 597063145
                </li>
                <li>
                  <EmailIcon /> kwabenasakyi450@gmail.com
                </li>

                <li>
                  <WhatsApp /> +233 500976882
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.lastPart}>
          <p>
            &copy; {new Date().getFullYear()} Akoapa Shoes. All Rights
            Reserved.
          </p>
        </div>
        
      </div>
    </>
  );
}

export default Index;
