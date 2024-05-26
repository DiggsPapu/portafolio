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
import Table from '../../components/Table'

export default function MainPage() {
  const information = `
  Hi, my name is Diego or Andrés. I am a software engineer that I am currently on my 4th year in college, 
  I have been working professionally for a year and 've been helping businesses to deal with their data, front and backend
  handling. I am currently as an Appentice of Mcdonald's Mesoamerica and giving support on saturdays in All Data, also
  learning Databricks, Machine Learning and AI.
  `
  const programmingLanguages = [{ link: 'https://en.wikipedia.org/wiki/C_(programming_language)', src: CL, alt: 'C language' }, { link: 'https://cplusplus.com/', src: CPP, alt: 'CPP language' }, { link: 'https://dart.dev/', src: Dart, alt: 'Dart language' }, { link: 'https://www.java.com/en/', src: Java, alt: 'Java language' }, { link: 'https://www.javascript.com/', src: JS, alt: 'JS language' }, { link: 'https://www.python.org/', src: Python, alt: 'Python language' }, { link: 'https://www.r-project.org/', src: RL, alt: 'R language' }, { link: 'https://www.oracle.com/database/technologies/appdev/plsql.html', src: plsql, alt: 'PLSQL language' },
  ]
  const fullStackTools = [{ link: 'https://html.com/', src: html, alt: 'html language' }, { link: 'https://css-tricks.com/', src: Css, alt: 'css language' }, { link: 'https://react.dev/', src: react, alt: 'React Framework' }, { link: 'https://angular.dev/', src: angular, alt: 'Angular Framework' }, { link: 'https://nodejs.org/en', src: node, alt: 'Node Environment' }, { link: 'https://www.postman.com/', src: postman, alt: 'Postman API Handling' }, { link: 'https://flutter.dev/', src: flutter, alt: 'Flutter Framework' },
  ]
  const dataBases = [{ link: 'https://www.oracle.com/', src: oracle, alt: 'Oracle DB' }, { link: 'https://www.postgresql.org/', src: postgres, alt: 'postgres DB' }, { link: 'https://www.mongodb.com/', src: mongo, alt: 'mongodb' }, { link: 'https://neo4j.com/', src: neo4j, alt: 'Neo4j' },
  ]
  const BI = [{ link: 'https://jupyter.org/', src: jupyter, alt: 'Jupyter Notebooks' }, { link: 'https://databricks.com', src: databricks, alt: 'Databricks Platform' },
  ]
  const environments = [{ link: 'https://www.docker.com/', src: docker, alt: 'Docker' }, { link: 'https://www.virtualbox.org/', src: virtualbox, alt: 'VirtualBox' }, { link: 'https://www.linux.org/', src: linux, alt: 'Linux OS' },
  ]
  const quote = 'The technology you use impresses no one. The experience you create with it is everything'
  return (
    <div className={styles.mainPage}>
      <div className={styles.presentation}>
        <h1 style={{ fontFamily: 'BillionDreams', color: 'rgb(255, 185, 11, 1)' }}>DiggsPapu</h1>
        <h4 style={{ fontSize: '3vw' }}>Software Engineer | AI Learner | Night Photographer</h4>
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
      <div className={styles.techSection}>
        <div className={styles.techDiv}>
          <h2 style={{
            width: '100%', height: 'auto', alignContent: 'center', fontSize: '5vw',
          }}
          >
            Technologies
          </h2>
          <em>
            <h3 style={{
              fontFamily: 'RobotoRegular', height: 'auto', alignContent: 'center', fontSize: '2vw',
            }}
            >
              &quot;
              {quote}
              &quot;
            </h3>
          </em>
        </div>
        <div className={styles.techDiv}>
          <h4 style={{ fontSize: '2vw' }}>Programming Languages</h4>
          <Table tableItems={programmingLanguages} />
          <h4 style={{ fontSize: '2vw' }}>FullStack Development</h4>
          <Table tableItems={fullStackTools} />
          <h4 style={{ fontSize: '2vw' }}>Database</h4>
          <Table tableItems={dataBases} />
          <h4 style={{ fontSize: '2vw' }}>Business Intelligence</h4>
          <Table tableItems={BI} />
          <h4 style={{ fontSize: '2vw' }}>Environments & Version Handling</h4>
          <Table tableItems={environments} />
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
