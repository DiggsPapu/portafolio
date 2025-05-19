import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiGithub, FiLinkedin, FiMail, FiExternalLink,
} from 'react-icons/fi'

export default function NavBar() {
  const location = useLocation()
  const subject = 'Hi Diego'
  const body = 'I wanted to contact you for...'

  const contactOptions = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/diegoalonzomedinilladiggspapu',
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/DiggsPapu',
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: `mailto:diego.alonzom@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      icon: <FiMail className="w-5 h-5" />,
    },
  ]

  const pages = [
    { name: 'Home', path: '/portafolio' },
    { name: 'Projects', path: '/portafolio/projects' },
    { name: 'Experience', path: '/portafolio/experience' },
    { name: 'Skills', path: '/portafolio/skills' },
    { name: 'About', path: '/portafolio/about' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-dark-800/90 backdrop-blur-md border-b border-gray-200 dark:border-dark-700 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/portafolio/"
            className="flex items-center"
          >
            <span className="ml-2 text-xl font-bold text-dark-900 dark:text-white">
              Diggs
              <span className="text-primary-500">Papu</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {pages.map((page) => (
              <NavLink
                key={page.name}
                to={page.path}
                className={({ isActive }) => `
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${isActive
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                  }
                `}
              >
                {page.name}
              </NavLink>
            ))}

            {/* Contact Dropdown */}
            <div className="relative group ml-2">
              <button className="flex items-center px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-all shadow-md">
                Contact Me
                <FiExternalLink className="ml-2 w-4 h-4" />
              </button>

              <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-dark-700 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {contactOptions.map((option) => (
                  <a
                    key={option.name}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600"
                  >
                    {option.icon}
                    <span className="ml-2">{option.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {pages.map((page) => (
            <NavLink
              key={page.name}
              to={page.path}
              className={`
                block px-3 py-2 rounded-md text-base font-medium
                ${location.pathname === page.path
                ? 'bg-primary-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                }
              `}
            >
              {page.name}
            </NavLink>
          ))}

          <div className="pt-2 border-t border-gray-200 dark:border-dark-700">
            <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Contact Me
            </h3>
            {contactOptions.map((option) => (
              <a
                key={option.name}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
              >
                {option.icon}
                <span className="ml-2">{option.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
