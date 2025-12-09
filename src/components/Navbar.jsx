import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { animateScroll as scroll, scroller } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'A propos', to: 'about' },
    { name: 'Compétence', to: 'skills' },
    { name: 'Projects', to: 'projects' },
  ]

  const handleNavClick = (target) => {
    if (!isHome) {
      navigate('/', { state: { scrollTo: target } })
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -80,
      })
    }
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    if (!isHome) {
      navigate('/')
    } else {
      scroll.scrollToTop({ duration: 500 })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-section shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer"
            aria-label="Revenir à l'accueil"
          >
            <img
              src="/testlogo.png"
              alt="Logo - Home"
              className="h-10 w-auto object-contain"
              style={{ maxHeight: '2.5rem' }}
            />
          </button>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-main hover:text-accent-beige font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-main hover:text-accent-beige transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-section border-t border-accent-beige">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className="block w-full text-left px-4 py-2 rounded-lg text-main hover:text-accent-beige hover:bg-section transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

