"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Download, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Ankit_Kumar_Resume.pdf'
    link.click()
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 pt-20">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-400/5 dark:via-blue-400/5 dark:to-purple-400/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent_70%)]" />
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10 rounded-full blur-2xl"
      />
      <motion.div 
        animate={{ y: [20, -20, 20], x: [15, -15, 15], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-2xl"
      />
      <motion.div 
        animate={{ y: [-15, 15, -15], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-emerald-400/15 to-teal-500/15 dark:from-emerald-400/8 dark:to-teal-500/8 rounded-full blur-xl"
      />
      
      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              <motion.span 
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-2xl"
              >
                Ankit Kumar
              </motion.span>
              <br />
              <motion.span 
                initial={{ backgroundPosition: "100% 50%" }}
                animate={{ backgroundPosition: "0% 50%" }}
                transition={{ duration:4, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-500 via-blue-600 via-indigo-600 via-purple-600 to-pink-600 bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-xl"
              >
                Product Manager
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-2xl"
            >
              Crafting exceptional user experiences through{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent font-bold">data-driven insights</span>,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">strategic thinking</span>, and{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">agile innovation</span>.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-2xl text-lg font-bold bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-500 shadow-lg hover:shadow-xl"
                  onClick={handleDownloadResume}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  variant="ghost"
                  className="px-8 py-4 text-slate-700 dark:text-slate-300 rounded-2xl text-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-500"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-60"
                />
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/ankit.jpg"
                    alt="Ankit Kumar"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>


        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            { number: '25+', label: 'Projects Led' },
            { number: '40+', label: 'User Interviews' },
            { number: '500+', label: 'Users Acquired' },
            { number: '8.80', label: 'CGPA' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 shadow-lg"
            >
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-slate-600 dark:text-slate-400 group cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-sm mb-3 font-medium group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">
            Discover More
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full blur-sm opacity-30" />
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-3 group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 shadow-lg">
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}