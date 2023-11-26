import React from "react";
import styles from "../../styles/showcase.module.css";
import Image from "next/image";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.showcaseText}>
            <div className={styles.firstText}>
              <p>Walk the Talk</p>
            </div>

            <div className={styles.secondText}>
              <h1>Elevate Your Style with Our Shoe Collection</h1>
            </div>

            <div className={styles.thirdText}>
              <p>
                Step into style at Akoapa Shoes. Discover the perfect fusion of
                fashion and comfort with our curated collection of trendsetting
                shoes. Elevate your every step and make a statement with our
                diverse range of footwear. Welcome to a world where fashion
                meets function effortlessly. Start your stylish journey today!
              </p>
            </div>

            <div className={styles.callToAction}>
              <div className={styles.buttons}>
                <button>Shop Now</button>
                <button>Lets Talk</button>
              </div>
            </div>
          </div>

          <div className={styles.imageAnimationContainer}>
            <div className={styles.image}>
              <Image
                src="/image.png"
                height={100}
                width={100}
                alt="first_image"
                className={styles.showImage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
