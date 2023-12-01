import React from "react";
import styles from "../../styles/shoe_cat.module.css";
import Image from "next/image";
import Link from "next/link";

function Index() {
  return (
    <>
     <Head>
          <title>Categories - Akoapa Shoes</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
      </Head>

      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Shoe Categories</h1>
        </div>

        <div className={styles.cateContainer}>
          <div className={styles.boxes}>
            <Link
              href="/shoe_categories/half_shoes"
              style={{
                textDecoration: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >

              <div className={styles.box}>
                <div className={styles.cateImage}>
                  <Image
                    src="/image7.png"
                    width={400}
                    height={400}
                    alt="first categories"
                    className={styles.image}
                  />
                </div>

                <div className={styles.catName}>
                  <h1>Shop Half Shoes</h1>
                </div>
              </div>
            </Link>

            <Link
              href="/shoe_categories/male_boot"
              style={{
                textDecoration: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >
              <div className={styles.box}>
                <div className={styles.cateImage}>
                  <Image
                    src="/showcase4.png"
                    width={400}
                    height={400}
                    alt="first categories"
                    className={styles.image}
                  />
                </div>
                <div className={styles.catName}>
                  <h1>Men & Women Boots</h1>
                </div>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
