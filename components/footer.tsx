"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Heart, Download, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ankit-mehta07', label: 'GitHub', color: 'hover:from-slate-600 hover:to-slate-800' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mehta-ankit07', label: 'LinkedIn', color: 'hover:from-blue-600 hover:to-blue-800' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:from-sky-500 hover:to-sky-700' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ]

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ankitmehta822158@gmail.com', href: 'mailto:ankitmehta822158@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91-8709740522', href: 'tel:+918709740522' },
    { icon: MapPin, label: 'Location', value: 'India', href: '#' }
  ]

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Ankit_Kumar_Resume.pdf'
    link.click()
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 border-t border-slate-200/50 dark:border-slate-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">AK</span>
              </div>
              <div>
                <motion.h3 
                  className="text-2xl font-black bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Ankit Kumar
                </motion.h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Product Manager</p>
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-md">
              Product Manager passionate about driving user-centric solutions through data-driven insights, 
              agile methodologies, and strategic product thinking.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r ${color}`}
                  aria-label={label}
                >
                  <Icon size={20} className="text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
            
            {/* Resume Download */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-black text-slate-800 dark:text-white">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:translate-x-2 transition-all duration-300 font-medium text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-black text-slate-800 dark:text-white">Get in Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Email' ? '_blank' : undefined}
                  rel={info.label === 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
                    <info.icon size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-slate-500 dark:text-slate-400">{info.label}</div>
                    <div className="font-semibold">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-200/50 dark:border-slate-700/50 py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm">
              <span>© {new Date().getFullYear()} Ankit Kumar. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>using Next.js & Tailwind CSS</span>
              </div>
              
              {/* Back to Top */}
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer