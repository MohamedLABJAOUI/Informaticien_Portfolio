import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiDownload, HiMail } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleDownloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/cv-ghaloua-saad.pdf' // You'll need to add the actual CV file
    link.download = 'CV-Ghaloua-Saad.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <motion.p
              className="text-secondary dark:text-orange-400 font-medium mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bonjour, je suis
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-title font-bold text-primary dark:text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ghaloua Saad
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-title font-semibold text-secondary dark:text-orange-400 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Informaticien | Développeur Web Junior
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Passionné par les technologies et le développement web, je suis
              motivé à créer des solutions innovantes et à continuer d'apprendre
              dans un environnement professionnel dynamique.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-orange-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <HiMail className="mr-2 h-5 w-5" />
                Me Contacter
              </Link>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary dark:border-orange-400 text-secondary dark:text-orange-400 hover:bg-secondary dark:hover:bg-orange-400 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <HiDownload className="mr-2 h-5 w-5" />
                Télécharger CV
              </button>
            </motion.div>
            <motion.div
              className="flex gap-6 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com/SaadGHALOUA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-orange-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-orange-600 rounded-full blur-3xl opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-secondary to-orange-600 rounded-full p-2">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="text-6xl md:text-8xl font-title font-bold text-primary dark:text-white">
                    GS
                  </div>
                  {/* Placeholder for profile picture - replace with actual image */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

