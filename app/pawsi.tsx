"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, easeInOut, easeOut } from 'framer-motion';

const PAWSILandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            text: "PAWSI benar-benar mengubah cara kami mengelola bisnis grooming. Booking online naik 300% dalam sebulan pertama!",
            author: "Sarah Wijaya",
            role: "Owner",
            company: "Fluffy Friends Grooming Jakarta"
        },
        {
            text: "Sistem reminder otomatis dan manajemen jadwal membuat bisnis grooming kami jalan otomatis. Staff jadi lebih fokus ke layanan.",
            author: "Budi Santoso",
            role: "Founder",
            company: "Pet Paradise Surabaya"
        },
        {
            text: "Akhirnya ada sistem yang dibuat khusus untuk bisnis pet care. Reminder otomatis dan proses pembayaran menghemat 10+ jam kerja per minggu.",
            author: "Dr. Maya Putri",
            role: "Founder",
            company: "VetCare Plus Surabaya"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: easeInOut
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 font-['Inter',sans-serif] overflow-x-hidden">
            <style jsx>{`
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
       
       .gradient-text {
         background: linear-gradient(135deg, #8B5CF6 0%, #5B21B6 100%);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         background-clip: text;
       }
       
       .glass-card {
         background: rgba(255, 255, 255, 0.7);
         backdrop-filter: blur(10px);
         border: 1px solid rgba(255, 255, 255, 0.2);
       }
       
       .floating-dots {
         position: absolute;
         width: 6px;
         height: 6px;
         background: linear-gradient(45deg, #8B5CF6, #EC4899);
         border-radius: 50%;
       }
       
       .hero-bg {
         background: 
           radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
           radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
           radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
       }
     `}</style>

            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    className="floating-dots top-20 left-20"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="floating-dots top-40 right-32"
                    animate={{
                        x: [0, -25, 0],
                        y: [0, 15, 0],
                        scale: [1, 0.8, 1]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="floating-dots bottom-32 left-40"
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-50 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-purple-100"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <span className="text-2xl font-bold gradient-text">PAWSI</span>
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        {['Beranda', 'Fitur', 'Harga', 'FAQ'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
                                whileHover={{ y: -2 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-purple-200 transition-all duration-300"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            Login
                        </motion.button>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 pb-4 border-t border-purple-100"
                        >
                            {['Beranda', 'Fitur', 'Harga', 'FAQ', 'Login'].map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 text-gray-700 hover:text-purple-600 transition-colors no-underline"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero Section */}
            <section className="relative py-20 px-6 hero-bg">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className="space-y-8">
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium"
                            >
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                "Bisnis grooming kami sekarang jalan otomatis."
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl lg:text-7xl font-black leading-tight"
                            >
                                <span className="text-gray-900">Stop Sibuk</span>{' '}
                                <span className="gradient-text">Mengurus,</span>
                                <br />
                                <span className="text-gray-900">Mulai Kembangkan</span>{' '}
                                <span className="gradient-text">Bisnis Pet Care</span>{' '}
                                <span className="text-gray-900">Anda</span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                            >
                                Sistem booking online, manajemen pelanggan, dan analitik
                                <br />
                                <span className="font-semibold text-gray-800">untuk bisnis pet care modern Indonesia</span>
                            </motion.p>

                            <motion.p
                                variants={itemVariants}
                                className="text-gray-500 leading-relaxed"
                            >
                                Semua yang Anda butuhkan untuk menjalankan salon grooming, hotel hewan, daycare, atau klinik veteriner.
                                <span className="font-medium text-purple-600"> Mulai terima booking hari ini juga.</span>
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                                        y: -2
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-300 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span>Coba Gratis 14 Hari</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span>Lihat Demo</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 4a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14z" />
                                    </svg>
                                </motion.button>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex items-center space-x-6 pt-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-red-600">2 Spots Left</span>
                                </div>
                                <div className="text-sm text-gray-500">✓ Gratis 14 hari</div>
                                <div className="text-sm text-gray-500">✓ Tanpa kartu kredit</div>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={floatingVariants}
                            animate="animate"
                            className="relative"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                                className="relative z-1">
                                <img
                                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Pet grooming professional dashboard"
                                    className="w-full rounded-3xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-3xl"></div>
                            </motion.div>

                            {/* Floating Stats Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                                className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-xl z-10 bg-white"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-800">500+ Bisnis</div>
                                        <div className="text-xs text-gray-500">Pet Care Indonesia</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.4 }}
                                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl z-10 bg-white"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-800">Uptime 99.9%</div>
                                        <div className="text-xs text-gray-500">Keamanan Tingkat Enterprise</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="fitur" className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-black mb-6">
                            <span className="gradient-text">Fitur yang Mendorong</span>{' '}
                            <span className="text-gray-900">Pertumbuhan Nyata</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Semua yang dibutuhkan bisnis pet care yang berkembang — dari booking hingga analitik.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "📅",
                                title: "Booking Online",
                                description: "Sistem booking 24/7 yang mudah digunakan pelanggan. Otomatis sinkron dengan jadwal bisnis Anda.",
                                color: "from-blue-500 to-cyan-500",
                                delay: 0.2
                            },
                            {
                                icon: "📊",
                                title: "Analitik Bisnis",
                                description: "Dashboard lengkap untuk memantau performa bisnis, revenue, dan tren pelanggan.",
                                color: "from-purple-500 to-pink-500",
                                delay: 0.4
                            },
                            {
                                icon: "🔔",
                                title: "Reminder Otomatis",
                                description: "Notifikasi otomatis untuk appointment, vaksinasi, dan follow-up pelanggan.",
                                color: "from-emerald-500 to-teal-500",
                                delay: 0.6
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: feature.delay }}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                className="group"
                            >
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg`}
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: feature.delay + 0.3 }}
                                        className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6 origin-left`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PAWSILandingPage;