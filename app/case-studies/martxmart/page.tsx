"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, ShoppingCart, Shield, Users, TrendingUp, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const MartxMartCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-900 dark:via-indigo-900/10 dark:to-purple-900/10">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/case-studies" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              MartxMart.com
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-300 mb-6">
              B2B Machinery Marketplace Platform
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge>E-commerce</Badge>
              <Badge>B2B Platform</Badge>
              <Badge>UX Design</Badge>
              <Badge>Trust & Security</Badge>
            </div>
          </div>

          <div className="space-y-12">
            {/* Overview */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <ShoppingCart className="w-6 h-6 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold">Project Overview</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  MartxMart.com is a specialized B2B e-commerce platform designed for machinery sales. 
                  The platform focuses on building trust between buyers and sellers through verified listings, 
                  secure transactions, and comprehensive product information.
                </p>
              </CardContent>
            </Card>

            {/* Problem Statement */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold">Problem Statement</h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p>Purchasing machinery online is complex due to multiple challenges:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Lack of trust in sellers and product authenticity
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Poor user experience in existing B2B platforms
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Limited payment options for high-value transactions
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Complex vendor onboarding and listing processes
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research & Insights */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold">Research & Insights</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-indigo-600">Vendor Pain Points</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li>• High listing fees on existing platforms</li>
                      <li>• Commission cuts reducing profits</li>
                      <li>• Difficulty reaching the right buyers</li>
                      <li>• Complex product listing processes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-purple-600">Buyer Requirements</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li>• Authentic and verified listings</li>
                      <li>• Simple comparison tools</li>
                      <li>• Secure payment integration</li>
                      <li>• Transparent seller information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold">Our Solution</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  A specialized e-commerce website designed for machinery sales, focusing on trust, simplicity, secure transactions, and user-friendly interface.
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg">
                    <Shield className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Trust</h3>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Simplicity</h3>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg">
                    <ShoppingCart className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Security</h3>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-lg">
                    <Users className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <h3 className="font-semibold">User-Friendly</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Key Features Implemented</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-indigo-600">User-friendly Interface</h3>
                      <p className="text-slate-600 dark:text-slate-300">Intuitive design for easy navigation and product discovery</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-indigo-600">Vendor Onboarding System</h3>
                      <p className="text-slate-600 dark:text-slate-300">Streamlined registration and verification process</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-indigo-600">Product Details & Comparisons</h3>
                      <p className="text-slate-600 dark:text-slate-300">Comprehensive specifications and side-by-side comparisons</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-indigo-600">Secure Payment Integration</h3>
                      <p className="text-slate-600 dark:text-slate-300">Multiple payment options with escrow protection</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-indigo-600">Order Tracking</h3>
                      <p className="text-slate-600 dark:text-slate-300">Real-time updates on purchase and delivery status</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-indigo-600">Wishlist & Inquiry System</h3>
                      <p className="text-slate-600 dark:text-slate-300">Save favorites and direct seller communication</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-indigo-600">Quotation System</h3>
                      <p className="text-slate-600 dark:text-slate-300">Request and manage custom quotes from vendors</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Roadmap */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Product Roadmap</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-500 pl-6">
                    <h3 className="font-semibold text-lg text-indigo-600 mb-2">Phase 1 (MVP)</h3>
                    <p className="text-slate-600 dark:text-slate-300">Vendor onboarding, product listing, secure payments, order tracking</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="font-semibold text-lg text-purple-600 mb-2">Phase 2</h3>
                    <p className="text-slate-600 dark:text-slate-300">Quotation system, machinery comparisons, buyer-seller chat</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="font-semibold text-lg text-green-600 mb-2">Phase 3</h3>
                    <p className="text-slate-600 dark:text-slate-300">Vendor analytics dashboard, financing/EMI integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Go-to-Market Strategy */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold">Go-to-Market Strategy</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg">
                      <h3 className="font-semibold mb-2">Vendor Partnerships</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Partnered with local machinery vendors to list products on the platform</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                      <h3 className="font-semibold mb-2">Digital Marketing</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Targeted campaigns for industrial buyers and B2B decision makers</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                      <h3 className="font-semibold mb-2">Zero Commission</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Offered zero commission during early adoption to onboard sellers</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-lg">
                      <h3 className="font-semibold mb-2">Trust Building</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Highlighted certifications, warranties, and secure payments</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Learnings */}
            <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Key Learnings & Impact</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
                      <div className="text-slate-600 dark:text-slate-300">Verified Sellers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                      <div className="text-slate-600 dark:text-slate-300">Machinery Listings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                      <div className="text-slate-600 dark:text-slate-300">User Satisfaction</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-600 dark:text-slate-300">
                    <p><strong>Trust is Paramount:</strong> Implementing seller verification and secure payments became the foundation of user confidence.</p>
                    <p><strong>Simplified B2B Experience:</strong> Streamlined vendor onboarding reduced listing time from hours to minutes.</p>
                    <p><strong>Direct Communication:</strong> Built-in inquiry and quotation systems eliminated communication barriers between buyers and sellers.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <a 
                href="https://martxmart.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Visit MartxMart.com
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MartxMartCaseStudy