import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function Hero() {
  const roles = [
    'AI/ML Explorer',
    2000,
    'Data Engineer',
    2000,
    'Data Science Enthusiast',
    2000,
    'CI/CD Noob',
    2000,
    'Software Engineer',
    2000,
    'Problem Solver',
    2000,
  ]

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-64 h-64 rounded-full bg-primary-400/10 dark:bg-primary-500/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-dark-900 dark:text-white"
        >
          Diego Andrés
          {' '}
          <span className="text-primary-500">Alonzo Medinilla</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-dark-700 dark:text-gray-300 mb-8 h-10"
        >
          <TypeAnimation
            sequence={roles}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-medium"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="btn-primary shadow-soft hover:shadow-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-outline border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 shadow-soft hover:shadow-glow"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
