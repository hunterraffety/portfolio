'use client'
// components/Gallery.tsx

import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Gallery.module.scss'
import Modal from './Modal'

interface GalleryProps {
  images: string[]
  title: string
}

const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (img: string) => {
    setSelectedImage(img)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>{title}</h2>
      <div className={styles.imageGrid}>
        {images.map((img, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => openModal(img)}
            role='button'
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') openModal(img)
            }}
          >
            <Image
              src={`/images/${title.toLowerCase()}/${img}`}
              alt={`${title} ${index + 1}`}
              layout='responsive'
              width={300}
              height={300}
              objectFit='cover' // Ensu
              className={styles.image}
              placeholder='blur'
              blurDataURL='/images/placeholder.png'
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal
          imgSrc={`/images/${title.toLowerCase()}/${selectedImage}`}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default Gallery
