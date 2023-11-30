import React from "react";
import styles from "../../styles/user_login.module.css";
import { auth } from "../../../firebase.config";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");

      router.push("/user_login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <p>Are you sure?</p>
        </div>

        <div className={styles.signInBtn}>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Index;
