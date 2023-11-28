import React from "react";
import styles from "../../styles/showcase.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Index() {
  const textContent = (
    <>
      
      <div className={styles.secondText}>
        <h1>Elevate Your Style with Our Shoe Collection</h1>
      </div>
      <div className={styles.thirdText}>
        <p>
          Step into style at Akoapa Shoes. Discover the perfect fusion of
          fashion and comfort with our curated collection of trendsetting shoes.
        </p>
      </div>
      <div className={styles.callToAction}>
        <div className={styles.buttons}>
          <button>Shop Now</button>
          <button>Lets Talk</button>
        </div>
      </div>
    </>
  );

  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true, // Auto play the slides
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.showcaseText}>{textContent}</div>

          {/* Image slider */}
          <Slider {...imageSettings} className={styles.imageAnimationContainer}>
            <div className={styles.image}>
              <Image
                src="/image12-removebg-preview.png"
                height={400}
                width={400}
                alt="first_image"
                className={styles.showImage}
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/image14-removebg-preview.png"
                height={400}
                width={400}
                alt="second_image"
                className={styles.showImage}
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/image18-removebg-preview.png"
                height={400}
                width={400}
                alt="third_image"
                className={styles.showImage}
              />
            </div>

            <div className={styles.image}>
              <Image
                src="/image24-removebg.png"
                height={400}
                width={400}
                alt="third_image"
                className={styles.showImage}
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Index;
