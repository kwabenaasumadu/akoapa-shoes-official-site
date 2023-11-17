import React from "react";
import styles from '../styles/Home.module.css'
import FirstHeader from "../pages/firstHeader";
import NavigationBar from "../pages/navigation-bar";
import ShowCase from '../pages/showcase'
import AboutUs from '../pages/about-us'


function Index() {
  return (
    <>
      <div className={styles.body}>
        <FirstHeader />
        <NavigationBar />
        <ShowCase/>
        <AboutUs/>
      </div>
    </>
  );
}

export default Index;
