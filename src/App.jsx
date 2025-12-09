import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo
      // slight delay to ensure home sections are rendered before scrolling
      const timer = setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -80,
        })
      }, 100)

      // clean the history state so subsequent navigations don't re-trigger
      window.history.replaceState({}, document.title)

      return () => clearTimeout(timer)
    }
  }, [location])

  return (
    <>
      <Helmet>
        <html lang="fr" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-main transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App

