import React, { useState, useEffect } from "react";
import styles from "../../styles/new_arrivals.module.css";
import Image from "next/image";
import Star from "@mui/icons-material/Star";
import {
  getStorage,
  ref as storageRef,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import firebase from "../../../firebase.config";
import Modal from "react-modal";

function Index() {
  const [newArrivalsImages, setNewArrivalsImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchNewArrivalsImages = async () => {
      const storage = getStorage(firebase);
      const storageRefSlippers = storageRef(storage, "half_shoe");
      const imagesList = await listAll(storageRefSlippers);

      const imageURLs = await Promise.all(
        imagesList.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        })
      );

      setNewArrivalsImages(imageURLs);
    };

    fetchNewArrivalsImages();
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
  const currentItems = newArrivalsImages.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Check if slippersImages array is empty and update isLoading state
    if (newArrivalsImages.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [newArrivalsImages]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>New Arrivals</h1>
        </div>
        <div className={styles.containerItems}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            currentItems.map((image, index) => (
              <div
                key={index}
                className={styles.item}
                onClick={() => openModal(image)}
              >
                <div className={styles.itemImage}>
                  <Image
                    src={image}
                    width={300}
                    height={300}
                    alt={`item${index}`}
                    className={styles.itemImg}
                  />
                </div>

                <div className={styles.itemText}>
                  <p>
                    <Star /> <Star /> <Star /> <Star />{" "}
                  </p>
                </div>
              </div>
            ))
          )}
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
