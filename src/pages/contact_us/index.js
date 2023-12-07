import React from "react";
import styles from "../../styles/contact_us.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from '@mui/icons-material/Email'
import WhatsApp from "@mui/icons-material/WhatsApp";
import Twitter from "@mui/icons-material/Twitter";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Contact Us</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.item}>
            <PhoneIcon />
            <p>+233597063145</p>
          </div>

          <div className={styles.item}>
            <EmailIcon />
            <p>simonopoku88@gmail.com</p>
          </div>

          <div className={styles.item}>
            <WhatsApp />
            <p>+233597063145</p>
          </div>

          <div className={styles.item}>
            <Twitter />
            <p>simon</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
