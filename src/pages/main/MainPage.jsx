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
import CL from '../../assets/C.png'
import CPP from '../../assets/CPP.png'
import Dart from '../../assets/dart.png'
import Java from '../../assets/Java.png'
import JS from '../../assets/Javascript.png'
import Python from '../../assets/Python.png'
import RL from '../../assets/R.png'
import plsql from '../../assets/plsql.png'
import jupyter from '../../assets/jupyter.png'
import html from '../../assets/html.png'
import Css from '../../assets/Css.png'
import react from '../../assets/react.png'
import angular from '../../assets/angular.png'
import postman from '../../assets/postman.png'
import node from '../../assets/node.png'
import flutter from '../../assets/flutter.png'
import oracle from '../../assets/oracle.png'
import neo4j from '../../assets/neo4j.png'
import postgres from '../../assets/postgres.png'
import mongo from '../../assets/mongo.png'
import databricks from '../../assets/databricks.png'
import linux from '../../assets/linux.png'
import virtualbox from '../../assets/virtualbox.png'
import docker from '../../assets/docker.png'

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
        <h1 style={{ fontFamily: 'BillionDreams', color: 'rgb(255, 185, 11, 1)' }}>DiggsPapu</h1>
        <h4 style={{ fontSize: '3vw' }}>Software Engineer| AI Learner | Night Photographer</h4>
      </div>
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
            <a href="https://github.com/DiggsPapu">
              <ColorChangeDiv title="+60 Repos" text="In Github" backgroundColor="rgb(255, 255, 200)" fontFamily="RobotoRegular" />
            </a>
            <ColorChangeDiv title="+1 years" text="Of experience" backgroundColor="rgb(255, 255, 200)" fontFamily="RobotoRegular" />
            <a href="https://www.linkedin.com/in/diegoalonzomedinilladiggspapu/">
              <ColorChangeDiv title="+160 contacts" text="On LinkedIn" backgroundColor="rgb(255, 255, 200)" fontFamily="RobotoRegular" />
            </a>
          </div>
          <div className={styles.cardOuterD}>
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
      {/* Technologies */}
      <div>
      <h2>Technologies</h2>
        <div>
          <h4>Programming Languages</h4>
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
            <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
              <img src={CL} alt="C language" />
            </a>
            <a href="https://cplusplus.com/">
              <img src={CPP} alt="CPP language" />
            </a>
            <a href="https://dart.dev/">
              <img src={Dart} alt="Dart language" />
            </a>
            <a href="https://www.java.com/en/">
              <img src={Java} alt="Java language" />
            </a>
            <a href="https://www.javascript.com/">
              <img src={JS} alt="JS language" />
            </a>
            <a href="https://www.python.org/">
              <img src={Python} alt="Python language" />
            </a>
            <a href="https://www.r-project.org/">
              <img src={RL} alt="R language" />
            </a>
            <a href="https://www.oracle.com/database/technologies/appdev/plsql.html">
              <img src={plsql} alt="PLSQL language" />
            </a>
          </div>
          <h4>FullStack Development</h4>
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
            <a href="https://html.com/">
              <img src={html} alt="html language" />
            </a>
            <a href="https://css-tricks.com/">
              <img src={Css} alt="CSS language" />
            </a>
            <a href="https://react.dev/">
              <img src={react} alt="React Framework" />
            </a>
            <a href="https://angular.dev/">
              <img src={angular} alt="Angular Framework" />
            </a>
            <a href="https://nodejs.org/en">
              <img src={node} alt="Node Environment" />
            </a>
            <a href="https://www.postman.com/">
              <img src={postman} alt="Postman API Handling" />
            </a>
            <a href="https://flutter.dev/">
              <img src={flutter} alt="Flutter Framework" />
            </a>
          </div>
          <h4>Database</h4>
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
            <a href="https://html.com/">
              <img src={oracle} alt="Oracle DB" />
            </a>
            <a href="https://css-tricks.com/">
              <img src={postgres} alt="postgres DB" />
            </a>
            <a href="https://react.dev/">
              <img src={mongo} alt="mongodb" />
            </a>
            <a href="https://angular.dev/">
              <img src={neo4j} alt="Neo4j" />
            </a>
          </div>
          <h4>Business Intelligence</h4>
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
            <a href="https://jupyter.org/">
              <img src={jupyter} alt="Jupyter Notebooks" />
            </a>
            <a href="https://databricks.com">
              <img src={databricks} alt="Databricks Platform" />
            </a>
          </div>
          <h4>Environments & Version Handling</h4>
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
            <a href="https://jupyter.org/">
              <img src={docker} alt="Docker" />
            </a>
            <a href="https://databricks.com">
              <img src={virtualbox} alt="VirtualBox" />
            </a>
            <a href="https://css-tricks.com/">
              <img src={linux} alt="Linux OS" />
            </a>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div>
        <h2>Selected Projects</h2>
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

// About section
//       <div className={styles.aboutSection}>
//         {/* Profile picture section */}
//         <img
//           src={profilePicture}
//           alt="PP"
//           className={styles.profilePicture}
//         />
//         <div className={styles.about}>
//           <div style={{
//             width: '100%',
//             height: 'auto',
//             display: 'flex',
//             alignItems: 'center',
//             flexDirection: 'row',
//             justifyContent: 'space-evenly',
//             marginTop: '10%',
//           }}
//           >
//             <a href="https://github.com/DiggsPapu">
//               <ColorChangeDiv title="+60 Repos" text="In Github" backgroundColor="rgb(255, 255, 200)" fontFamily="RobotoRegular" />
//             </a>
//             <ColorChangeDiv title="+1 years" text="Of experience" backgroundColor="rgb(255, 255, 200)" fontFamily="RobotoRegular" />
//             <a href="https://www.linkedin.com/in/diegoalonzomedinilladiggspapu/">
//               <ColorChangeDiv title="+160 contacts" text="On LinkedIn" backgroundColor="rgb(255, 255, 200)" fontFamily="RobotoRegular" />
//             </a>
//           </div>
//           <div style={{ marginBottom: '60%' }}>
//             <CardOuter
//               color="black"
//               backgroundColorTitle="rgb(255, 255, 200)"
//               color1="white"
//               backgroundColorInfo="rgb(15, 19, 24)"
//               title="About"
//               information={information}
//             />
//           </div>
//         </div>
//       </div>
//       <div />
// {/* Technologies Handled Section */}
// <div>
//   <div>
//     <h2>Programming Languages</h2>
//   </div>
//   <div>
//     <h2>Frontend Development</h2>
//   </div>
//   <div>
//     <h2>Backend Development</h2>
//   </div>
//   <div>
//     <h2>Database</h2>
//   </div>
//   <div>
//     <h2>OS</h2>
//   </div>
