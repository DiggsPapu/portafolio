import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '../../../data/skills'

function SkillsCategories() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills by
          {' '}
          <span className="text-yellow-500">Category</span>
        </h2>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 rounded-lg transition ${
                activeCategory === index
                  ? 'bg-yellow-400 text-black font-bold'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <h3 className="font-medium">{skill.name}</h3>
              {skill.level && (
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-yellow-400 h-1.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default SkillsCategories
