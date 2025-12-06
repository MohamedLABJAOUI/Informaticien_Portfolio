import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const Projects = () => {
  const projects = [
    {
      title: 'Centre de Formation – Site vitrine',
      description:
        'Site vitrine simple de 3 pages pour un centre de formation, développé avec HTML et CSS. Design moderne et responsive.',
      technologies: ['HTML', 'CSS'],
      image: '/project1.jpg', // Placeholder
      github: 'https://github.com/SaadGHALOUA',
    },
    {
      title: 'Mini CRM Client (LocalStorage)',
      description:
        'Application CRUD de gestion de clients utilisant le LocalStorage du navigateur. Interface intuitive pour créer, lire, mettre à jour et supprimer des clients.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
      image: '/project2.jpg', // Placeholder
      github: 'https://github.com/SaadGHALOUA',
    },
    {
      title: 'Dashboard Réseau (Mockup)',
      description:
        'Interface de tableau de bord réseau avec des cartes affichant le statut du réseau. Design moderne et informatif.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/project3.jpg', // Placeholder
      github: 'https://github.com/SaadGHALOUA',
    },
    {
      title: 'Générateur de Facture',
      description:
        'Application pour générer et exporter des factures. Aperçu en temps réel et fonctionnalité d\'export en PDF.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: '/project4.jpg', // Placeholder
      github: 'https://github.com/SaadGHALOUA',
    },
  ]

  return (
    <section
      id="projects"
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
            Projets
          </h2>
          <div className="w-24 h-1 bg-secondary dark:bg-orange-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-orange-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <HiCode className="h-24 w-24 text-white opacity-20" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-title font-semibold text-primary dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/10 dark:bg-orange-400/20 text-secondary dark:text-orange-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary dark:bg-gray-700 text-white rounded-lg hover:bg-secondary dark:hover:bg-orange-400 transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Code</span>
                  </a>
                  <button
                    className="flex items-center gap-2 px-4 py-2 border-2 border-primary dark:border-gray-600 text-primary dark:text-gray-300 rounded-lg hover:bg-primary dark:hover:bg-gray-700 hover:text-white transition-colors"
                    disabled
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                    <span>Démo</span>
                  </button>
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

