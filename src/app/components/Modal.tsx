import React from 'react'
import Image from 'next/image'
import styles from '../styles/Modal.module.scss'

interface ModalProps {
  imgSrc: string
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ imgSrc, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Image
          src={imgSrc}
          alt='Enlarged view'
          layout='responsive'
          width={800}
          height={600}
          className={styles.image}
        />
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default Modal
