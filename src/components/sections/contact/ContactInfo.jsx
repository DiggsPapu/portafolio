import React from 'react'
import { motion } from 'framer-motion'
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter,
} from 'react-icons/fi'

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-start">
        <div className="bg-yellow-400 p-3 rounded-full mr-4">
          <FiMail className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Email</h3>
          <a href="mailto:diggspapu@example.com" className="text-yellow-500 hover:underline">
            diggspapu@example.com
          </a>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-yellow-400 p-3 rounded-full mr-4">
          <FiPhone className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Phone</h3>
          <a href="tel:+50212345678" className="text-yellow-500 hover:underline">
            +502 1234 5678
          </a>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-yellow-400 p-3 rounded-full mr-4">
          <FiMapPin className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Location</h3>
          <p className="text-gray-600 dark:text-gray-300">Guatemala City, Guatemala</p>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
        <div className="flex gap-4">
          <a
            href="https://github.com/DiggsPapu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-black transition"
            aria-label="GitHub"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/diegoalonzomedinilladiggspapu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-black transition"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/DiggsPapu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-black transition"
            aria-label="Twitter"
          >
            <FiTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo
