import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectsGrid from '@components/sections/projects/ProjectsGrid'
import ProjectCategories from '@components/sections/projects/ProjectCategories'
import ProjectModal from '@components/sections/projects/ProjectModal'

function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="py-12">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            My
            {' '}
            <span className="text-yellow-500">Projects</span>
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            A collection of my work across different technologies and domains
          </p>

          <ProjectCategories filter={filter} setFilter={setFilter} />

          <ProjectsGrid
            filter={filter}
            onProjectSelect={setSelectedProject}
          />
        </div>
      </motion.section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default Projects
