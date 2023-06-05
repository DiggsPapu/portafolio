import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import NavBar from './components/navbar/navbar'
import './App.css'

function App() {
  return (

    <>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route
          path="/home/"
          element={<MainPage />}
        />
      </Routes>

    </>
  )
}

export default App
