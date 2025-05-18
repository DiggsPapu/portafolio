import React from 'react'
import { motion } from 'framer-motion'
import ExperienceTimeline from '@components/sections/experience/ExperienceTimeline'
import SkillsProficiency from '@components/sections/experience/SkillsProficiency'
import Certifications from '@components/sections/experience/Certifications'

function Experience() {
  return (
    <div className="space-y-20 py-12">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Professional
            {' '}
            <span className="text-yellow-500">Journey</span>
          </h1>

          <ExperienceTimeline />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SkillsProficiency />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Certifications />
      </motion.section>
    </div>
  )
}

export default Experience
