import React from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaNetworkWired,
  FaLaptopCode,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaUsers,
  FaLightbulb,
  FaCog,
} from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Développement Web',
      icon: FaLaptopCode,
      skills: [
        { name: 'HTML', icon: FaHtml5, level: 85 },
        { name: 'CSS', icon: FaCss3Alt, level: 80 },
        { name: 'MySQL', icon: FaDatabase, level: 75 },
      ],
    },
    {
      title: 'IT & Réseaux',
      icon: FaNetworkWired,
      skills: [
        { name: 'Réseaux LAN / Wi-Fi', level: 80 },
        { name: 'Installation & configuration réseau', level: 75 },
        { name: 'Maintenance informatique', level: 85 },
      ],
    },
    {
      title: 'Bureautique',
      icon: FaFileWord,
      skills: [
        { name: 'Word', icon: FaFileWord, level: 90 },
        { name: 'Excel', icon: FaFileExcel, level: 85 },
        { name: 'PowerPoint', icon: FaFilePowerpoint, level: 80 },
        { name: 'Access', level: 70 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: FaUsers,
      skills: [
        { name: 'Organisation', icon: FaCog, level: 90 },
        { name: 'Travail en équipe', icon: FaUsers, level: 85 },
        { name: 'Esprit d\'analyse', icon: FaLightbulb, level: 88 },
        { name: 'Résolution de problèmes', icon: FaCog, level: 87 },
      ],
    },
  ]

  return (
    <section
      id="skills"
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
            Compétences
          </h2>
          <div className="w-24 h-1 bg-secondary dark:bg-orange-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary dark:bg-orange-400 rounded-lg flex items-center justify-center">
                    <CategoryIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-title font-semibold text-primary dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {SkillIcon && (
                              <SkillIcon className="h-5 w-5 text-secondary dark:text-orange-400" />
                            )}
                            <span className="text-text dark:text-gray-200 font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="bg-secondary dark:bg-orange-400 h-2.5 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

