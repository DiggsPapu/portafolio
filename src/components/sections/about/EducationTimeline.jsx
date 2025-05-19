import React from 'react'
import { motion } from 'framer-motion'
import { education } from '@data/education'

function EducationTimeline() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Education
          {' '}
          <span className="text-yellow-500">Timeline</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 h-full w-1 bg-yellow-400 transform -translate-x-1/2 md:left-1/2" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
            >
              <div className="absolute -left-2 top-4 w-4 h-4 bg-yellow-400 rounded-full md:left-1/2 md:-ml-2" />

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <h4 className="text-lg text-yellow-500">{edu.institution}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{edu.duration}</p>
                <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                {edu.gpa && (
            <p className="mt-2 font-medium">
                    GPA:
                    {edu.gpa}
                  </p>
            )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationTimeline
