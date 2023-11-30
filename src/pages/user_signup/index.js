import React, { useState, useEffect } from "react";
import styles from "../../styles/user_login.module.css";
import Link from "next/link";
import {auth} from '../../../firebase.config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const sigUp = async (e) => {
   e.preventDefault();
   try {
     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     console.log(userCredential);
     router.push('/')
   } catch (error) {
     console.error(error);
   }
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
          <p>Sign In</p>
          <Link href="/user_login">Sign In</Link>
        </div>
      </div>
    </>
  );
}

export default Index;
