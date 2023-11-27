import React from "react";
import styles from "../../styles/new_arrivals.module.css";
import Image from "next/image";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>New Arrivals</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <Image
                src="/image18-removebg-preview.png"
                width={300}
                height={300}
                alt="item1"
                className={styles.itemImg}
              />
            </div>

            <div className={styles.itemText}>
              <p>Women Shoes </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImage}>
              <Image
                src="/image12-removebg-preview.png"
                width={300}
                height={300}
                alt="item1"
                className={styles.itemImg}
              />
            </div>

            <div className={styles.itemText}>
              <p>Sliipers Shoes </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImage}>
              <Image
                src="/image24-removebg.png"
                width={300}
                height={300}
                alt="item1"
                className={styles.itemImg}
              />
            </div>

            <div className={styles.itemText}>
              <p>Man Shoes </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
