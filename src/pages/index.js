import React from "react";
import styles from "../styles/Home.module.css";
import FirstHeader from "../pages/firstHeader";
import NavigationBar from "../pages/navigation-bar";
import ShowCase from "../pages/showcase";
import AboutUs from "../pages/about-us";
import Services from './services'
import Head from "next/head";

function Index() {
  return (
    <>
   <Head>
        <head>
          <title>Akoapa Shoes</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
      </Head>
    
      <div className={styles.body}>
        <div className={styles.firstHeader_Navigation}>
          <FirstHeader />
          <NavigationBar />
        </div>
       
        <ShowCase/>
        <AboutUs/>
        <Services/>
      </div>
    </>
  );
}

export default Index;
