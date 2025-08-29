"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Users, Zap, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const MartxMartCaseStudy = () => {
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
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-4">E-commerce Platform</Badge>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-white mb-6">
              MartxMart.com: B2B Machinery Marketplace
            </h1>
            <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400 mb-8">
              <span>December 2024</span>
              <span>6 min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <Card className="mb-8 border-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Project Highlights</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">0%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Commission Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">100%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Vendor Onboarding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Development Phases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">B2B</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Marketplace Focus</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2>Problem Statement</h2>
            <p>Purchasing machinery online is often complex due to several key challenges:</p>
            <ul>
              <li>Lack of trust in sellers and authenticity of products</li>
              <li>Poor user experience in existing B2B platforms</li>
              <li>Limited payment options for high-value transactions</li>
              <li>Complex vendor onboarding and product listing processes</li>
            </ul>

            <p>Both vendors and buyers in the machinery industry needed a transparent, secure, and easy-to-use platform for direct sales.</p>

            <h2>Goal</h2>
            <p>To build an e-commerce marketplace dedicated to machinery sales, where vendors can easily showcase products and buyers can securely purchase them.</p>

            <h2>Research & Insights</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="border-0 bg-white/80 dark:bg-slate-800/80">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-indigo-600" />
                    Vendor Insights
                  </h3>
                  <p>Interviewed small machinery vendors and identified key pain points:</p>
                  <ul className="space-y-2 mt-4">
                    <li>• High listing fees on existing platforms</li>
                    <li>• Commission cuts reducing profit margins</li>
                    <li>• Difficulty reaching the right buyers</li>
                    <li>• Complex onboarding processes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 dark:bg-slate-800/80">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-600" />
                    Buyer Insights
                  </h3>
                  <p>Customers wanted several key features:</p>
                  <ul className="space-y-2 mt-4">
                    <li>• Authentic product listings</li>
                    <li>• Simple comparison tools</li>
                    <li>• Secure payment integration</li>
                    <li>• Transparent vendor information</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>Solution</h2>
            <p>A specialized e-commerce website designed for machinery sales with a focus on:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-600" />
                    Trust & Security
                  </h3>
                  <ul className="space-y-2">
                    <li>• Vendor verification system</li>
                    <li>• Secure payment gateways</li>
                    <li>• Product authenticity guarantees</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-600" />
                    Simplicity & UX
                  </h3>
                  <ul className="space-y-2">
                    <li>• Intuitive user interface</li>
                    <li>• Easy product comparison</li>
                    <li>• Streamlined checkout process</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>Key Features</h2>
            <ul>
              <li><strong>User-friendly Interface:</strong> Clean, intuitive design optimized for B2B transactions</li>
              <li><strong>Vendor Onboarding System:</strong> Streamlined process for machinery sellers to join the platform</li>
              <li><strong>Product Details & Comparisons:</strong> Comprehensive product information with comparison tools</li>
              <li><strong>Secure Payment Integration:</strong> Multiple payment options for high-value transactions</li>
              <li><strong>Order Tracking:</strong> Real-time tracking system for machinery purchases</li>
              <li><strong>Wishlist & Inquiry System:</strong> Save products and direct vendor communication</li>
              <li><strong>Quotation System:</strong> Custom pricing for bulk or specialized machinery</li>
            </ul>

            <h2>Product Roadmap</h2>
            <div className="space-y-6 my-8">
              <Card className="border-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-green-700 dark:text-green-400">Phase 1 (MVP)</h3>
                  <ul className="space-y-2">
                    <li>• Vendor onboarding system</li>
                    <li>• Product listing functionality</li>
                    <li>• Secure payment integration</li>
                    <li>• Order tracking system</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-400">Phase 2</h3>
                  <ul className="space-y-2">
                    <li>• Quotation system implementation</li>
                    <li>• Advanced machinery comparison tools</li>
                    <li>• Buyer-seller chat functionality</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-400">Phase 3</h3>
                  <ul className="space-y-2">
                    <li>• Vendor analytics dashboard</li>
                    <li>• Financing and EMI integration</li>
                    <li>• Advanced search and filtering</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>Go-to-Market Strategy</h2>
            <ol>
              <li><strong>Vendor Partnerships:</strong> Partnered with local machinery vendors to list products on the platform</li>
              <li><strong>Digital Marketing:</strong> Ran targeted digital marketing campaigns for industrial buyers</li>
              <li><strong>Zero Commission Model:</strong> Offered zero commission during early adoption to onboard sellers</li>
              <li><strong>Trust Building:</strong> Built trust with buyers by highlighting certifications, warranties, and secure payments</li>
            </ol>

            <Card className="mt-8 border-0 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Key Learnings</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Trust is paramount in B2B marketplaces, especially for high-value transactions</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Vendor onboarding simplicity directly impacts platform adoption rates</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Zero commission models can be effective for early market penetration</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Phased development approach allows for iterative improvement based on user feedback</span>
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

export default MartxMartCaseStudy