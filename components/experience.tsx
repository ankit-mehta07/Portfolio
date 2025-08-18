"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Building, Zap, Users, TrendingUp, Target } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Product Management Intern',
      company: 'Yonderwonder.ai',
      location: 'Remote',
      period: '11/2024 - 07/2025',
      description: 'Defined comprehensive MVP roadmap for an AI-powered VFX de-aging tool and conducted extensive user research to identify critical workflow gaps. Led product strategy implementation through agile methodologies and data-driven decision making.',
      technologies: ['Jira', 'Figma', 'A/B Testing', 'User Research', 'Agile', 'SWOT Analysis', 'MoSCoW Prioritization'],
      achievements: [
        'Conducted 40+ user interviews to identify workflow gaps',
        'Reduced sprint cycle time by 25% through agile alignment',
        'Increased user engagement by 18% through A/B testing',
        'Drove user acquisition, adding 500+ users in first week',
        'Applied MoSCoW prioritization for strategic product decisions',
        'Executed SWOT analysis to assess competitive landscape'
      ],
      metrics: [
        { icon: Users, label: 'User Interviews', value: '40+' },
        { icon: Zap, label: 'Sprint Efficiency', value: '25%' },
        { icon: TrendingUp, label: 'Engagement Boost', value: '18%' },
        { icon: Target, label: 'Users Acquired', value: '500+' }
      ],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50/30 to-blue-50/30',
      darkBgColor: 'from-cyan-900/20 to-blue-900/20'
    },
    {
      id: 2,
      title: 'Product Operation',
      company: 'PracharPrashar.in',
      location: 'Remote',
      period: '03/2024 - 10/2024',
      description: 'Spearheaded multiple high-impact client projects and authored comprehensive Product Requirement Documents (PRDs). Coordinated cross-functional teams to streamline workflows and significantly improve delivery efficiency.',
      technologies: ['Jira', 'PRDs', 'Agile', 'Sprint Management', 'Stakeholder Management', 'Cross-functional Coordination'],
      achievements: [
        'Spearheaded 25+ client projects with detailed PRDs',
        'Reduced stakeholder review cycles by 40% through streamlined workflows',
        'Managed sprints with enhanced backlog clarity and prioritization',
        'Coordinated cross-functional teams for optimal project delivery',
        'Authored comprehensive user stories and acceptance criteria',
        'Implemented agile best practices across multiple project streams'
      ],
      metrics: [
        { icon: Target, label: 'Projects Led', value: '25+' },
        { icon: Zap, label: 'Review Efficiency', value: '40%' },
        { icon: Users, label: 'Teams Coordinated', value: '5+' }
      ],
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50/30 to-purple-50/30',
      darkBgColor: 'from-indigo-900/20 to-purple-900/20'
    }
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800/50 dark:to-indigo-900/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-600 via-indigo-600 via-purple-600 to-slate-800 bg-[length:200%_100%] bg-clip-text text-transparent mb-8 dark:from-white dark:via-blue-400 dark:via-indigo-400 dark:via-purple-400 dark:to-white"
          >
            Work Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full shadow-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Professional journey in product management, driving innovation and delivering exceptional results
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 via-indigo-500 to-purple-600 rounded-full shadow-lg" />

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Enhanced Timeline Node */}
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${experience.color} rounded-full border-4 border-white dark:border-slate-900 shadow-2xl z-20`}
                >
                  <div className={`absolute inset-1 bg-gradient-to-r ${experience.color} rounded-full animate-pulse`} />
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                }`}>
                  <motion.div
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  >
                    <Card className={`border-0 shadow-2xl group overflow-hidden relative bg-gradient-to-br ${experience.bgColor} dark:bg-gradient-to-br dark:${experience.darkBgColor} backdrop-blur-xl`}>
                      <CardContent className="p-8 relative">
                        {/* Background decoration */}
                        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${experience.color} opacity-5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700`} />
                        
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="mb-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              <Calendar className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                              <span className={`text-sm font-bold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                                {experience.period}
                              </span>
                            </div>
                            
                            <motion.h3 
                              className="text-3xl font-black text-slate-800 dark:text-white mb-4 leading-tight"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              {experience.title}
                            </motion.h3>
                            
                            <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-300 mb-6">
                              <div className="flex items-center gap-2">
                                <Building className="w-5 h-5" />
                                <span className="font-bold text-lg">{experience.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span className="font-medium">{experience.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-lg">
                            {experience.description}
                          </p>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {experience.metrics.map((metric, metricIndex) => (
                              <motion.div
                                key={metricIndex}
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ duration: 0.3 }}
                                className={`bg-gradient-to-r ${experience.color} text-white p-4 rounded-2xl shadow-lg text-center`}
                              >
                                <metric.icon className="w-6 h-6 mx-auto mb-2" />
                                <div className="font-black text-xl">{metric.value}</div>
                                <div className="text-xs opacity-90 font-medium">{metric.label}</div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="mb-8">
                            <h4 className="text-sm font-black text-slate-800 dark:text-white mb-4 uppercase tracking-wider">
                              Technologies & Methods
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <motion.div
                                  key={tech}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Badge className={`bg-gradient-to-r ${experience.color} text-white border-0 px-3 py-1 text-xs font-bold shadow-lg`}>
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-sm font-black text-slate-800 dark:text-white mb-4 uppercase tracking-wider">
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {experience.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-3"
                                >
                                  <div className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mt-2 flex-shrink-0`} />
                                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {achievement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience