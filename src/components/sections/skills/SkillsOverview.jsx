import React from 'react'
import { motion } from 'framer-motion'
import { skillsSummary } from '@data/skills'

function SkillsOverview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white dark:bg-dark-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Skills
          {' '}
          <span className="text-primary-500">Overview</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsSummary.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 hover:transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 text-primary-500">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-dark-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default SkillsOverview
