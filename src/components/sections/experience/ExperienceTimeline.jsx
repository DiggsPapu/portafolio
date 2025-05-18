import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { experiences } from '@data/experience'

function ExperienceTimeline() {
  const [activeExp, setActiveExp] = useState(0)

  return (
    <div className="relative max-w-4xl mx-auto my-12">
      {/* Timeline line */}
      <div className="absolute left-1/2 w-1 h-full bg-yellow-400 transform -translate-x-1/2" />

      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`relative mb-8 ${index % 2 === 0 ? 'pr-8 text-right left-timeline' : 'pl-8 text-left right-timeline'}`}
          onClick={() => setActiveExp(index)}
        >
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
              activeExp === index
                ? 'bg-yellow-400 scale-105 text-black'
                : 'bg-gray-800 hover:bg-gray-700 text-white'
            }`}
          >
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <h4 className="text-lg">{exp.company}</h4>
            <p className="text-sm">{exp.duration}</p>
          </motion.div>

          {activeExp === index && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 p-6 bg-white text-black rounded-lg shadow-lg ${
                index % 2 === 0 ? 'mr-8' : 'ml-8'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">Responsibilities & Achievements</h3>
              <ul className="list-disc pl-5">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
              {exp.technologies && (
                <>
                  <h4 className="font-bold mt-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ExperienceTimeline
