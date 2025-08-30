"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Users, Target, Lightbulb, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const SponzaCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/30 dark:from-slate-900 dark:via-cyan-900/10 dark:to-blue-900/10">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Sponza.in
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-300 mb-6">
              AI-Powered Influencer-Brand Ecosystem
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge>Product Management</Badge>
              <Badge>AI Matching</Badge>
              <Badge>User Research</Badge>
              <Badge>Platform Design</Badge>
            </div>
          </div>

          <div className="space-y-12">
            {/* Background */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-6 h-6 text-cyan-600 mr-3" />
                  <h2 className="text-2xl font-bold">Inspiration & Background</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  My journey with Sponza.in started while working at PracharPrashar.in, a digital marketing agency. 
                  We had solid relationships with influencers and brands, but I noticed a frustrating pattern: 
                  middleman companies charging 20-25% commission just for connecting parties.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  For small businesses with limited budgets, this felt like robbery. My friend suggested: 
                  "Why don't we build a platform where businesses can directly contact influencers?" 
                  This evolved from a simple messaging tool into a full AI-powered ecosystem.
                </p>
              </CardContent>
            </Card>

            {/* Overview */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-6 h-6 text-cyan-600 mr-3" />
                  <h2 className="text-2xl font-bold">Project Overview</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  As a Product Manager, I led Sponza.in from initial designs and development. 
                  It's not just a connecting platform—it's an end-to-end ecosystem with messaging, 
                  campaign planning, secure payments, and analytics.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Target Businesses (SMBs)</h3>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      <li>• Restaurants</li>
                      <li>• Water parks</li>
                      <li>• Second-hand vehicle dealers</li>
                      <li>• Mobile shops</li>
                      <li>• Salons</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Target Influencers</h3>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      <li>• Nano: 1K-5K followers</li>
                      <li>• Micro: 5K-25K followers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem Statement */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold">Problem Statement</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Middleman between businesses and influencers
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      20-25% commission fees
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Indirect communication channels
                    </li>
                  </ul>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Trust issues between parties
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Delayed deals without proper communication
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Research */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold">User Research</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-cyan-600 mb-2">25+</div>
                      <div className="text-slate-600 dark:text-slate-300">Businesses Interviewed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                      <div className="text-slate-600 dark:text-slate-300">Creators Interviewed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">120</div>
                      <div className="text-slate-600 dark:text-slate-300">Survey Responses</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        <li>• Direct messaging system</li>
                        <li>• AI matchups based on needs</li>
                        <li>• Follower range filters</li>
                      </ul>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        <li>• Direct payment integration</li>
                        <li>• Analytics tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Research */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold">Market Research</h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p><strong>Key Finding:</strong> 68% of brands preferred micro-influencers for their 3-4x higher engagement rates, especially in niches like esports and sustainable fashion.</p>
                  <p><strong>Social Listening:</strong> Analyzed X posts and Instagram comments, spotting complaints about delayed payments and unanswered emails.</p>
                  <p><strong>Competitive Gap:</strong> Direct deals converted better than commission-heavy platforms, leading to our free access model for first 5 deals.</p>
                </div>
              </CardContent>
            </Card>

            {/* Design Process */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold">Design & Development Process</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Design Approach</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li>• Wireframing with Figma & Canva</li>
                      <li>• Mobile-responsive UI design</li>
                      <li>• MoSCoW feature prioritization</li>
                      <li>• A/B testing on key elements</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Key Features</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li>• AI matching algorithms</li>
                      <li>• Direct messaging system</li>
                      <li>• Campaign planning tools</li>
                      <li>• Secure payment integration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Competitor Analysis */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold">Competitive Analysis</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Platform</th>
                        <th className="text-left py-2">Pricing</th>
                        <th className="text-left py-2">Key Strengths</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600 dark:text-slate-300">
                      <tr className="border-b">
                        <td className="py-2 font-medium">Plixxo</td>
                        <td className="py-2">Custom</td>
                        <td className="py-2">Large network, campaign tracking</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-medium">Qoruz</td>
                        <td className="py-2">$333-668/mo</td>
                        <td className="py-2">AI discovery, detailed analytics</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-medium">Winkl</td>
                        <td className="py-2">2-5% commission</td>
                        <td className="py-2">Community validation</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Chtrbox</td>
                        <td className="py-2">Custom</td>
                        <td className="py-2">Regional targeting, enterprise focus</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Go-to-Market Strategy */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold">Go-to-Market Strategy</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg">
                    <h3 className="font-semibold mb-2">Direct Outreach</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Manual messaging via email and Instagram to onboard users</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                    <h3 className="font-semibold mb-2">Content Marketing</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Instagram Reels and YouTube Shorts for organic reach</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg">
                    <h3 className="font-semibold mb-2">Paid Advertising</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Meta ads targeting SMBs and micro-influencers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <a 
                href="https://sponza.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Visit Sponza.in
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SponzaCaseStudy
