import React from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '@data/skills'

function SkillsPreview() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Technical
          {' '}
          <span className="text-yellow-500">Skills</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          The tools and technologies I use to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.slice(0, 6).map((skill) => (
              <span
                    key={skill.name}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
            ))}
                {category.skills.length > 6 && (
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                    +
                    {category.skills.length - 6}
                    {' '}
                    more
                  </span>
            )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsPreview
