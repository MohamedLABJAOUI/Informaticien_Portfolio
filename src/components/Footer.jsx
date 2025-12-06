import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary dark:bg-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 dark:text-gray-400 text-center md:text-left">
            Développé par Ghaloua Saad — © {currentYear}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SaadGHALOUA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-400 hover:text-secondary dark:hover:text-orange-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

