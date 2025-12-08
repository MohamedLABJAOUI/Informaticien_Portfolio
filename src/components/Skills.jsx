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
        { name: "Esprit d'analyse", icon: FaLightbulb, level: 88 },
        { name: 'Résolution de problèmes', icon: FaCog, level: 87 },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url('/backgroundcompetence.jpg')`,
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-accent-beige mb-4">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-secondary-blue mx-auto"></div>
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
                className="bg-section border border-accent-beige rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <CategoryIcon className="h-5 w-5 sm:h-6 sm:w-6 text-main" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-title font-semibold text-accent-beige">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2 gap-2">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            {SkillIcon && (
                              <SkillIcon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-blue flex-shrink-0" />
                            )}
                            <span className="text-main text-sm sm:text-base font-medium truncate">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs sm:text-sm text-accent-beige flex-shrink-0">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-background rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="bg-secondary-blue h-2.5 rounded-full"
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

