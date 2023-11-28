import React, { useState, useEffect } from "react";
import styles from "../../styles/various_shoes.module.css";
import Image from "next/image";
import { getStorage, ref as storageRef, listAll, getDownloadURL } from "firebase/storage";
import firebase from '../../../firebase.config';
import Modal from "react-modal";

function Index() {
  const [slippersImages, setSlippersImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchSlippersImages = async () => {
      const storage = getStorage(firebase);
      const storageRefSlippers = storageRef(storage, "half_shoe");
      const imagesList = await listAll(storageRefSlippers);

      const imageURLs = await Promise.all(
        imagesList.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        })
      );

      setSlippersImages(imageURLs);
    };

    fetchSlippersImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = slippersImages.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Half Shoe</h1>
        </div>

        <div className={styles.cateContainer}>
          <div className={styles.boxes}>
            {currentItems.map((imageUrl, index) => (
              <div className={styles.box} key={index} onClick={() => openModal(imageUrl)}>
                <div className={styles.cateImage}>
                  <Image
                    src={imageUrl}
                    width={400}
                    height={400}
                    alt={`Slippers Image ${index + 1}`}
                    className={styles.image}
                  />
                </div>
                <div className={styles.catName}>
                  <h1>Half Shoe - {index + 1}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.pagination}>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>
          Next
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modalOverlay}
        overlayClassName={styles.modalOverlay}
      >
        {selectedImage && (
          <div className={styles.modalContent}>
            <Image
              src={selectedImage}
              width={500}
              height={500}
              alt="Selected Slippers Image"
              className={styles.modalImage}
            />
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Index;
