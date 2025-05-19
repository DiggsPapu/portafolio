// components/sections/Skills.jsx
import React, { useState } from 'react'

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'JavaScript', level: 85, icon: '📜' },
      { name: 'Java', level: 80, icon: '☕' },
      { name: 'C++', level: 75, icon: '➕' },
      { name: 'R', level: 70, icon: '📊' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 85, icon: '⚛️' },
      { name: 'Angular', level: 75, icon: '🅰️' },
      { name: 'HTML/CSS', level: 90, icon: '🎨' },
      { name: 'Tailwind', level: 80, icon: '💨' },
    ],
  },
  // Add more categories
]

function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>

        {/* Category tabs */}
        <div className="flex justify-center mb-8">
          {skillCategories.map((category, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 mx-2 rounded-t-lg transition ${
                activeCategory === index
                  ? 'bg-yellow-400 text-black font-bold'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-yellow-400 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-right text-sm text-gray-300 mt-1">
                {skill.level}
                % proficiency
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
