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
      <div className={styles.presentation}>
        <h1 style={{ fontFamily: 'BillionDreams', color: 'rgb(255, 185, 11, 1)', fontSize: '50vh' }}>DiggsPapu</h1>
        <h4 style={{ fontSize: '5vh' }}>Software Engineer| AI Learner | Night Photographer</h4>
      </div>
      {/* About section */}
      <div className={styles.aboutSection}>
        {/* Profile picture section */}
        <img
          src={profilePicture}
          alt="PP"
          className={styles.profilePicture}
        />
        <div className={styles.about}>
          <div style={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: '10%',
          }}
          >
            <ColorChangeDiv title="+60 Repos" text="In Github" backgroundColor="rgb(255, 255, 200)" fontFamily="RobotoRegular" />
            <ColorChangeDiv title="+1 years" text="Of experience" backgroundColor="rgb(255, 255, 200)" fontFamily="RobotoRegular" />
            <ColorChangeDiv title="+160 contacts" text="On LinkedIn" backgroundColor="rgb(255, 255, 200)" fontFamily="RobotoRegular" />
          </div>
          <div style={{ marginBottom: '60%' }}>
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
      {/* Technologies Handled Section */}
      <div />
      {/* Projects Section */}
      <div>
        <h2>Projects</h2>
        <h3>Web-kind project</h3>
      </div>
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
