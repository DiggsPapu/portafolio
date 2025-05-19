import React from 'react'
import { motion } from 'framer-motion'
import PersonalJourney from '@components/sections/about/PersonalJourney'
import EducationTimeline from '@components/sections/about/EducationTimeline'
import HobbiesInterests from '@components/sections/about/HobbiesInterests'
import Testimonials from '@components/sections/about/Testimonials'

function About() {
  return (
    <div className="space-y-20 py-12">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About
            {' '}
            <span className="text-yellow-500">Me</span>
          </h1>

          <PersonalJourney />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <EducationTimeline />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <HobbiesInterests />
      </motion.section>

      {/* <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Testimonials />
      </motion.section> */}
    </div>
  )
}

export default About
