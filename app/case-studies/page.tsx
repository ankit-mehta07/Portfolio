"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'sponza',
      title: 'Sponza.in: AI-Powered Influencer-Brand Ecosystem',
      description: 'Building a commission-free platform that connects influencers with businesses through AI-powered matching.',
      date: 'January 2025',
      readTime: '8 min read',
      tags: ['Product Management', 'AI Matching', 'User Research'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'martxmart',
      title: 'MartxMart.com: B2B Machinery Marketplace',
      description: 'Designing a specialized e-commerce platform for machinery sales with focus on trust and security.',
      date: 'December 2024',
      readTime: '6 min read',
      tags: ['E-commerce', 'B2B Platform', 'UX Design'],
      color: 'from-indigo-500 to-purple-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-indigo-900/10">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 dark:from-white dark:via-blue-400 dark:to-indigo-400">
            Case Studies
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Deep dives into product management challenges and solutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={`/case-studies/${study.id}`}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Calendar className="w-5 h-5 text-slate-500" />
                          <span className="text-slate-600 dark:text-slate-400">{study.date}</span>
                          <Clock className="w-5 h-5 text-slate-500" />
                          <span className="text-slate-600 dark:text-slate-400">{study.readTime}</span>
                        </div>
                        <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                      
                      <h2 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                        {study.title}
                      </h2>
                      
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {study.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaseStudies