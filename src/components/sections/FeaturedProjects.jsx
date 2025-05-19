import React from 'react'
import { motion } from 'framer-motion'
import { featuredProjects } from '@data/projects'

function FeaturedProjects() {
  console.log('Featured Projects:', featuredProjects)
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-dark-900 dark:text-white">
        Featured
        {' '}
        <span className="text-primary-500">Projects</span>
      </h2>
      <p className="text-center text-dark-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        A selection of my best work showcasing different skills and technologies
      </p>

      <div className="grid grid-cols-1 gap-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white dark:bg-dark-700 rounded-xl shadow-soft-lg overflow-hidden ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex flex-col md:flex-row hover:shadow-glow transition-all`}
          >
            <div className="md:w-1/2 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold mb-2 text-dark-900 dark:text-white">{project.title}</h3>
              <p className="text-dark-600 dark:text-gray-300 mb-4">{project.long_description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-light-100 dark:bg-dark-600 rounded-full text-sm text-dark-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-dark-800 text-white rounded-lg hover:bg-dark-700 transition flex items-center shadow-soft hover:shadow-glow"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-500 text-dark-900 rounded-lg hover:bg-primary-600 transition flex items-center shadow-soft hover:shadow-glow"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
