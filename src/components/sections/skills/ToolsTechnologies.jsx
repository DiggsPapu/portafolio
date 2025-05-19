import React from 'react'
import { motion } from 'framer-motion'
import { toolsTechnologies } from '../../../data/skills'

function ToolsTechnologies() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tools &
          {' '}
          <span className="text-yellow-500">Technologies</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {toolsTechnologies.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition group"
            >
              <div className="text-4xl mb-3 group-hover:text-yellow-500 transition">
                {tool.icon}
              </div>
              <h3 className="font-medium text-center">{tool.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                {tool.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ToolsTechnologies
