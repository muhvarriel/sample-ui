'use client'

import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { motion, AnimatePresence } from 'framer-motion';

const ArobixHeroPage: NextPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(3);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // Use Framer Motion's built-in easing array for "easeInOut"
  const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut, delay: 0.1 }, viewport: { once: true } },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
      viewport: { once: true }
    }
  };

  const itemFadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, ease: easeInOut, repeat: Infinity },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['all', 'new arrivals', 'women', 'men', 'accessories', 'sale'];

  const featuredProducts = [
    {
      id: 1,
      name: 'Minimalist Leather Jacket',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      badge: 'New',
      discount: '-25%'
    },
    {
      id: 2,
      name: 'Premium Cotton T-Shirt',
      price: 79,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      badge: 'Bestseller'
    },
    {
      id: 3,
      name: 'Designer Sunglasses',
      price: 189,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
      discount: '-24%'
    },
    {
      id: 4,
      name: 'Elegant Summer Dress',
      price: 159,
      image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=800&q=80',
      badge: 'Limited'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Navigation Header */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-4' : 'bg-white/95 backdrop-blur-md py-6'
          }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-12">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold text-[#1F2937] tracking-tight hover:text-[#6366F1] transition-colors duration-300 cursor-pointer">
                AROBIX
              </motion.h1>

              {/* Desktop Menu */}
              <motion.nav variants={staggerContainer} initial="initial" animate="animate" className="hidden lg:flex items-center space-x-8">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    variants={itemFadeInUp}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category)}
                    className={`capitalize font-medium transition-all duration-300 hover:text-[#6366F1] relative ${activeCategory === category
                      ? 'text-[#6366F1]'
                      : 'text-[#6B7280]'
                      }`}
                  >
                    {category}
                    <AnimatePresence>
                      {activeCategory === category && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#6366F1]"></motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </motion.nav>
            </div>

            {/* Right Actions */}
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="flex items-center space-x-6">
              {/* Search */}
              <motion.div variants={itemFadeInUp} className="relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 hover:bg-[#F3F4F6] rounded-full transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.button>
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-0 top-12 w-80 bg-white shadow-2xl rounded-2xl p-4">
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-3 bg-[#F9FAFB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all duration-300"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Wishlist */}
              <motion.button variants={itemFadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 hover:bg-[#F3F4F6] rounded-full transition-all duration-300 relative">
                <svg className="w-5 h-5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </motion.button>

              {/* Cart */}
              <motion.button variants={itemFadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 hover:bg-[#F3F4F6] rounded-full transition-all duration-300 relative">
                <svg className="w-5 h-5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartItemsCount > 0 && (
                  <motion.span
                    animate={pulseAnimation}
                    className="absolute -top-1 -right-1 h-5 w-5 bg-[#6366F1] text-white text-xs font-semibold rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </motion.span>
                )}
              </motion.button>

              {/* User */}
              <motion.button variants={itemFadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 hover:bg-[#F3F4F6] rounded-full transition-all duration-300">
                <svg className="w-5 h-5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620226346750-3aea895ac33f?w=1920&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-20">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Badge */}
              <motion.div variants={itemFadeInUp} className="inline-flex items-center space-x-2 bg-[#6366F1]/10 px-4 py-2 rounded-full">
                <motion.div animate={pulseAnimation} className="w-2 h-2 bg-[#6366F1] rounded-full"></motion.div>
                <span className="text-[#6366F1] font-medium text-sm">Summer Collection 2024</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 variants={itemFadeInUp} className="text-5xl lg:text-7xl font-bold text-[#1F2937] leading-tight">
                Elevate Your
                <span className="block text-[#6366F1] mt-2">Fashion Game</span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemFadeInUp} className="text-lg text-[#6B7280] leading-relaxed max-w-lg">
                Discover our curated collection of premium fashion pieces. From timeless classics to modern statements, find your perfect style.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemFadeInUp} className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(99, 102, 241, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-[#6366F1] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-[#5558E3] flex items-center space-x-2">
                  <span>Shop Collection</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#E5E7EB] text-[#1F2937] font-semibold rounded-xl transition-all duration-300 hover:border-[#6366F1] hover:text-[#6366F1]">
                  Watch Lookbook
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={staggerContainer} className="flex space-x-8 pt-8">
                <motion.div variants={itemFadeInUp} className="border-r border-[#E5E7EB] pr-8">
                  <h3 className="text-3xl font-bold text-[#1F2937]">50K+</h3>
                  <p className="text-sm text-[#6B7280]">Happy Customers</p>
                </motion.div>
                <motion.div variants={itemFadeInUp} className="border-r border-[#E5E7EB] pr-8">
                  <h3 className="text-3xl font-bold text-[#1F2937]">1000+</h3>
                  <p className="text-sm text-[#6B7280]">Premium Products</p>
                </motion.div>
                <motion.div variants={itemFadeInUp}>
                  <h3 className="text-3xl font-bold text-[#1F2937]">98%</h3>
                  <p className="text-sm text-[#6B7280]">Satisfaction Rate</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Product */}
            <motion.div
              variants={fadeInUp}
              className="relative">
              <motion.div
                whileHover={{ y: -8, boxShadow: "0px 20px 30px rgba(0,0,0,0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative">
                {/* Decorative Elements */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-3xl"></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-3xl"></motion.div>

                {/* Featured Product Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="absolute top-4 right-4 bg-[#EF4444] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -30% OFF
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
                    alt="Featured Product"
                    className="w-full h-96 object-cover rounded-2xl mb-6"
                  />

                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Premium Summer Collection</h3>
                  <p className="text-[#6B7280] mb-4">Limited Edition Designer Piece</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-[#6366F1]">$199</span>
                      <span className="text-lg text-[#6B7280] line-through ml-2">$299</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-[#6366F1] text-white rounded-xl hover:bg-[#5558E3] transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16">
            <motion.h2 variants={itemFadeInUp} className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              Featured Products
            </motion.h2>
            <motion.p variants={itemFadeInUp} className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Handpicked pieces that define contemporary fashion
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <motion.div
                  custom={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -8, boxShadow: "0px 15px 25px rgba(0,0,0,0.1)" }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
                  {/* Product Image */}
                  <div className="relative h-80 overflow-hidden bg-[#F3F4F6]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Badges */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-[#10B981] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </span>
                    )}
                    {product.discount && (
                      <span className="absolute top-4 right-4 bg-[#EF4444] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.discount}
                      </span>
                    )}

                    {/* Quick Actions */}
                    <AnimatePresence>
                      {hoveredProduct === product.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#6366F1", color: "white" }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white rounded-full transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#6366F1", color: "white" }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white rounded-full transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#6366F1", color: "white" }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white rounded-full transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2 group-hover:text-[#6366F1] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-[#6366F1]">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-base text-[#6B7280] line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <motion.button
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#1F2937] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-[#111827] inline-flex items-center space-x-2 group">
              <span>View All Products</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={itemFadeInUp} className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get 15% Off Your First Order
            </motion.h2>
            <motion.p variants={itemFadeInUp} className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter and be the first to know about new collections, exclusive deals, and fashion tips.
            </motion.p>

            <motion.form variants={itemFadeInUp} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/20 backdrop-blur-md text-white placeholder:text-white/70 border border-white/30 focus:outline-none focus:border-white transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-white text-[#6366F1] font-semibold rounded-xl hover:bg-white/90 transition-all duration-300"
              >
                Subscribe Now
              </motion.button>
            </motion.form>

            <motion.p variants={itemFadeInUp} className="text-sm text-white/70 mt-4">
              No spam, unsubscribe at any time. Read our Privacy Policy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Brand Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
                title: 'Free Worldwide Shipping',
                description: 'On orders over $100'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                ),
                title: 'Easy 30-Day Returns',
                description: 'Shop with confidence'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Secure Payment',
                description: '100% secure transactions'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: '24/7 Customer Support',
                description: 'Here to help anytime'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemFadeInUp}
                whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" }}
                className="text-center group cursor-pointer p-4 rounded-xl"
              >
                <motion.div
                  whileHover={{ scale: 1.1, backgroundColor: "#6366F1", color: "white" }}
                  className="inline-flex p-4 bg-[#F3F4F6] text-[#6366F1] rounded-2xl transition-all duration-300 mb-4">
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{feature.title}</h3>
                <p className="text-[#6B7280]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
            <motion.h2 variants={itemFadeInUp} className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              What Our Customers Say
            </motion.h2>
            <motion.p variants={itemFadeInUp} className="text-lg text-[#6B7280]">
              Join thousands of satisfied customers worldwide
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Fashion Blogger',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
                review: 'Absolutely love the quality and style! The customer service is exceptional and shipping was super fast.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Photographer',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
                review: 'Best online shopping experience! The clothes fit perfectly and the material quality exceeds expectations.',
                rating: 5
              },
              {
                name: 'Emma Davis',
                role: 'Designer',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                review: 'Trendy designs at affordable prices. I\'ve become a regular customer and recommend to all my friends!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemFadeInUp}
                whileHover={{ y: -8, boxShadow: "0px 15px 25px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#1F2937]">{testimonial.name}</h4>
                    <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#6B7280] italic">"{testimonial.review}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12">
            <motion.h2 variants={itemFadeInUp} className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              Follow @arobixfashion
            </motion.h2>
            <motion.p variants={itemFadeInUp} className="text-lg text-[#6B7280]">
              Tag us to be featured on our page
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
              'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
              'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80',
              'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
              'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
              'https://images.unsplash.com/photo-1475180429745-7bdddbdf4e3d?w=400&q=80'
            ].map((image, index) => (
              <div
                key={index}>
                <motion.div
                  variants={itemFadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden rounded-xl cursor-pointer">
                  <img
                    src={image}
                    alt={`Instagram ${index + 1}`}
                    className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 bg-gradient-to-br from-[#1F2937] to-[#111827] relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-3xl"></motion.div>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl"></motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemFadeInUp} className="text-white space-y-6">
              <motion.h2 variants={itemFadeInUp} className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Upgrade Your Wardrobe?
              </motion.h2>
              <motion.p variants={itemFadeInUp} className="text-lg text-gray-300">
                Join millions of fashion enthusiasts who trust Arobix for their style needs. Get exclusive access to new collections and member-only benefits.
              </motion.p>
              <motion.div variants={itemFadeInUp} className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(99, 102, 241, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#6366F1] text-white font-semibold rounded-xl hover:bg-[#5558E3] transition-all duration-300">
                  Start Shopping
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "white", color: "#1F2937" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl transition-all duration-300">
                  Create Account
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemFadeInUp} className="relative">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
                alt="Fashion Collection"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div animate={pulseAnimation} className="absolute -top-6 -right-6 bg-[#F59E0B] text-white px-6 py-3 rounded-full font-semibold">
                Limited Time Offer
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        className="bg-white pt-20 pb-8 border-t border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Footer Top */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-[#1F2937] mb-4">AROBIX</h3>
              <p className="text-[#6B7280] mb-6 max-w-sm">
                Your destination for contemporary fashion. Curated collections that define modern style.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: 'facebook', href: '#' },
                  { icon: 'instagram', href: '#' },
                  { icon: 'twitter', href: '#' },
                  { icon: 'youtube', href: '#' }
                ].map((social) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: "#6366F1", color: "white" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-[#F3F4F6] rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    {social.icon === 'facebook' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                      </svg>
                    )}
                    {social.icon === 'twitter' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-[#1F2937] mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['New Arrivals', 'Best Sellers', 'Sale Items', 'Gift Cards', 'Find a Store'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#6B7280] hover:text-[#6366F1] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold text-[#1F2937] mb-4">Customer Service</h4>
              <ul className="space-y-3">
                {['Contact Us', 'Shipping Info', 'Returns & Exchanges', 'Size Guide', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#6B7280] hover:text-[#6366F1] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-lg font-semibold text-[#1F2937] mb-4">About Arobix</h4>
              <ul className="space-y-3">
                {['Our Story', 'Sustainability', 'Careers', 'Press', 'Affiliates'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#6B7280] hover:text-[#6366F1] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-[#E5E7EB] pt-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#6B7280] mb-4 md:mb-0">Secure Payment Methods</p>
              <div className="flex space-x-4">
                {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'].map((payment) => (
                  <div key={payment} className="px-4 py-2 bg-[#F3F4F6] rounded-lg text-[#6B7280] text-sm font-medium">
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#E5E7EB] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#6B7280] text-sm mb-4 md:mb-0">
                © 2024 Arobix Fashion. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-[#6B7280] text-sm hover:text-[#6366F1] transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-[#6B7280] text-sm hover:text-[#6366F1] transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-[#6B7280] text-sm hover:text-[#6366F1] transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default ArobixHeroPage;