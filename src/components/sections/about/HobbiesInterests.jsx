import React from 'react'
import { motion } from 'framer-motion'

function HobbiesInterests() {
  const hobbies = [
    { name: 'Chess', icon: '♟️', description: 'Competitive player with tournament experience' },
    { name: 'Photography', icon: '📷', description: 'Night photography enthusiast' },
    { name: 'Swimming', icon: '🏊', description: 'Former competitive swimmer' },
    { name: 'Guitar', icon: '🎸', description: 'Self-taught guitarist' },
    { name: 'Hiking', icon: '🥾', description: 'Exploring Guatemala\'s beautiful landscapes' },
    { name: 'Reading', icon: '📚', description: 'Sci-fi and tech books lover' },
  ]

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          My
          {' '}
          <span className="text-yellow-500">Hobbies</span>
          {' '}
          & Interests
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-bold mb-2">{hobby.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HobbiesInterests
