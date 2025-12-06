import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'

const Education = () => {
  const education = [
    {
      year: '2023 – 2025',
      degree: 'Diplôme en Informatique et Gestion',
      institution: 'Fondation Abda',
      location: 'Safi',
    },
    {
      year: '2019 – 2020',
      degree: 'Baccalauréat en Sciences de Gestion Comptable',
      institution: 'Lycée Charif El Idrissi',
      location: 'Safi',
    },
  ]

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-primary"
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
            Formation
          </h2>
          <div className="w-24 h-1 bg-secondary dark:bg-orange-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary dark:bg-orange-400"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-secondary dark:bg-orange-400 rounded-full border-4 border-white dark:border-primary"></div>

                {/* Content Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary dark:bg-orange-400 rounded-lg flex items-center justify-center">
                      <HiAcademicCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <span className="text-secondary dark:text-orange-400 font-semibold">
                          {edu.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-title font-semibold text-primary dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        {edu.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

