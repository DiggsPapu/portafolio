// components/sections/Projects.jsx
import React, { useState } from 'react'
import projects from '@data/experience'

function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.tags.includes(filter))

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Featured Projects</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          A selection of my recent work across different technologies and domains
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['all', 'web', 'data', 'mobile', 'ai'].map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full capitalize ${
                filter === tag
                  ? 'bg-yellow-400 text-black font-bold'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity ${
        isHovered ? 'opacity-90' : 'opacity-70'
      }`}
      />

      {/* Content */}
      <div className={`absolute bottom-0 left-0 p-6 w-full transition-all ${
        isHovered ? 'translate-y-0' : 'translate-y-10'
      }`}
      >
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-gray-300 mb-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-800 bg-opacity-70 text-white text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition"
            >
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:bg-opacity-10 transition"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
