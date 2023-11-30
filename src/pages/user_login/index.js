import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/user_login.module.css";
import Link from "next/link";
import { auth } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/router";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSuccessMessage, setResetSuccessMessage] = useState("");

  const router = useRouter();

  const signIn = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      router.push('/')
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetSuccessMessage("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
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
                <button type="submit" disabled={loading}>
                  {loading ? "Please wait..." : "Log In"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.signUp}>
          <p>Create account</p>
          <Link href="/user_signup">Sign up</Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Index;
