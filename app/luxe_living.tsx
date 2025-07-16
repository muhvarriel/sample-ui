'use client'

import React, { useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const LuxeLivingHeroPage: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [isCookies, setIsCookies] = useState(false)

  // Type definitions
  interface Feature {
    id: number
    title: string
    description: string
    icon: string
    gradient: string
  }

  const features: Feature[] = [
    {
      id: 1,
      title: "Smart Wardrobe",
      description: "AI-powered outfit recommendations based on weather, occasion, and personal style",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Fashion Analytics",
      description: "Track your style evolution and discover trending pieces in your area",
      icon: "📊",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      title: "Virtual Styling",
      description: "Connect with professional stylists and try outfits virtually",
      icon: "✨",
      gradient: "from-violet-500 to-purple-500"
    }
  ]

  return (
    <div className="min-h-screen bg-[#1A1B3A] overflow-hidden">
      {/* Custom Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700&display=swap');
      `}</style>

      {/* Navigation Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1A1B3A]/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D50A0] to-[#05AAEF] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-[#F8FAFC] font-['Poppins'] font-semibold text-xl">LuxeLiving</span>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8">
              {['Features', 'Smart Home', 'Fashion', 'Lifestyle', 'About'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -2 }}
                  className="text-[#F8FAFC]/70 hover:text-[#F8FAFC] transition-colors duration-300 font-['Inter'] font-medium text-sm"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block bg-gradient-to-r from-[#0D50A0] to-[#06B6D4] text-white px-6 py-3 rounded-xl font-['Inter'] font-semibold text-sm shadow-lg shadow-[#0D50A0]/25 hover:shadow-xl hover:shadow-[#0D50A0]/30 transition-all duration-300"
            >
              Get Started
            </motion.button>

            <button className="lg:hidden text-[#F8FAFC] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-24">
        {/* Background Elements */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#0D50A0]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ opacity }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0D50A0]/10 to-[#06B6D4]/10 border border-[#0D50A0]/20 rounded-full px-4 py-2 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
                </span>
                <span className="text-[#06B6D4] text-sm font-medium">New: Smart Fashion AI</span>
              </motion.div>

              <h1 className="font-['Poppins'] font-bold text-6xl lg:text-7xl text-[#F8FAFC] leading-tight mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block"
                >
                  Elevate Your
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="block bg-gradient-to-r from-[#0D50A0] via-[#05AAEF] to-[#06B6D4] bg-clip-text text-transparent"
                >
                  Fashion Lifestyle
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-[#F8FAFC]/70 text-lg lg:text-xl leading-relaxed mb-8 font-['Inter']"
              >
                Experience the future of fashion with AI-powered style recommendations,
                smart wardrobe management, and seamless integration with your smart home ecosystem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-[#0D50A0] to-[#05AAEF] text-white px-8 py-4 rounded-xl font-['Inter'] font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#05AAEF] to-[#06B6D4]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "#F8FAFC" }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 rounded-xl font-['Inter'] font-semibold border-2 border-[#F8FAFC]/20 text-[#F8FAFC] hover:bg-[#F8FAFC]/5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Watch Demo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-8 mt-12"
              >
                {[
                  { value: "50K+", label: "Active Users" },
                  { value: "10M+", label: "Outfits Created" },
                  { value: "98%", label: "Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-left"
                  >
                    <h3 className="text-3xl font-['Poppins'] font-bold text-[#F8FAFC]">{stat.value}</h3>
                    <p className="text-[#F8FAFC]/50 text-sm font-['Inter']">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=80"
                  alt="Fashion Shopping"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0D50A0] to-[#05AAEF] rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">👗</span>
                    </div>
                    <div>
                      <p className="font-['Poppins'] font-semibold text-[#1A1B3A]">Smart Match</p>
                      <p className="text-[#64748B] text-sm">AI Style Assistant</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <p className="font-['Poppins'] font-semibold text-[#1A1B3A]">IoT Connected</p>
                      <p className="text-[#64748B] text-sm">Smart Wardrobe</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#0D50A0]/20 to-[#06B6D4]/20 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] font-bold text-4xl lg:text-5xl text-[#F8FAFC] mb-4">
              Experience the Future of
              <span className="block bg-gradient-to-r from-[#0D50A0] to-[#06B6D4] bg-clip-text text-transparent">
                Smart Fashion Living
              </span>
            </h2>
            <p className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto font-['Inter']">
              Discover how LuxeLiving transforms your daily fashion choices with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(feature.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`relative bg-gradient-to-br ${hoveredCard === feature.id
                    ? 'from-[#F8FAFC]/10 to-[#F8FAFC]/5'
                    : 'from-[#F8FAFC]/5 to-transparent'
                    } backdrop-blur-xl border border-[#F8FAFC]/10 rounded-2xl p-8 h-full transition-all duration-300`}
                >
                  <motion.div
                    animate={{
                      scale: hoveredCard === feature.id ? 1.1 : 1,
                      rotate: hoveredCard === feature.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </motion.div>

                  <h3 className="font-['Poppins'] font-semibold text-2xl text-[#F8FAFC] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#F8FAFC]/60 font-['Inter'] leading-relaxed">
                    {feature.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredCard === feature.id ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0D50A0] to-[#06B6D4] rounded-b-2xl"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="bg-gradient-to-r from-[#0D50A0] to-[#06B6D4] rounded-3xl p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full" />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="font-['Poppins'] font-bold text-4xl lg:text-5xl text-white mb-6">
                Ready to Transform Your
                <span className="block">Fashion Experience?</span>
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-['Inter']">
                Join thousands of fashion-forward individuals who are already experiencing
                the future of smart fashion living.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button className="bg-white text-[#0D50A0] px-8 py-4 rounded-xl font-['Inter'] font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 mx-auto">
                  Get Started Now
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </motion.div>

              <p className="text-white/70 text-sm mt-6 font-['Inter']">
                No credit card required • 30-day free trial • Cancel anytime.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Product Showcase Section */}
      <section className="relative py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#06B6D4] font-['Inter'] font-medium text-sm tracking-wider uppercase mb-4 block">
              Smart Products
            </span>
            <h2 className="font-['Poppins'] font-bold text-4xl lg:text-5xl text-[#F8FAFC] mb-4">
              Integrated Fashion Ecosystem
            </h2>
            <p className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto font-['Inter']">
              Seamlessly connect your wardrobe with smart home devices for the ultimate lifestyle experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: "Smart Mirror",
                  description: "Virtual try-on with AR technology and personalized recommendations",
                  icon: "🪞",
                  color: "from-[#0D50A0] to-[#05AAEF]"
                },
                {
                  title: "Climate Control",
                  description: "Automatic wardrobe suggestions based on weather and indoor temperature",
                  icon: "🌡️",
                  color: "from-[#06B6D4] to-[#0891B2]"
                },
                {
                  title: "RFID Wardrobe",
                  description: "Track your clothes, get outfit statistics, and manage your fashion inventory",
                  icon: "📡",
                  color: "from-[#05AAEF] to-[#A855F7]"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </motion.div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-xl text-[#F8FAFC] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#F8FAFC]/60 font-['Inter']">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1618386230353-3631c1365be2?w=800&q=80"
                alt="Smart Wardrobe"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="space-y-1">
                    <p className="text-[#64748B] text-xs font-['Inter']">Today&apos;s Outfit Score</p>
                    <p className="text-[#1A1B3A] font-['Poppins'] font-bold text-2xl">9.5/10</p>
                  </div>
                  <div className="w-16 h-16 relative">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="#E2E8F0"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28 * 0.95} ${2 * Math.PI * 28}`}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient">
                          <stop offset="0%" stopColor="#0D50A0" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-8 bg-gradient-to-b from-transparent via-[#0D50A0]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] font-bold text-4xl lg:text-5xl text-[#F8FAFC] mb-4">
              Loved by Fashion Enthusiasts
            </h2>
            <p className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto font-['Inter']">
              See what our community says about their LuxeLiving experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fashion Blogger",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
                content: "LuxeLiving has completely transformed how I plan my outfits. The AI suggestions are spot-on!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Tech Executive",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                content: "The smart wardrobe integration with my home automation is genius. Saves me time every morning.",
                rating: 5
              },
              {
                name: "Emma Williams",
                role: "Lifestyle Influencer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
                content: "I love how it tracks my fashion choices and helps me make more sustainable decisions.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#F8FAFC]/5 backdrop-blur-xl border border-[#F8FAFC]/10 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="text-[#F59E0B] text-xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-[#F8FAFC]/80 font-['Inter'] mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-['Poppins'] font-semibold text-[#F8FAFC]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#F8FAFC]/50 text-sm font-['Inter']">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Poppins'] font-bold text-4xl lg:text-5xl text-[#F8FAFC] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#F8FAFC]/70 text-lg font-['Inter']">
              Everything you need to know about LuxeLiving
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How does the AI styling assistant work?",
                answer: "Our AI analyzes your fashion preferences, body type, local weather, and upcoming events to provide personalized outfit recommendations."
              },
              {
                question: "Is my fashion data secure?",
                answer: "Absolutely. We use bank-level encryption and never share your personal data. You have full control over your privacy settings."
              },
              {
                question: "Can I integrate with existing smart home systems?",
                answer: "Yes! LuxeLiving works seamlessly with popular platforms like Google Home, Alexa, and Apple HomeKit."
              },
              {
                question: "What's included in the free trial?",
                answer: "You get full access to all features for 30 days, including AI styling, smart wardrobe management, and IoT integrations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#F8FAFC]/5 backdrop-blur-xl border border-[#F8FAFC]/10 rounded-xl p-6 cursor-pointer hover:border-[#0D50A0]/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Poppins'] font-semibold text-lg text-[#F8FAFC] pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      className="text-[#0D50A0]"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-[#F8FAFC]/60 font-['Inter'] mt-3">
                    {faq.answer}.
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24 px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#1A1B3A] via-[#2D2E4A] to-[#1A1B3A] rounded-3xl p-12 border border-[#F8FAFC]/10 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D50A0]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06B6D4]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-br from-[#0D50A0] to-[#06B6D4] rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-3xl">📬</span>
              </motion.div>

              <h2 className="font-['Poppins'] font-bold text-3xl lg:text-4xl text-[#F8FAFC] mb-4">
                Stay in Style
              </h2>
              <p className="text-[#F8FAFC]/70 text-lg mb-8 max-w-2xl mx-auto font-['Inter']">
                Get weekly fashion tips, AI styling insights, and exclusive updates delivered to your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-[#F8FAFC]/10 backdrop-blur-xl border border-[#F8FAFC]/20 rounded-xl text-[#F8FAFC] placeholder-[#F8FAFC]/40 font-['Inter'] focus:outline-none focus:border-[#0D50A0] transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[#0D50A0] to-[#06B6D4] text-white rounded-xl font-['Inter'] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>

              <p className="text-[#F8FAFC]/50 text-sm mt-4 font-['Inter']">
                No spam, unsubscribe anytime. Read our <a href="#" className="underline hover:text-[#0D50A0] transition-colors">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="relative py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#F8FAFC]/50 font-['Inter'] text-sm uppercase tracking-wider mb-8">
              Trusted by Leading Fashion & Tech Brands
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              {['ZARA', 'H&M', 'NIKE', 'ADIDAS'].map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center"
                >
                  <div className="text-[#F8FAFC]/30 font-['Poppins'] font-bold text-2xl lg:text-3xl hover:text-[#F8FAFC]/50 transition-colors duration-300">
                    {brand}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Before Footer */}
      <section className="relative py-16 px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#F8FAFC]/5 to-[#F8FAFC]/10 backdrop-blur-xl border border-[#F8FAFC]/10 rounded-3xl p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-['Poppins'] font-bold text-2xl lg:text-3xl text-[#F8FAFC] mb-2">
                Ready to revolutionize your fashion journey?
              </h3>
              <p className="text-[#F8FAFC]/70 font-['Inter']">
                Join thousands who&apos;ve already upgraded their style game with LuxeLiving
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#0D50A0] to-[#06B6D4] text-white rounded-xl font-['Inter'] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-[#F8FAFC]/20 text-[#F8FAFC] rounded-xl font-['Inter'] font-semibold hover:bg-[#F8FAFC]/5 transition-all duration-300"
              >
                Book a Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-8 border-t border-[#F8FAFC]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D50A0] to-[#05AAEF] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-[#F8FAFC] font-['Poppins'] font-semibold text-xl">LuxeLiving</span>
              </div>
              <p className="text-[#F8FAFC]/60 font-['Inter'] text-sm">
                Elevating fashion through AI and smart technology. Your personal style assistant for the modern world.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                {['twitter', 'instagram', 'linkedin', 'youtube'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-[#F8FAFC]/5 hover:bg-[#F8FAFC]/10 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-[#F8FAFC]/70 text-sm capitalize">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-['Poppins'] font-semibold text-[#F8FAFC] mb-4">Product</h4>
                <ul className="space-y-3">
                  {['Features', 'AI Styling', 'Smart Wardrobe', 'Integrations', 'Pricing'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#F8FAFC]/60 hover:text-[#F8FAFC] font-['Inter'] text-sm transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-['Poppins'] font-semibold text-[#F8FAFC] mb-4">Company</h4>
                <ul className="space-y-3">
                  {['About Us', 'Careers', 'Press', 'Blog', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#F8FAFC]/60 hover:text-[#F8FAFC] font-['Inter'] text-sm transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-['Poppins'] font-semibold text-[#F8FAFC] mb-4">Support</h4>
                <ul className="space-y-3">
                  {['Help Center', 'Community', 'API Docs', 'Status', 'Terms & Privacy'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#F8FAFC]/60 hover:text-[#F8FAFC] font-['Inter'] text-sm transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-[#F8FAFC]/10 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-[#F8FAFC]/50 font-['Inter'] text-sm">
              © 2024 LuxeLiving. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-[#F8FAFC]/50 hover:text-[#F8FAFC]/80 font-['Inter'] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#F8FAFC]/50 hover:text-[#F8FAFC]/80 font-['Inter'] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-[#F8FAFC]/50 hover:text-[#F8FAFC]/80 font-['Inter'] text-sm transition-colors duration-300">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrollY.get() > 500 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#0D50A0] to-[#06B6D4] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {isCookies && (<motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-[#1A1B3A]/95 backdrop-blur-xl border-t border-[#F8FAFC]/10 p-6 z-40"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D50A0] to-[#06B6D4] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🍪</span>
              </div>
              <p className="text-[#F8FAFC]/80 font-['Inter'] text-sm">
                We use cookies to enhance your experience. By continuing, you agree to our cookie policy.
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCookies(false)}
                className="px-6 py-2 bg-gradient-to-r from-[#0D50A0] to-[#06B6D4] text-white rounded-lg font-['Inter'] text-sm font-medium"
              >
                Accept All
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-[#F8FAFC]/20 text-[#F8FAFC] rounded-lg font-['Inter'] text-sm font-medium hover:bg-[#F8FAFC]/5"
              >
                Manage
              </motion.button>
            </div>
          </div>
        </motion.div>)}
      </AnimatePresence>
    </div>
  )
}

export default LuxeLivingHeroPage