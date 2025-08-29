"use client"

import { motion } from 'framer-motion'
import { Code, Coffee, Heart, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Managed', value: '25+', color: 'from-cyan-500 to-blue-600', bgColor: 'from-cyan-50/50 to-blue-50/50', darkBgColor: 'from-cyan-900/20 to-blue-900/20' },
    { icon: Coffee, label: 'User Interviews', value: '40+', color: 'from-blue-500 to-indigo-600', bgColor: 'from-blue-50/50 to-indigo-50/50', darkBgColor: 'from-blue-900/20 to-indigo-900/20' },
    { icon: Users, label: 'Users Acquired', value: '500+', color: 'from-indigo-500 to-purple-600', bgColor: 'from-indigo-50/50 to-purple-50/50', darkBgColor: 'from-indigo-900/20 to-purple-900/20' },
    { icon: Heart, label: 'CGPA', value: '8.80/10', color: 'from-purple-500 to-pink-600', bgColor: 'from-purple-50/50 to-pink-50/50', darkBgColor: 'from-purple-900/20 to-pink-900/20' }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      
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
            className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-600 via-indigo-600 via-purple-600 to-slate-800 bg-[length:200%_100%] bg-clip-text text-transparent mb-8 dark:from-white dark:via-blue-400 dark:via-indigo-400 dark:via-purple-400 dark:to-white"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full shadow-lg"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              Product Management Professional
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently pursuing Bachelor of Computer Applications (BCA) at Vidya Vihar Institute of Technology 
              with an outstanding CGPA of 8.80/10. I specialize in product strategy, user research, and agile methodologies 
              to deliver user-centric solutions that drive measurable business growth.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              With hands-on experience in product operations and management, I've successfully led cross-functional teams, 
              conducted 40+ user interviews, and implemented data-driven strategies that resulted in 18% engagement increase 
              and 500+ user acquisition in the first week.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My expertise spans across MoSCoW prioritization, SWOT analysis, A/B testing, and agile methodologies, 
              enabling me to reduce sprint cycle times by 25% and stakeholder review cycles by 40%.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  <strong className="text-slate-800 dark:text-white">Education:</strong> BCA, Vidya Vihar Institute of Technology
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  <strong className="text-slate-800 dark:text-white">Email:</strong> ankitmehta822158@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  <strong className="text-slate-800 dark:text-white">Phone:</strong> +91-8709740522
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                >
                  <Card className={`text-center p-8 border-0 shadow-2xl group overflow-hidden relative bg-gradient-to-br ${stat.bgColor} dark:bg-gradient-to-br dark:${stat.darkBgColor} backdrop-blur-xl`}>
                    <CardContent className="p-0 relative z-10">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent dark:from-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                      
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                        className="relative mb-6"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                        <div className={`relative w-20 h-20 mx-auto bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                          <stat.icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>
                      
                      <motion.h4 
                        className="text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3 dark:from-white dark:to-gray-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {stat.value}
                      </motion.h4>
                      <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About