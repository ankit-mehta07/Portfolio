"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Users, Target, TrendingUp, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const SponzaCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-indigo-900/10">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="mb-12">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-4">Product Management</Badge>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-white mb-6">
              Sponza.in: My Journey Building an Influencer-Brand Connecting Platform
            </h1>
            <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400 mb-8">
              <span>January 2025</span>
              <span>8 min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <Card className="mb-8 border-0 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Key Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">75+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">User Interviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">120+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Survey Responses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">25%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">0%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Commission</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2>Inspiration and Background</h2>
            <p>My journey with Sponza.in actually started while I was working at PracharPrashar.in, a digital marketing agency where we handled projects for web development, App development and Digital Marketing.</p>
            
            <p>We had built some solid relationships with a handful of influencers and brands, executing campaigns that drove real results like boosting social media engagement for local business. But as I researched the industry more, I noticed a frustrating pattern like companies acting as middlemen would charge 20-25% commission just for finding influencers and handing over the work.</p>

            <blockquote>
              <p>For a small business who doesn't have much of a budget, 20-25% commission feels like robbing them.</p>
            </blockquote>

            <p>One day, my friend suggested the idea, "Why don't we build our own platform where businesses can directly contact influencers? They could message them right on the website, negotiate deals themselves, and cut out the middleman entirely. Businesses save that 20-25% commission, and influencers get the full amount."</p>

            <h2>Project Overview</h2>
            <p>By early 2025, inspired by those early conversations, I poured my energy into building Sponza.in a platform that connects influencers with businesses. As Product Manager, I led the build from those initial designs, after months of planning and research we started our work in Jan 2025.</p>

            <p>Sponza.in is not a platform for connecting influencer and business, it's an end-to-end ecosystem with tools for messaging, campaign planning, secure payments, and analytics, all designed to make influencer marketing easy and fair to everyone.</p>

            <h2>Target Audience</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="border-0 bg-white/80 dark:bg-slate-800/80">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    Businesses
                  </h3>
                  <p className="mb-4">Mainly small businesses who don't have much budgets. We targeted small-to-medium businesses (SMBs), as they were hit hardest by commissions.</p>
                  <ul className="space-y-2">
                    <li>• Restaurants</li>
                    <li>• Water parks</li>
                    <li>• Second hand bike and car sellers</li>
                    <li>• Mobile shops</li>
                    <li>• Saloons</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 dark:bg-slate-800/80">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-cyan-600" />
                    Influencers
                  </h3>
                  <p className="mb-4">Focusing on nano to micro influencers who were underserved by existing platforms.</p>
                  <ul className="space-y-2">
                    <li>• Nano influencers (1K-5K followers)</li>
                    <li>• Micro influencers (5K-25K followers)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>Problem Statement</h2>
            <ul>
              <li>Middleman between business and influencers</li>
              <li>High commission rates (20-25%)</li>
              <li>Indirect communication</li>
              <li>Trust issues</li>
              <li>Delayed deals without proper direct communication</li>
            </ul>

            <h2>User Research</h2>
            <p>I talked with around 25+ businesses and 50+ creators, asking about commission frustrations. One influencer shared how a 25% cut left her demotivated that fueled our no commission policy.</p>

            <p>Created a survey page about the features they want to have in our website and sent it to business and influencers, we got around 120 responses.</p>

            <h3>Survey-led features:</h3>
            <ul>
              <li>Messaging system</li>
              <li>AI matchups according to their needs</li>
              <li>Filters like followers range</li>
              <li>Direct payment integration</li>
              <li>Analytics tools</li>
            </ul>

            <h2>Market Research</h2>
            <p>I compared commission heavy platforms, spotting the gap for direct access. Trends showed direct deals converting better, so we went free access to 5 deals.</p>

            <p>I analyzed reports from Influencer Marketing Hub, noting that 68% of brands preferred micro-influencers for their 3-4x higher engagement rates, especially in niches like esports and sustainable fashion.</p>

            <h2>Design and Development Process</h2>
            <ul>
              <li><strong>Wireframing:</strong> Designed an initial web page for both influencers and business. Used tools like Figma and Canva for collaborative wireframes.</li>
              <li><strong>UI Design:</strong> Focused on a clean interface with mobile responsiveness.</li>
              <li><strong>Feature Prioritization:</strong> Used MoSCoW method (Must-have, Should-have, Could-have, Won't-have) to focus on MVP features like AI matching and Messaging.</li>
              <li><strong>Prototyping and Testing:</strong> Built prototypes and conducted A/B testing on elements like search filters and user dashboard.</li>
              <li><strong>Collaboration:</strong> Worked closely with developers to integrate AI models for matching based on their profile.</li>
            </ul>

            <h2>Competitor Analysis</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Platform</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Price Model</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Key Strengths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 font-semibold">Plixxo</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Custom pricing</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Large influencer network, robust campaign tracking tools</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 font-semibold">Qoruz</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">$333–$668/mo</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">AI-based influencer discovery with detailed analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 font-semibold">Winkl</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">2–5% commission</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Community driven validation for authenticity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Promotion Strategy</h2>
            <ol>
              <li>Initially manually messaging through email and Instagram to bring influencers and business to our platform</li>
              <li>Make content and post it on Instagram reels and YouTube shorts</li>
              <li>Meta ads targeting</li>
            </ol>

            <Card className="mt-8 border-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Key Takeaways</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Commission-free model can be a significant differentiator in crowded markets</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Extensive user research (75+ interviews) was crucial for product-market fit</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>AI-powered matching can solve complex discovery problems in two-sided markets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SponzaCaseStudy