import React from "react";
import styles from "../../styles/first-Header.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import SignOut from "@mui/icons-material/LoginOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.leftItems}>
            <div className={styles.socialMediaHandles}>
              <div className={styles.socialMediaIcon}>
                <FacebookIcon />
              </div>
              <div className={styles.socialMediaIcon}>
                <WhatsAppIcon />
              </div>
              <div className={styles.socialMediaIcon}>
                <LinkedInIcon />
              </div>
            </div>

            <div className={styles.otherHandles}>
              <div className={styles.otherIcon}>
                <PhoneIcon className={styles.phoneIcon} />
                <p>+233 59706 3145</p>
              </div>

              <div className={styles.otherIcon}>
                <EmailIcon className={styles.emailIcon} />
                <p>kwabenasakyi450@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={styles.rightItems}>
            <div className={styles.signInBtn}>
              <PersonIcon />
              <button>Sign In</button>
            </div>

            <div className={styles.signUpBtn}>
              <SignOut />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
