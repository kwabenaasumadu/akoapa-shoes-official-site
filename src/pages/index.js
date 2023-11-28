import React from "react";
import styles from "../styles/Home.module.css";
import FirstHeader from "../pages/firstHeader";
import NavigationBar from "../pages/navigation-bar";
import ThirdHeader from "../pages/third_Header";
import ShowCase from "../pages/showcase";
import Categories from "../pages/categories";
import NewArrivals from "../pages/new_Arrivals";
import Feedback from "../pages/feedback";
import AboutUs from "../pages/about-us";
import Services from "./services";
import Head from "next/head";
import Footer from '../pages/footer'

function Index() {
  return (
    <>
      <Head>
      
          <title>Akoapa Shoes</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
     
      </Head>

      <div className={styles.body}>
        <div className={styles.firstHeader_Navigation}>
        </div>
        <ThirdHeader />

        <ShowCase />
        <Categories />
        <Services />
        <NewArrivals />
        <Feedback />
        <AboutUs />
        <Footer/>
      </div>
    </>
  );
}

export default Index;
