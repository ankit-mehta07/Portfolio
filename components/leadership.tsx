"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Award, TrendingUp, Heart } from 'lucide-react'

const Leadership = () => {
  const achievements = [
    {
      id: 1,
      icon: Users,
      title: 'NSS Volunteer',
      description: 'Directed 150+ peers and organized 10+ outreach programs; increased participation by 60%.',
      impact: '150+ Peers Directed',
      metric: '60% Participation Increase',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50/50 to-teal-50/50',
      darkBgColor: 'from-emerald-900/20 to-teal-900/20'
    },
    {
      id: 2,
      icon: Award,
      title: 'Hostel Coordinator',
      description: 'Managed operations for 100+ residents; resolved 50+ issues with 90% satisfaction.',
      impact: '100+ Residents Managed',
      metric: '90% Satisfaction Rate',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50/50 to-indigo-50/50',
      darkBgColor: 'from-blue-900/20 to-indigo-900/20'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Finance Coordinator',
      description: 'Administered INR 5 Lakh budget; achieved 20% savings through financial planning.',
      impact: 'INR 5 Lakh Budget',
      metric: '20% Cost Savings',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50/50 to-pink-50/50',
      darkBgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      id: 4,
      icon: Heart,
      title: 'Peer Mentor',
      description: 'Guided 10+ juniors on academics, internships, and career development.',
      impact: '10+ Juniors Mentored',
      metric: 'Career Guidance',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50/50 to-red-50/50',
      darkBgColor: 'from-orange-900/20 to-red-900/20'
    }
  ]

  return (
    <section id="leadership" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]" />
      
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
            Leadership & Achievements
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "10rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Demonstrated leadership across various roles, driving positive impact and fostering growth in communities and teams.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              >
                <Card className={`h-full border-0 shadow-2xl group overflow-hidden relative bg-gradient-to-br ${achievement.bgColor} dark:bg-gradient-to-br dark:${achievement.darkBgColor} backdrop-blur-xl`}>
                  <CardContent className="p-8 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent dark:from-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative mb-6"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className={`relative w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                        <achievement.icon className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>

                    <div className="relative z-10">
                      <motion.h3 
                        className="text-2xl font-black text-slate-800 dark:text-white mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {achievement.title}
                      </motion.h3>
                      
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                        {achievement.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                          <Badge 
                            className={`bg-gradient-to-r ${achievement.color} text-white border-0 px-4 py-2 text-sm font-bold shadow-lg`}
                          >
                            {achievement.impact}
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                          <Badge 
                            variant="outline" 
                            className="border-2 border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-bold bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                          >
                            {achievement.metric}
                          </Badge>
                        </motion.div>
                      </div>
                    </div>
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

export default Leadership