import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '@assets/DiegoAlonzo.jpg'

function AboutSummary() {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <img
              src={profileImage}
              alt="Diego Andrés Alonzo"
              className="w-full max-w-md rounded-lg shadow-xl mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <h2 className="text-3xl font-bold mb-6">
              About
              {' '}
              <span className="text-yellow-400">Me</span>
            </h2>

            <div className="prose prose-invert max-w-none">
              <p>
                I'm a passionate software engineer with expertise in full-stack development and data engineering.
                Currently in my 4th year of college, I've been working professionally for over a year, helping
                businesses leverage their data and build robust applications.
              </p>

              <p>
                My journey in tech started with chemistry, but I quickly realized my true calling was in
                technology. Since then, I've immersed myself in learning various programming languages,
                frameworks, and tools to become a versatile developer.
              </p>

              <p>
                Currently, I'm working as an Apprentice at McDonald's Mesoamerica while also providing
                weekend support at All Data. I'm constantly expanding my knowledge in Databricks,
                Machine Learning, and AI to stay at the forefront of technology.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
              <h4 className="font-bold text-yellow-400">Name:</h4>
              <p>Diego Andrés Alonzo Medinilla</p>
            </div>
                <div>
              <h4 className="font-bold text-yellow-400">Email:</h4>
              <p>diggspapu@example.com</p>
            </div>
                <div>
              <h4 className="font-bold text-yellow-400">From:</h4>
              <p>Guatemala City, Guatemala</p>
            </div>
                <div>
              <h4 className="font-bold text-yellow-400">Education:</h4>
              <p>4th Year Software Engineering</p>
            </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSummary
