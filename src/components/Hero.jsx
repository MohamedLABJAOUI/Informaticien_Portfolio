import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiDownload, HiMail } from 'react-icons/hi'

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
    const link = document.createElement('a')
    link.href = '/GhalouaSaad-CVnew.pdf' 
    link.download = 'GhalouaSaad.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-background text-main relative overflow-hidden"
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(12, 15, 26, 0.78)',
          backdropFilter: 'blur(2.5px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <motion.p
              className="text-accent-beige font-medium mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bonjour, je suis
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title font-bold text-accent-beige mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ghaloua Saad
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-title font-semibold text-main mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Informaticien | Développeur Web Junior
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-main mb-8 max-w-2xl mx-auto md:mx-0"
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
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-primary hover:bg-primary-light text-main text-sm sm:text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <HiMail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Me Contacter
              </a>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-main text-sm sm:text-base font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <HiDownload className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Télécharger CV
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-blue to-primary rounded-full blur-3xl opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-secondary-blue to-primary rounded-full p-2">
                <div className="w-full h-full bg-section rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/SAAD002.png"
                    alt="Saad Ghaloua profile"
                    className="w-full h-full object-cover"
                  />
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

