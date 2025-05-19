import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { number: 3, label: 'Years of Experience' },
  { number: 50, label: 'Projects Completed' },
  { number: 10, label: 'Technologies Mastered' },
  { number: 5, label: 'Happy Clients' },
]

function Stats() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm p-6 rounded-xl shadow-soft hover:shadow-glow transition-all"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-500">
              <CountUp end={stat.number} duration={3} />
              +
            </div>
            <p className="text-lg text-dark-700 dark:text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Stats
