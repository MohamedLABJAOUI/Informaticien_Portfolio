import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-section text-main py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-muted text-center">
            Développé par <span className="text-accent-gold">Ghaloua Saad</span> — © {currentYear}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SaadGHALOUA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-blue hover:text-secondary-green transition-colors"
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

