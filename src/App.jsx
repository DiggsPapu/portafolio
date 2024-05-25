import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import NavBar from './components/navbar/navbar'
import './App.css'
import AboutMe from './pages/aboutMe/aboutMe'

function App() {
  return (

    <>
      {/* <header style={{
        width: '100%', height: 'fit-content', position: 'fixed', top: '0', left: '0', zIndex: '100',
      }}
      >
        <NavBar />
      </header> */}
      <Routes>
        <Route
          path="/portafolio/"
          element={<MainPage />}
        />
      </Routes>
      <Routes>
        <Route
          path="/portafolio/AboutMe/"
          element={<AboutMe />}
        />
      </Routes>

    </>
  )
}

export default App
