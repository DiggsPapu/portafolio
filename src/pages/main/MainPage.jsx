import React from 'react'
import styles from './MainPage.module.css'
import Lab3 from '../../assets/project3/lab3.png'
import Lab4 from '../../assets/project3/lab4.png'
import Lab5 from '../../assets/project3/lab5.png'
import Lab6 from '../../assets/project3/lab6.png'
import Lab7 from '../../assets/project3/lab7.png'
import Lab8 from '../../assets/project3/lab8.png'
import Lab9 from '../../assets/project3/lab9.png'
import Project1 from '../../assets/project3/project1.png'
import Project2 from '../../assets/project3/project2.png'

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <h2>My projects</h2>
      <div className={styles.imageBox}>
        <div className={styles.image}>
          <a href="https://uvgenios.online/20172/lab3"><img src={Lab3} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://uvgenios.online/20172/lab4"><img src={Lab4} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://uvgenios.online/20172/lab5"><img src={Lab5} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://uvgenios.online/20172/lab6"><img src={Lab6} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://uvgenios.online/20172/lab7"><img src={Lab7} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://64609611446d775c8be23587--cerulean-sable-b9711b.netlify.app/"><img src={Lab8} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://uvgenios.online/20172/lab9"><img src={Lab9} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://uvgenios.online/20172/project1-web"><img src={Project1} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://deluxe-taiyaki-4e7e67.netlify.app"><img src={Project2} alt="Labs" /></a>
        </div>
      </div>
    </div>
  )
}
