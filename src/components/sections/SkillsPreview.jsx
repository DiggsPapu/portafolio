import React from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '@data/skills'

function SkillsPreview() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-dark-900 dark:text-white">
        Technical
        {' '}
        <span className="text-primary-500">Skills</span>
      </h2>
      <p className="text-center text-dark-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        The tools and technologies I use to bring ideas to life
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skillCategories.slice(0, 3).map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-soft hover:shadow-glow transition-all border border-light-200 dark:border-dark-600"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-3 text-primary-500">{category.icon}</span>
              {category.name}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.slice(0, 6).map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 bg-light-100 dark:bg-dark-600 rounded-full text-sm text-dark-700 dark:text-gray-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <button className="mt-4 text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center">
              View all
              {' '}
              {category.name.toLowerCase()}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPreview
