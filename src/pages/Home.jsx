import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@components/sections/Hero'
import AboutSummary from '@components/sections/AboutSummary'
import SkillsPreview from '@components/sections/SkillsPreview'
import FeaturedProjects from '@components/sections/FeaturedProjects'
import Stats from '@components/sections/Stats'

function Home() {
  return (
    <div className="bg-light-50 dark:bg-dark-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-primary-100/10 dark:from-dark-800/90 dark:to-dark-900/80 z-0" />
        <div className="absolute inset-0 bg-[url('@assets/images/pattern-light.svg')] dark:bg-[url('@assets/images/pattern-dark.svg')] bg-fixed opacity-10 dark:opacity-5 z-0" />

        <Hero />
      </section>

      {/* About Summary */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white dark:bg-dark-800"
      >
        <AboutSummary />
      </motion.section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-dark-700 dark:to-dark-800">
        <Stats />
      </section>

      {/* Skills Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white dark:bg-dark-800"
      >
        <SkillsPreview />
      </motion.section>

      {/* Featured Projects */}
      <section className="py-20 bg-light-100 dark:bg-dark-900">
        <FeaturedProjects />
      </section>
    </div>
  )
}

export default Home
