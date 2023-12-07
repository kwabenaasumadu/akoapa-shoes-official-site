import React, { useState } from "react";
import styles from "../../styles/user_login.module.css";
import Link from "next/link";
import { auth } from "../../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const sigUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      // Show success toast
      toast.success("Account created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Redirect to home page
      router.push("/");
    } catch (error) {
      console.error(error);

      // Show error toast
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
     <Head>
          <title>Sign up - Akoapa Shoes</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
      </Head>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <p>Register</p>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={sigUp}>
            <div className={styles.inputFields}>
              <input
                placeholder="user email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="user password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className={styles.signInBtn}>
                <button type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.signUp}>
          <p>Sign In</p>
          <Link href="/user_login">Sign In</Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Index;
