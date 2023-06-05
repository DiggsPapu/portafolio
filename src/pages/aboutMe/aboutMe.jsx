import React from 'react'
import styles from './aboutMe.module.css'
import CardOuter from '../../components/cardOuter/cardOuter'
import Dropdown from '../../components/dropdown/dropdown'

export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <h1 className={styles.title}>Who am I?</h1>
      <div className={styles.trajectory}>
        <h2 className={styles.h2}>
          My trayectory
        </h2>
        <div className={styles.cardOuter}>
          <CardOuter color="black" backgroundColorTitle="rgb(230, 198, 18)" color1="black" backgroundColorInfo="white" title="Liceo Javier" information="Even though I was not the best in class, I've never failed in one and I got really good grades, also I participated in extracurricular activies and I've won some medals in swimming and running." />
          <CardOuter backgroundColorTitle="rgba(100,33,255,255)" color="white" backgroundColorInfo="white" color1="black" title="UVG" information="I entered to chemistry in 2020, and even though I like it, I couldn't see me in a Laboratory while those practices entered on. That's why I change career and since 2022 I have been learning coding." />
          <CardOuter color="black" backgroundColorTitle="rgb(255, 217, 0)" color1="black" backgroundColorInfo="white" title="Work" information="In chemistry I entered in a lab and I started doing practices, then I entered in Level Up in 2022 and started learning flutter, right now I am working in a company solving backend and database problems." />
        </div>
      </div>
      <div className={styles.goals}>
        <h2 className={styles.h2}>
          Goals
        </h2>

        <ul>
          <Dropdown
            title="Personal Goals"
            subtitle=""
            values={['Finish learning guitar', 'Going to the gym', 'Finding balnce between work and personal life', 'Making the Atletico De Madrid club a Champions winner']}
            extra=""
          />

          <Dropdown
            title="Profesional Goals"
            subtitle=""
            values={['Finish the university and graduating', 'Continue studying and working', 'Learning about IA', 'Make an entrepreneurship']}
            extra=""
          />
        </ul>
        <div className={styles.hobbies} />
        <h2 className={styles.h2}>Hobbies</h2>
        <div className={styles.hob}>
          <ul>
            <li>Chess</li>
            <li>Swimming</li>
            <li>Gym</li>
            <li>Hanging out</li>
            <li>Playing videogames</li>
            <li>Playing soccer</li>
            <li>Playing board games in general</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
