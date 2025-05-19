import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '@assets/DiegoAlonzo.jpg'

function AboutSummary() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-2/5"
        >
          <div className="relative group">
            <img
              src={profileImage}
              alt="Diego Andrés Alonzo Medinilla"
              className="w-full max-w-md rounded-2xl shadow-soft-lg transform group-hover:-translate-y-2 transition-all duration-500 border-4 border-white dark:border-dark-700"
            />
            <div className="absolute -inset-4 rounded-2xl border-2 border-primary-500/30 group-hover:border-primary-500/50 transition-all duration-500 -z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-3/5"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-900 dark:text-white">
            About
            {' '}
            <span className="text-primary-500">Me</span>
          </h2>

          <div className="prose prose-lg max-w-none text-dark-700 dark:text-gray-300">
            <p className="mb-4">
              I'm a passionate
              {' '}
              <strong className="text-primary-500">data engineer</strong>
              {' '}
              with expertise in data engineering and full-stack development.
              Currently in my last year of college, I've been working professionally for 3 years, helping
              businesses leverage their data and build robust applications.
            </p>

            <p className="mb-4">
              My journey in tech started with chemistry, but I quickly realized my true calling was 
              in technology. Since then, I've immersed myself in designing, structuring and building
              pipelines, databases and datawarehouses. I have knowledge in
              ETL's, ELT's, ensuring the best quality data possible with
              scalable architectures.
              Also I have experience in multiple programming languages,
              frameworks, and tools to become a
              {' '}
              <strong className="text-primary-500">versatile data engineer</strong>
              .
            </p>

            <p className="mb-6">
              Currently, I'm working as an
              {' '}
              <strong>Apprentice at McDonald's Mesoamerica</strong>
              {' '}
              while also providing
              weekend support at All Data. I'm constantly expanding my knowledge in
              {' '}
              <strong>
                Databricks,
                Machine Learning, and AI
              </strong>
              {' '}
              to stay at the forefront of technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-light-100 dark:bg-dark-700 p-4 rounded-lg border border-light-300 dark:border-dark-600">
                <h4 className="font-bold text-primary-500 mb-2">Personal Info:</h4>
                <ul className="space-y-1">
                  <li>
                    <strong>Name:</strong>
                    {' '}
                    Diego Andrés Alonzo
                  </li>
                  <li>
                    <strong>Location:</strong>
                    {' '}
                    Guatemala City
                  </li>
                  <li>
                    <strong>Email:</strong>
                    {' '}
                    diggspapu@example.com
                  </li>
                </ul>
              </div>

              <div className="bg-light-100 dark:bg-dark-700 p-4 rounded-lg border border-light-300 dark:border-dark-600">
                <h4 className="font-bold text-primary-500 mb-2">Professional:</h4>
                <ul className="space-y-1">
                  <li>
                    <strong>Experience:</strong>
                    {' '}
                    3+ Years
                  </li>
                  <li>
                    <strong>Education:</strong>
                    {' '}
                    Software Engineering
                  </li>
                  <li>
                    <strong>Availability:</strong>
                    {' '}
                    Open to opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSummary
