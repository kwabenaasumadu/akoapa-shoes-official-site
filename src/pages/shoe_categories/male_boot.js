import React, { useState, useEffect } from "react";
import styles from "../../styles/various_shoes.module.css";
import Image from "next/image";
import {
  getStorage,
  ref as storageRef,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import firebase from "../../../firebase.config";
import Modal from "react-modal";

function Index() {
  const [slippersImages, setSlippersImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchSlippersImages = async () => {
      const storage = getStorage(firebase);
      const storageRefSlippers = storageRef(storage, "boots");
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

  useEffect(() => {
    // Check if slippersImages array is empty and update isLoading state
    if (slippersImages.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [slippersImages]);



  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Boots Both Men & Women</h1>
        </div>

        <div className={styles.cateContainer}>
          <div className={styles.boxes}>
            {currentItems.map((imageUrl, index) => (
              <div
                className={styles.box}
                key={index}
                onClick={() => openModal(imageUrl)}
              >
                <div className={styles.cateImage}>
                  <Image
                    src={imageUrl}
                    width={400}
                    height={400}
                    alt={`Boot Image ${index + 1}`}
                    className={styles.image}
                  />
                </div>
                <div className={styles.catName}>
                  <h1>Boot - {index + 1}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.pagination}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentItems.length < itemsPerPage}
        >
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
              alt="Selected Boot Image"
              className={styles.modalImage}
            />
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>

      {isLoading && (
        <div className={styles.isLoadingContainer}>
          <div className={styles.circle}></div>
          <h1 style={{ fontSize: "15px", fontWeight: "100px" }}>Loading...</h1>
        </div>
      )}
    </>
  );
}

export default Index;
