import React from 'react'
import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed bottom-8 left-8 z-50 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 text-primary dark:text-orange-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <HiSun className="h-6 w-6" />
      ) : (
        <HiMoon className="h-6 w-6" />
      )}
    </motion.button>
  )
}

export default ThemeToggle

