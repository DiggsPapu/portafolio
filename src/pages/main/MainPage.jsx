import React from 'react'
import styles from './MainPage.module.css'
import CardOuter from '../../components/cardOuter/cardOuter'
import Lab6 from '../../assets/project3/lab6.png'
import Lab7 from '../../assets/project3/lab7.png'
import Lab8 from '../../assets/project3/lab8.png'
import Project1 from '../../assets/project3/project1.png'
import Project2 from '../../assets/project3/project2.png'
import LexYac from '../../assets/LexYac.png'
import Kera3 from '../../assets/Kera3.png'
import profilePicture from '../../assets/DiegoAlonzo.jpg'
import ColorChangeDiv from '../../components/ColorChangeDiv'

export default function MainPage() {
  const information = `
  Hi, my name is Diego or Andrés. I am a software engineer that I am currently on my 4th year in college, 
  I have been working professionally for a year and 've been helping businesses to deal with their data, front and backend
  handling. I am currently as an Appentice of Mcdonald's Mesoamerica and giving support on saturdays in All Data, also
  learning Databricks, Machine Learning and AI.
  `
  return (
    <div className={styles.mainPage}>
      <h1 style={{ fontFamily: 'BillionDreams', color: 'rgb(255, 185, 11, 1)', fontSize: '20rem' }}>DiggsPapu</h1>
      <h4>Software Engineer| AI Learner | Night Photographer</h4>
      {/* about section */}
      <div className={styles.aboutSection}>
        {/* Profile picture section */}
        <div style={{ margin: '0.2%', width: '90%', height: 'auto' }}>
          <img src={profilePicture} alt="PP" width="85%" height="auto" style={{ boxShadow: '10% 10% 10% grey' }} />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            marginRight: '10%',
          }}
        >
          <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '-10%',
            marginBottom: '10%',
          }}
          >
            <ColorChangeDiv title="+60 Repos" text="In Github" color="grey" />
            <div style={{
              backgroundColor: 'grey', padding: '1%', borderRadius: '10px', height: '100%',
            }}
            >
              <h3 style={{ color: 'black' }}>+1 years</h3>
              <h4 style={{ color: 'black' }}>Of experience</h4>
            </div>
            <div style={{
              backgroundColor: 'grey', padding: '1%', borderRadius: '10px', height: '100%',
            }}
            >
              <h3 style={{ color: 'black' }}>+60 repos</h3>
              <h4 style={{ color: 'black' }}>In Github</h4>
            </div>
            <div style={{
              backgroundColor: 'grey',
              padding: '1%',
              borderRadius: '10px',
              height: '100%',
            }}
            >
              <h3 style={{ color: 'black' }}>+160 contacts</h3>
              <h4 style={{ color: 'black' }}>In Linkedin</h4>
            </div>
          </div>
          {/* About me section */}
          <div style={{ marginBottom: '100%' }}>
            <CardOuter
              color="black"
              backgroundColorTitle="rgb(255, 255, 200)"
              color1="white"
              backgroundColorInfo="rgb(15, 19, 24)"
              title="About"
              information={information}
            />
          </div>
        </div>
      </div>
      <h2>My projects</h2>
      <h3>Web-kind project</h3>
      <div className={styles.imageBox}>
        <div className={styles.image}>
          <a href="https://diggspapu.github.io/lab6-web/"><img src={Lab6} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://diggspapu.github.io/lab7-web/"><img src={Lab7} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://diggspapu.github.io/lab8-web/"><img src={Lab8} alt="Labs" /></a>
        </div>
        <div className={styles.image}>
          <a href="https://diggspapu.github.io/project1-web"><img src={Project1} alt="Labs" /></a>
        </div>
      </div>
      <h3>Full-Stack Projects</h3>
      <div className={styles.imageBox}>
        <div className={styles.image}>
          <a href="https://diggspapu.github.io/project2-web/web-project2"><img src={Project2} alt="Labs" /></a>
          {/* <p>Project: learning angular</p> */}
        </div>
        <div className={styles.image}>
          <a href="https://diggspapu.github.io/Kera3/kera3"><img src={Kera3} alt="Project" /></a>
          {/* <p>Project: Kera3</p> */}
        </div>
        <div className={styles.image}>
          <a href="https://diggspapu.github.io/FrontendCompis/"><img src={LexYac} alt="Project" /></a>
          {/* <p>Project: Lex-Yacc</p> */}
        </div>
      </div>

    </div>
  )
}
