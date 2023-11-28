import React from "react";
import styles from "../../styles/categories.module.css";
import Image from "next/image";

function index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Deal of the Month</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <Image
                src="/showcase1.png"
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
                src="/showcase3.png"
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
                src="/showcase5.png"
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

export default index;
