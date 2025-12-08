import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Mini-SiteWeb eCOM',
      description:
        'Plateforme e-commerce (PHP/HTML/CSS/JS) avec catalogue, gestion utilisateurs et interface admin sécurisée.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: '/visionaryminds.png',
      github: 'https://github.com/SaadGHALOUA/Mini-SiteWeb-eCOM',
      demo: 'https://visonnary-minds.vercel.app/',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-section relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-accent-beige mb-4">
            Projets
          </h2>
          <div className="w-24 h-1 bg-secondary-blue mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-section border border-accent-beige rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-52 overflow-hidden bg-background">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors"></div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-title font-semibold text-accent-beige mb-3">
                  {project.title}
                </h3>
                <p className="text-main text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-secondary-blue/15 text-secondary-blue rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-main text-sm sm:text-base rounded-lg hover:bg-primary-light transition-colors"
                  >
                    <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-secondary-blue text-secondary-blue text-sm sm:text-base rounded-lg hover:bg-secondary-blue hover:text-main transition-colors"
                  >
                    <FaExternalLinkAlt className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Démo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

