import React from 'react'
import { motion } from 'framer-motion'

function PersonalJourney() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="prose dark:prose-invert mx-auto"
      >
        <h2 className="text-center">My Personal Journey</h2>

        <p>
          Hello! I'm Diego Andrés Alonzo, a passionate software engineer based in Guatemala City.
          My journey in technology began when I was just a kid, fascinated by how computers work
          and eager to understand the magic behind the screen.
        </p>

        <p>
          I started my academic path in Chemistry, but soon realized my true passion was in solving
          problems through code. The transition to Computer Science was one of the best decisions
          I've made, as it allowed me to combine my analytical thinking with my creativity.
        </p>

        <p>
          What drives me is the endless potential of technology to transform lives and businesses.
          I'm particularly interested in data engineering and artificial intelligence, fields where
          I believe we're just scratching the surface of what's possible.
        </p>

        <p>
          When I'm not coding, you can find me playing chess, exploring night photography, or
          hiking in Guatemala's beautiful landscapes. I believe in continuous learning and pushing
          myself beyond my comfort zone, both professionally and personally.
        </p>

        <p className="font-bold text-yellow-500">
          "The technology you use impresses no one. The experience you create with it is everything."
        </p>
      </motion.div>
    </div>
  )
}

export default PersonalJourney
