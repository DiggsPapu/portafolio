import React from 'react'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.arrowLeftContainer}>
        <div className={styles.arrowLeft} />
        <div className={styles.tipLeftContainer}>
          <div className={styles.tipLeft} />
          <div className={styles.tipLeft} />
        </div>
      </div>
      <p>DiggsPapu</p>
      <div className={styles.arrowRightContainer}>
        <div className={styles.tipRightContainer}>
          <div className={styles.tipRight} />
          <div className={styles.tipRight} />
        </div>
        <div className={styles.arrowRight} />
      </div>
    </div>
  )
}
