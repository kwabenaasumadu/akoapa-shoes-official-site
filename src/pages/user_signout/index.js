import React from "react";
import styles from "../../styles/user_login.module.css";
import { auth } from "../../../firebase.config";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log("User logged out successfully!");

      router.push("/user_login");
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <>
     <Head>
          <title>Sign out - Akoapa shoes</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
      </Head>

      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <p>Are you sure?</p>
        </div>

        <div className={styles.signInBtn}>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Index;
