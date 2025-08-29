"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, ExternalLink, Send, Github, Linkedin, Sparkles, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ankitmehta822158@gmail.com',
      link: 'mailto:ankitmehta822158@gmail.com',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-8709740522',
      link: 'tel:+918709740522',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: ExternalLink,
      title: 'LinkedIn',
      value: 'linkedin.com/in/mehta-ankit07',
      link: 'https://linkedin.com/in/mehta-ankit07',
      color: 'from-indigo-500 to-purple-600'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ankit-mehta07', label: 'GitHub', color: 'hover:from-slate-600 hover:to-slate-800' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mehta-ankit07', label: 'LinkedIn', color: 'hover:from-blue-600 hover:to-indigo-600' },
    { icon: Mail, href: 'mailto:ankitmehta822158@gmail.com', label: 'Email', color: 'hover:from-purple-600 hover:to-pink-600' }
  ]

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          icon: <CheckCircle className="w-5 h-5 text-green-500" />
        })
        reset()
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.', {
          icon: <AlertCircle className="w-5 h-5 text-red-500" />
        })
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.', {
        icon: <AlertCircle className="w-5 h-5 text-red-500" />
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-900 dark:via-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
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
            className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-indigo-600 via-purple-600 via-pink-600 to-slate-800 bg-[length:200%_100%] bg-clip-text text-transparent mb-8 dark:from-white dark:via-indigo-400 dark:via-purple-400 dark:via-pink-400 dark:to-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
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
            I'm always open to discussing product management opportunities, innovative projects, or sharing insights about user-centric product development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="space-y-8">
              <motion.h3 
                className="text-3xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-8 dark:from-white dark:to-slate-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Contact Information
              </motion.h3>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.title === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex items-center space-x-6 p-6 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 group border border-white/20 dark:border-slate-700/20"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                    className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-black text-slate-800 dark:text-white text-lg mb-1">
                      {info.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      {info.value}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300" />
                </motion.a>
              ))}

              <div className="pt-8">
                <h4 className="font-black text-slate-800 dark:text-white mb-6 text-xl">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 bg-slate-200/50 dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl flex items-center justify-center bg-gradient-to-r ${color} transition-all duration-500 shadow-lg hover:shadow-2xl`}
                      aria-label={label}
                    >
                      <Icon size={24} className="text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-2xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-10">
                <motion.div
                  className="flex items-center gap-3 mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
                    Send Me a Message
                  </h3>
                </motion.div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                      <label htmlFor="name" className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Ankit Kumar"
                        className="w-full h-14 bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-2 border-slate-200/50 dark:border-slate-600/50 rounded-2xl px-6 text-lg font-medium focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                      />
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 font-medium"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                      <label htmlFor="email" className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        placeholder="your@email.com"
                        className="w-full h-14 bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-2 border-slate-200/50 dark:border-slate-600/50 rounded-2xl px-6 text-lg font-medium focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                      />
                      {errors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 font-medium"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                    <label htmlFor="subject" className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      {...register('subject', { required: 'Subject is required' })}
                      placeholder="Let's discuss product opportunities"
                      className="w-full h-14 bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-2 border-slate-200/50 dark:border-slate-600/50 rounded-2xl px-6 text-lg font-medium focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    />
                    {errors.subject && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 font-medium"
                      >
                        {errors.subject.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                    <label htmlFor="message" className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      {...register('message', { required: 'Message is required' })}
                      placeholder="Tell me about your product vision and how we can collaborate..."
                      rows={6}
                      className="w-full bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm border-2 border-slate-200/50 dark:border-slate-600/50 rounded-2xl p-6 text-lg font-medium resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    />
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 font-medium"
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-2xl text-lg font-black transition-all duration-500 transform hover:scale-105 disabled:transform-none disabled:opacity-70 shadow-2xl hover:shadow-3xl"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-3">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                          <Sparkles className="w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact