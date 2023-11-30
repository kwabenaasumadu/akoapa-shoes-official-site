import React, { useState, useEffect } from "react";
import styles from "../../styles/user_login.module.css";
import Link from "next/link";
import {auth} from '../../../firebase.config'
import { createUserWithEmailAndPassword } from "firebase/auth";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sigUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
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
          <p>Create account</p>
          <Link href="/user_login">Sign In</Link>
        </div>
      </div>
    </>
  );
}

export default Index;
