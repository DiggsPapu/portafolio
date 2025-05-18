import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@components/sections/Hero'
import AboutSummary from '@components/sections/AboutSummary'
import SkillsPreview from '@components/sections/SkillsPreview'
import FeaturedProjects from '@components/sections/FeaturedProjects'
import Stats from '@components/sections/Stats'

function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <AboutSummary />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Stats />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        id="skills"
      >
        <SkillsPreview />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        id="projects"
      >
        <FeaturedProjects />
      </motion.section>
    </div>
  )
}

export default Home
