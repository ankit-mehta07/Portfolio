"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Product Management',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50/50 to-blue-50/50',
      darkBgColor: 'from-cyan-900/10 to-blue-900/10',
      skills: [
        { name: 'Agile & Scrum', level: 95 },
        { name: 'Product Lifecycle', level: 90 },
        { name: 'PRDs & User Stories', level: 92 },
        { name: 'Product Roadmaps', level: 88 },
        { name: 'User Research', level: 85 }
      ]
    },
    {
      title: 'Analytics & Testing',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50/50 to-indigo-50/50',
      darkBgColor: 'from-blue-900/10 to-indigo-900/10',
      skills: [
        { name: 'A/B Testing', level: 90 },
        { name: 'Market Research', level: 85 },
        { name: 'SWOT Analysis', level: 88 },
        { name: 'MoSCoW Prioritization', level: 92 },
        { name: 'Data Visualization', level: 80 }
      ]
    },
    {
      title: 'Technical Skills',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50/50 to-purple-50/50',
      darkBgColor: 'from-indigo-900/10 to-purple-900/10',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'MySQL', level: 82 },
        { name: 'HTML & CSS', level: 78 }
      ]
    },
    {
      title: 'Tools & Platforms',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50/50 to-pink-50/50',
      darkBgColor: 'from-purple-900/10 to-pink-900/10',
      skills: [
        { name: 'Jira', level: 95 },
        { name: 'Figma', level: 90 },
        { name: 'Google Analytics', level: 85 },
        { name: 'MS Excel', level: 88 },
        { name: 'Canva', level: 82 }
      ]
    },
    {
      title: 'Professional Skills',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-50/50 to-rose-50/50',
      darkBgColor: 'from-pink-900/10 to-rose-900/10',
      skills: [
        { name: 'Stakeholder Management', level: 92 },
        { name: 'Communication', level: 95 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Business Strategy', level: 85 },
        { name: 'Negotiation', level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 dark:from-slate-900 dark:via-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-indigo-600 via-purple-600 via-pink-600 to-slate-800 bg-[length:200%_100%] bg-clip-text text-transparent mb-8 dark:from-white dark:via-indigo-400 dark:via-purple-400 dark:via-pink-400 dark:to-white"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="h-full"
              >
                <Card className={`h-full border-0 shadow-2xl group overflow-hidden relative bg-gradient-to-br ${category.bgColor} dark:bg-gradient-to-br dark:${category.darkBgColor} backdrop-blur-xl`}>
                  <CardHeader className="relative pb-4">
                    {/* Animated background elements */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-t-3xl`} />
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700" />
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <CardTitle className={`text-2xl font-black text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                        {category.title}
                      </CardTitle>
                      <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`} />
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                        }}
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                            <motion.div
                              initial={{ width: 0, opacity: 0 }}
                              whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                              transition={{ 
                                duration: 1.5, 
                                delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg relative overflow-hidden`}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
                              <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3"
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills