import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@components/sections/contact/ContactForm'
import ContactInfo from '@components/sections/contact/ContactInfo'
import MapLocation from '@components/sections/contact/MapLocation'

function Contact() {
  return (
    <div className="space-y-20 py-12">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Get In
            {' '}
            <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <MapLocation />
      </motion.section>
    </div>
  )
}

export default Contact
