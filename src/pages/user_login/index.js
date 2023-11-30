import React, { useState, useEffect } from "react";
import styles from "../../styles/user_login.module.css";
import Link from "next/link";
import { auth } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resetSuccessMessage, setResetSuccessMessage] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetSuccessMessage("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <p>Hi User</p>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={signIn}>
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
                <button type="submit">Log In</button>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.signUp}>
          <p>Create account</p>
          <Link href="/user_signup">Sign up</Link>
        </div>
      </div>
    </>
  );
}

export default Index;
