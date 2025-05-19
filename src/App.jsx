import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '@components/navbar/navbar'
// import Footer from './components/layouts/Footer'
import './App.css'
import Home from '@pages/Home'
import About from '@pages/About'
import Experience from '@pages/Experience'
import Projects from '@pages/Projects'
import Contact from '@pages/Contact'
import Skills from '@pages/Skills'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <NavBar />

      <main className="container mx-auto px-4 py-20">
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            <Route path="/portafolio/" element={<Home />} />
            <Route path="/portafolio/about" element={<About />} />
            <Route path="/portafolio/experience" element={<Experience />} />
            <Route path="/portafolio/projects" element={<Projects />} />
            <Route path="/portafolio/contact" element={<Contact />} />
            <Route path="/portafolio/skills" element={<Skills />} />
          </Routes>
        </Suspense>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default App
