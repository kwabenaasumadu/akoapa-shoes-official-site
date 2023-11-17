import React from "react";
import styles from '../styles/Home.module.css'
import FirstHeader from "../pages/firstHeader";
import NavigationBar from "../pages/navigation-bar";


function Index() {
  return (
    <>
      <div className={styles.body}>
        <FirstHeader />
        <NavigationBar />
      </div>
    </>
  );
}

export default Index;
