import React from 'react'
import { motion } from 'framer-motion'
import SkillsOverview from '@components/sections/skills/SkillsOverview'
import SkillsProficiency from '@components/sections/skills/SkillsProficiency'
import SkillsCategories from '@components/sections/skills/SkillsCategories'
import ToolsTechnologies from '@components/sections/skills/ToolsTechnologies'

function Skills() {
  return (
    <div className="min-h-screen bg-gradient-light dark:bg-gradient-dark">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4 text-center bg-gradient-to-b from-primary-100/20 dark:from-primary-900/10 to-transparent"
      >
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          My
          {' '}
          <span className="text-primary-500 glow-text">Skills</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-dark-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Technologies and tools I've learned through practice, hard work, and rockn' roll.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a href="#proficiency" className="btn-primary">
            View Proficiency
          </a>
          <a href="#tools" className="btn-outline">
            Explore Tools
          </a>
        </motion.div>
      </motion.section>

      {/* Skills Overview */}
      <SkillsOverview />

      {/* Skills Proficiency */}
      <section id="proficiency" className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="section-title">
            Skill
            {' '}
            <span className="text-primary-500">Proficiency</span>
          </h2>
          <SkillsProficiency />
        </div>
      </section>

      {/* Skills by Category */}
      <section className="py-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title">
            Categorized
            {' '}
            <span className="text-primary-500">Skills</span>
          </h2>
          <SkillsCategories />
        </div>
      </section>

      {/* Tools & Technologies */}
      <section id="tools" className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="section-title">
            Tools &
            {' '}
            <span className="text-primary-500">Technologies</span>
          </h2>
          <ToolsTechnologies />
        </div>
      </section>
    </div>
  )
}

export default Skills
