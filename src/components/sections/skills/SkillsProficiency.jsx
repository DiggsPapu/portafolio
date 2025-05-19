import React from 'react'
import { motion } from 'framer-motion'
import { topSkills } from '@data/skills'

function SkillsProficiency() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {topSkills.map((skill) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group"
        >
          <div className="flex justify-between mb-2">
            <span className="font-medium text-dark-800 dark:text-gray-200 group-hover:text-primary-500 transition">
              {skill.name}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {skill.level}
              %
            </span>
          </div>
          <div className="skill-bar">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-yellow-400 h-1.5 rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillsProficiency
