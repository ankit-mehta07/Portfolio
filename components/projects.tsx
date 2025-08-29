"use client"

import { motion } from 'framer-motion'
import { ExternalLink, FileText, Eye, Zap, Target, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sponza.in – AI-Powered Influencer-Brand Ecosystem',
      description: 'Led end-to-end product development of a commission-free platform connecting influencers with businesses. Conducted extensive user research with 75+ stakeholders and built an AI-powered matching system that eliminates 20-25% middleman fees.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Product Management', 'User Research', 'AI Matching', 'Figma', 'MoSCoW Prioritization', 'A/B Testing'],
      achievements: [
        'Interviewed 25+ businesses and 50+ creators for market validation',
        'Collected 120+ survey responses to define core features',
        'Designed commission-free model saving businesses 20-25% costs',
        'Built AI-powered matching system for nano/micro influencers',
        'Implemented secure payment integration and analytics dashboard'
      ],
      metrics: [
        { icon: Target, label: 'User Interviews', value: '75+' },
        { icon: TrendingUp, label: 'Cost Savings', value: '25%' }
      ],
      githubUrl: '/case-studies/sponza',
      liveUrl: 'https://sponza.in',
      featured: true,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50/30 to-blue-50/30',
      darkBgColor: 'from-cyan-900/20 to-blue-900/20'
    },
    {
      id: 2,
      title: 'MartxMart.com – B2B Machinery Marketplace',
      description: 'Designed and launched a specialized e-commerce platform for machinery sales, focusing on trust, security, and user experience. Implemented vendor onboarding system, quotation management, and secure payment integration for high-value B2B transactions.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['E-commerce', 'B2B Platform', 'Vendor Management', 'Payment Integration', 'Order Tracking', 'UX Design'],
      achievements: [
        'Built comprehensive vendor onboarding and product listing system',
        'Implemented secure payment gateway for high-value transactions',
        'Designed quotation system for custom machinery requirements',
        'Created order tracking and wishlist functionality',
        'Established zero-commission model for early vendor adoption'
      ],
      metrics: [
        { icon: Zap, label: 'Commission Rate', value: '0%' },
        { icon: Target, label: 'Vendor Onboarding', value: '100%' }
      ],
      githubUrl: '/case-studies/martxmart',
      liveUrl: 'https://martxmart.com',
      featured: true,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50/30 to-purple-50/30',
      darkBgColor: 'from-indigo-900/20 to-purple-900/20'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-indigo-900/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.1),transparent_50%)]" />
      
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
            Featured Projects
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
            Showcasing impactful product management initiatives that drove measurable business outcomes
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge className={`bg-gradient-to-r ${project.color} text-white border-0 px-4 py-2 text-sm font-bold shadow-lg`}>
                      Featured Project
                    </Badge>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl lg:text-4xl font-black text-slate-800 dark:text-white leading-tight"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                {/* Project Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                >
                  <Card className={`border-0 shadow-2xl bg-gradient-to-br ${project.bgColor} dark:bg-gradient-to-br dark:${project.darkBgColor} backdrop-blur-xl overflow-hidden group`}>
                    <CardContent className="p-8 relative">
                      {/* Background decoration */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`} />
                      
                      <div className="relative z-10 space-y-6">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                          {project.description}
                        </p>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-4">
                          {project.metrics.map((metric, metricIndex) => (
                            <motion.div
                              key={metricIndex}
                              whileHover={{ scale: 1.1, y: -2 }}
                              transition={{ duration: 0.3 }}
                              className={`flex items-center gap-3 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-2xl shadow-lg`}
                            >
                              <metric.icon className="w-5 h-5" />
                              <div>
                                <div className="font-bold text-lg">{metric.value}</div>
                                <div className="text-xs opacity-90">{metric.label}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-black text-slate-800 dark:text-white text-sm uppercase tracking-wider">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3"
                              >
                                <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`} />
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

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge variant="outline" className="text-sm font-semibold border-2 px-4 py-2 hover:shadow-lg transition-all duration-300">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex items-center space-x-2 border-2 hover:shadow-lg transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-5 h-5" />
                        <span>Case Study</span>
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className={`flex items-center space-x-2 bg-gradient-to-r ${project.color} hover:shadow-2xl transition-all duration-300 shadow-lg`}
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                        <span>View Project</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-10 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    >
                      <Eye className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects