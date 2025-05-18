import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '@data/skills'

function SkillsProficiency() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical
          {' '}
          <span className="text-yellow-500">Proficiency</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">{skillCategory.category}</h3>

              <div className="space-y-4">
                {skillCategory.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}
                        %
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsProficiency
