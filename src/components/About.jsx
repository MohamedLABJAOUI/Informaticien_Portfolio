import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const infoItems = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'saadghaloua63@gmail.com',
      link: 'mailto:saadghaloua63@gmail.com',
    },
    {
      icon: HiPhone,
      label: 'Téléphone',
      value: '+212 680-751850',
      link: 'tel:+212680751850',
    },
    {
      icon: HiLocationMarker,
      label: 'Localisation',
      value: 'Safi, Maroc',
      link: null,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'SaadGHALOUA',
      link: 'https://github.com/SaadGHALOUA',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-title font-bold text-primary dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-secondary dark:bg-orange-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
            >
              Informaticien diplômé en informatique et gestion, motivé, sérieux
              et passionné par les technologies. Compétences solides en
              développement web, maintenance informatique, réseaux, bureautique et
              gestion. Capable d'apprendre rapidement et de m'adapter dans un
              environnement professionnel.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {infoItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary dark:bg-orange-400 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-text dark:text-gray-200 font-medium hover:text-secondary dark:hover:text-orange-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text dark:text-gray-200 font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-orange-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-secondary to-orange-600 rounded-2xl p-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
                  <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <div className="text-6xl font-title font-bold text-primary dark:text-white">
                      GS
                    </div>
                    {/* Placeholder for profile image */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

