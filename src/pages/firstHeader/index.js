import React from "react";
import styles from "../../styles/first-Header.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import Twitter from '@mui/icons-material/Twitter'

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          <div className={styles.icon}>
            <FacebookIcon className={styles.theIcon} />
          </div>
          <div className={styles.icon}>
            <LinkedInIcon className={styles.theIcon}  />
          </div>
          <div className={styles.icon}>
            <WhatsAppIcon className={styles.theIcon}  />
          </div>
          <div className={styles.icon}>
            <Twitter className={styles.theIcon}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
