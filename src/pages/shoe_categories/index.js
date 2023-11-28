import React from "react";
import styles from "../../styles/shoe_cat.module.css";
import Image from "next/image";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Shoe Categories</h1>
        </div>

        <div className={styles.cateContainer}>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.cateImage}>
                <Image
                  src="/image2.jpg"
                  width={400}
                  height={400}
                  alt="first categories"
                  className={styles.image}
                />
              </div>

              <div className={styles.catName}>
                <h1>Male Boots</h1>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.cateImage}>
                <Image
                  src="/image2.jpg"
                  width={400}
                  height={400}
                  alt="first categories"
                  className={styles.image}
                />
              </div>
              <div className={styles.catName}>
                <h1>Male Boots</h1>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.cateImage}>
                <Image
                  src="/image2.jpg"
                  width={400}
                  height={400}
                  alt="first categories"
                  className={styles.image}
                />
              </div>
              <div className={styles.catName}>
                <h1>Male Boots</h1>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.cateImage}>
                <Image
                  src="/image2.jpg"
                  width={400}
                  height={400}
                  alt="first categories"
                  className={styles.image}
                />
              </div>
              <div className={styles.catName}>
                <h1>Male Boots</h1>
              </div>
            </div>

            
            <div className={styles.box}>
              <div className={styles.cateImage}>
                <Image
                  src="/image2.jpg"
                  width={400}
                  height={400}
                  alt="first categories"
                  className={styles.image}
                />
              </div>
              <div className={styles.catName}>
                <h1>Male Boots</h1>
              </div>
            </div>

            
            <div className={styles.box}>
              <div className={styles.cateImage}>
                <Image
                  src="/image2.jpg"
                  width={400}
                  height={400}
                  alt="first categories"
                  className={styles.image}
                />
              </div>
              <div className={styles.catName}>
                <h1>Male Boots</h1>
              </div>
            </div>

            
            <div className={styles.box}>
              <div className={styles.cateImage}>
                <Image
                  src="/image2.jpg"
                  width={400}
                  height={400}
                  alt="first categories"
                  className={styles.image}
                />
              </div>
              <div className={styles.catName}>
                <h1>Male Boots</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
