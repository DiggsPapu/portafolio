import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { number: 3, label: 'Years of Experience' },
  { number: 50, label: 'Projects Completed' },
  { number: 1000, label: 'Cups of Coffee' },
  { number: 10, label: 'Technologies Mastered' },
]

function Stats() {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">
                <CountUp end={stat.number} duration={3} />
                +
              </div>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
