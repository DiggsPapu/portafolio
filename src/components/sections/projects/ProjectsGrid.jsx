import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../../data/projects'

function ProjectsGrid({ filter, onProjectSelect }) {
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.tags.includes(filter))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() => onProjectSelect(project)}
          className="relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer group"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />

          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-gray-300 mb-3 line-clamp-2">{project.shortDescription}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-800 bg-opacity-70 text-white text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectsGrid
