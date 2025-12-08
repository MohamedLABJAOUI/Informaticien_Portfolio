import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'

const education = [
  {
    year: '2019 – 2020',
    degree: 'Baccalauréat en Sciences de Gestion Comptable',
    institution: 'Lycée Charif El Idrissi',
    location: 'Safi',
  },
  {
    year: '2023 – 2025',
    degree: 'Diplôme en Informatique et Gestion',
    institution: 'Fondation Abda',
    location: 'Safi',
  },
  
]

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url('/backgroundabout.jpg')`,
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
          background: 'rgba(12, 15, 26, 0.76)',
          backdropFilter: 'blur(2px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-accent-beige mb-7">
            À propos de moi
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-main font-medium mb-12 px-2">
            Informaticien diplômé en informatique et gestion, motivé, sérieux et passionné par les technologies. Compétences solides en développement web, maintenance informatique, réseaux, bureautique et gestion. Capable d'apprendre rapidement et de m'adapter dans un environnement professionnel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-accent-beige mb-4">
            Formation
          </h2>
          <div className="w-24 h-1 bg-secondary-blue mx-auto mb-8"></div>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-secondary-blue"></div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 sm:pl-20 pb-12 last:pb-0"
              >
                <div className="absolute left-4 sm:left-6 top-2 w-4 h-4 bg-secondary-blue rounded-full border-4 border-accent-beige"></div>
                <div className="bg-section rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border border-accent-beige">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-secondary-blue rounded-lg flex items-center justify-center">
                      <HiAcademicCap className="h-5 w-5 sm:h-6 sm:w-6 text-main" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <span className="text-secondary-blue text-sm sm:text-base font-semibold">
                          {edu.year}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-title font-semibold text-accent-beige mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-main text-sm sm:text-base font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-accent-beige text-xs sm:text-sm mt-1">
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

export default About

