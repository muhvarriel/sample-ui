"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedButton from './components/AnimatedButton';

const PAWSILandingPage = () => {
    const [selectedPlan, setSelectedPlan] = useState('BULAN');
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

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
                ease: "easeOut" as const
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const
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
                className={`fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-purple-100 transition-shadow duration-300 ${scrollYProgress && typeof window !== "undefined" && window.scrollY > 8 ? "shadow-md" : ""
                    }`}
                style={{ boxShadow: scrollYProgress && typeof window !== "undefined" && window.scrollY > 8 ? "0 2px 16px rgba(139,92,246,0.10)" : "none" }}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <span className="text-2xl font-bold gradient-text">PAWSI</span>
                    </motion.div>

                    <div className="flex items-center space-x-8">
                        <AnimatedButton
                            bgColorClass="bg-black"
                            hoverBgColor="hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700"
                            textColorClass="text-white"
                        >
                            Coba Gratis 14 Hari
                        </AnimatedButton>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 hero-bg">
                <div className="max-w-6xl mx-auto">
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
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                                Platform #1 untuk Bisnis Pet Care Modern
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-3xl lg:text-4xl font-bold leading-tight"
                            >
                                <span className="text-gray-900">Stop Repot Urus Jadwal,</span>
                                <br />
                                <span className="gradient-text">Fokus Kembangkan</span>{' '}
                                <span className="text-gray-900">Bisnis Pet Care Anda</span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-gray-500 leading-relaxed"
                            >
                                Platform all-in-one dengan booking online, manajemen pelanggan, dan pengingat otomatis.
                                <span className="font-semibold text-gray-800"> Dirancang untuk bisnis pet care modern di Indonesia.</span>
                            </motion.p>

                            <motion.p
                                variants={itemVariants}
                                className="text-gray-500 leading-relaxed"
                            >
                                Semua yang Anda butuhkan untuk menjalankan salon grooming, hotel hewan, daycare, atau klinik veteriner.
                                <span className="font-medium text-purple-600"> Siap terima booking online dalam hitungan menit.</span>
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                                <AnimatedButton
                                    bgColorClass="bg-black"
                                    hoverBgColor="hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700"
                                    textColorClass="text-white"
                                    icon={<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>}
                                >
                                    Coba Gratis 14 Hari
                                </AnimatedButton>

                                <AnimatedButton
                                    bgColorClass="bg-white"
                                    borderColorClass='border-1 border-purple-600'
                                    textColorClass="text-purple-600"
                                    hoverTextColor="text-purple-600"
                                    icon={<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 4a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14z" />
                                    </svg>}
                                >
                                    Lihat Demo
                                </AnimatedButton>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex items-center space-x-6 pt-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
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
                                className="relative z-1 h-[400px]">
                                <img
                                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Pet grooming professional dashboard"
                                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
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
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={itemVariants}
                        className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6"
                    >
                        Fitur
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-0 text-left flex-1">
                                <span className="gradient-text">Fitur yang Mendorong</span>{' '}
                                <span className="text-gray-900">Pertumbuhan Nyata</span>
                            </h2>
                            <div className="hidden md:block flex-1" />
                            <p className="text-lg text-gray-400 mb-0 text-left md:text-right flex-1">
                                Dari booking hingga analitik, semua alat yang Anda butuhkan untuk bertumbuh.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "📅",
                                title: "Booking Online",
                                description: "Permudah pelanggan booking kapan saja. Jadwal Anda ter-update otomatis, mengurangi tumpang tindih & human error.",
                                color: "from-blue-500 to-cyan-500",
                                delay: 0.2
                            },
                            {
                                icon: "📊",
                                title: "Analitik Bisnis",
                                description: "Pahami kesehatan bisnis Anda. Pantau pendapatan, pelanggan setia, dan layanan terlaris dengan mudah.",
                                color: "from-purple-500 to-pink-500",
                                delay: 0.4
                            },
                            {
                                icon: "🔔",
                                title: "Reminder Otomatis",
                                description: "Kurangi 'no-show' dengan pengingat jadwal otomatis via WhatsApp & Email. Jaga loyalitas pelanggan.",
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
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 transition-all duration-500 border border-gray-300 h-full">
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

            {/* Success Stories Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-100">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={itemVariants}
                        className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6"
                    >
                        Showcase
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-0 text-left flex-1">
                                <span className="gradient-text">Showcase</span>{' '}
                                <span className="text-gray-900">Pet Care Indonesia</span>
                            </h2>
                            <div className="hidden md:block flex-1" />
                            <p className="text-lg text-gray-400 mb-0 text-left md:text-right flex-1">
                                Intip hasil nyata dari bisnis pet care yang telah berkembang bersama PAWSI.
                            </p>
                        </div>
                    </motion.div>


                    <div className="relative bg-gray-900 rounded-xl p-6 mb-8 overflow-hidden">
                        {/* Left gradient overlay */}
                        <div
                            className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
                            style={{
                                background: "linear-gradient(to right, #111827 30%, rgba(17,24,39,0.6) 50%, transparent 100%)"
                            }}
                        />
                        {/* Right gradient overlay */}
                        <div
                            className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
                            style={{
                                background: "linear-gradient(to left, #111827 30%, rgba(17,24,39,0.6) 50%, transparent 100%)"
                            }}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="overflow-hidden"
                        >
                            <motion.div
                                className="flex gap-6"
                                animate={{
                                    x: ["0%", "-100%"],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 60,
                                    ease: "linear",
                                }}
                                style={{ width: "max-content" }}
                            >
                                {[
                                    "https://res.cloudinary.com/dntuvv7kc/image/upload/v1750742317/PAWPAW_-_Dashboard_wuhleh.png",
                                    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                ].map((src, idx) => (
                                    <img
                                        key={idx}
                                        src={src}
                                        alt={`Showcase ${idx + 1}`}
                                        className="rounded-lg object-cover border border-gray-700"
                                        style={{ width: 320, height: 180, minWidth: 320, minHeight: 180 }}
                                    />
                                ))}
                                {/* Duplicate for seamless infinite loop */}
                                {[
                                    "https://res.cloudinary.com/dntuvv7kc/image/upload/v1750742317/PAWPAW_-_Dashboard_wuhleh.png",
                                    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                ].map((src, idx) => (
                                    <img
                                        key={`dup-${idx}`}
                                        src={src}
                                        alt={`Showcase duplicate ${idx + 1}`}
                                        className="rounded-lg object-cover border border-gray-700"
                                        style={{ width: 320, height: 180, minWidth: 320, minHeight: 180 }}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Clinet Success Section */}
            <section id="fitur" className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={itemVariants}
                        className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6"
                    >
                        Client Success
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-0 text-left flex-1">
                                <span className="gradient-text">Bisnis Pet Care</span>{' '}
                                <span className="text-gray-900">Naik Kelas Bersama PAWSI</span>
                            </h2>
                            <div className="hidden md:block flex-1" />
                            <p className="text-lg text-gray-400 mb-0 text-left md:text-right flex-1">
                                Lihat bagaimana sistem kami membantu klien meningkatkan efisiensi dan pertumbuhan nyata.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src={`https://res.cloudinary.com/dntuvv7kc/image/upload/v1750742317/PAWPAW_-_Dashboard_wuhleh.png`}
                            alt={"PAWPAW_-_Dashboard_mkputr"}
                            className="rounded-xl object-cover border border-gray-300 mb-6"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-100">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={itemVariants}
                        className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6"
                    >
                        Testimoni
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-0 text-left flex-1">
                                <span className="text-gray-900">Kisah Sukses</span>{' '}
                                <span className="gradient-text">Pet Care Indonesia</span>
                            </h2>
                            <div className="hidden md:block flex-1" />
                            <p className="text-lg text-gray-400 mb-0 text-left md:text-right flex-1">
                                Lihat bagaimana PAWSI membantu bisnis seperti Anda meraih kesuksesan.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="glass-card rounded-3xl p-8 lg:p-12 border border-gray-300 flex flex-col items-center text-center"
                            >
                                <img
                                    src={`https://images.unsplash.com/photo-${index === 0 ? '1494790108377-be9c29b29330' : index === 1 ? '1472099645785-5658abf4ff4e' : '1559839734-2b71ea197ec2'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`}
                                    alt={testimonial.author}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mb-6"
                                />
                                <blockquote className="text-md lg:text-xl text-gray-800 font-medium mb-6 italic">
                                    &quot;{testimonial.text}&quot;
                                </blockquote>
                                <div>
                                    <div className="font-bold text-gray-900 text-lg">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-purple-600 font-medium">
                                        {testimonial.role}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {testimonial.company}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Features Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={itemVariants}
                        className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6"
                    >
                        Fasilitas
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-0 text-left flex-1">
                                <span className="text-gray-900">Dibuat untuk</span>{' '}
                                <span className="gradient-text">Profesional Pet Care Indonesia</span>
                            </h2>
                            <div className="hidden md:block flex-1" />
                            <p className="text-lg text-gray-400 mb-0 text-left md:text-right flex-1">
                                Kami mengerti alur kerja Anda. Solusi kami dirancang untuk hasil nyata bagi bisnis Anda.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🎯",
                                title: "Keahlian Pet Care",
                                description: "Dirancang oleh ahli, untuk ahli. Kami paham seluk-beluk operasional grooming, penitipan, hingga klinik hewan.",
                                image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            },
                            {
                                icon: "⚡",
                                title: "Setup Cepat",
                                description: "Online dalam sekejap. Terima booking pertama Anda di hari yang sama. Tanpa perlu keahlian teknis.",
                                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            },
                            {
                                icon: "📈",
                                title: "Pertumbuhan Terbukti",
                                description: "Dipercaya 500+ bisnis. Pengguna kami rata-rata mengalami peningkatan booking 250% dalam 3 bulan pertama.",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl overflow-hidden transition-all duration-500 border border-gray-300">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg"
                                        >
                                            {item.icon}
                                        </motion.div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 text-center rounded-3xl border border-gray-300"
                    >
                        <div className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
                            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 italic mb-6">
                                &quot;Setiap bisnis pet care unik, namun kebutuhannya sama: mempermudah pelanggan melakukan booking dan menyederhanakan manajemen bagi pemilik.&quot;
                            </blockquote>
                            <div className="text-lg font-semibold text-purple-600">Tim Service Ops</div>
                            <div className="text-gray-500">Spesialis Teknologi Pet Care</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="harga" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={itemVariants}
                        className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6"
                    >
                        Harga
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-0 text-left flex-1">
                                <span className="gradient-text">Paket Harga Jelas</span>{' '}
                                <span className="text-gray-900">Tanpa Ribet</span>
                            </h2>
                            <div className="hidden md:block flex-1" />
                            <p className="text-lg text-gray-400 mb-0 text-left md:text-right flex-1">
                                Transparan dan fleksibel. Pilih paket yang paling sesuai dengan skala bisnis Anda.
                            </p>
                        </div>
                    </motion.div>

                    {/* Switch Bulan/Tahun */}
                    <div className="flex justify-center mb-16">
                        <div className="relative w-44 h-12 bg-gray-200 rounded-full flex items-center px-1 transition-all duration-300">
                            <button
                                type="button"
                                className="w-1/2 h-10 z-10 focus:outline-none"
                                onClick={() => setSelectedPlan('BULAN')}
                                aria-pressed={selectedPlan === 'BULAN'}
                            >
                                <span className={`block text-center font-semibold text-sm transition-colors duration-200 ${selectedPlan === 'BULAN' ? 'text-purple-700' : 'text-gray-500'}`}>
                                    Bulanan
                                </span>
                            </button>
                            <button
                                type="button"
                                className="w-1/2 h-10 z-10 focus:outline-none"
                                onClick={() => setSelectedPlan('TAHUN')}
                                aria-pressed={selectedPlan === 'TAHUN'}
                            >
                                <span className={`block text-center font-semibold text-sm transition-colors duration-200 ${selectedPlan === 'TAHUN' ? 'text-purple-700' : 'text-gray-500'}`}>
                                    Tahunan
                                </span>
                            </button>
                            <motion.div
                                layout
                                className="absolute top-1 left-1 w-1/2 h-10 bg-white rounded-full shadow transition-all duration-0"
                                animate={{ x: selectedPlan === 'TAHUN' ? 80 : 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                style={{ zIndex: 1 }}
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: "PEMULA",
                                price: selectedPlan === 'TAHUN' ? "166K" : "199K",
                                period: "/Bulan",
                                description: "Solusi esensial untuk memulai digitalisasi bisnis pet care Anda.",
                                features: [
                                    "Portal booking online",
                                    "Manajemen pelanggan & hewan",
                                    "Dashboard analitik dasar",
                                    "Interface mobile-friendly",
                                    "Support email",
                                    "",
                                ],
                                cta: "Mulai dengan PEMULA",
                                discount: selectedPlan === 'TAHUN' ? "Hemat 2 bulan" : "Bulan pertama diskon 50%",
                                color: "from-blue-500 to-cyan-500"
                            },
                            {
                                name: "TUMBUH",
                                price: selectedPlan === 'TAHUN' ? "333K" : "399K",
                                period: "/Bulan",
                                description: "Alat bantu lengkap untuk akselerasi pertumbuhan dan efisiensi operasional.",
                                features: [
                                    "Semua fitur PEMULA",
                                    "Analitik & laporan lanjutan",
                                    "Sistem harga musiman",
                                    "Integrasi WhatsApp",
                                    "Support prioritas",
                                    ""
                                ],
                                cta: "Berkembang dengan TUMBUH",
                                discount: selectedPlan === 'TAHUN' ? "Hemat 2 bulan" : "Coba gratis 14 hari",
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                name: "BERKEMBANG",
                                price: selectedPlan === 'TAHUN' ? "666K" : "799K",
                                period: "/Bulan",
                                description: "Skalabilitas tanpa batas dan kustomisasi penuh untuk bisnis skala besar.",
                                features: [
                                    "Semua tanpa batas",
                                    "Semua fitur TUMBUH",
                                    "Support domain kustom",
                                    "Manajemen staff lanjutan",
                                    "Akses API & integrasi",
                                    "Support khusus"
                                ],
                                cta: "Pilih Enterprise",
                                discount: selectedPlan === 'TAHUN' ? "Hemat 2 bulan" : "Coba gratis 14 hari",
                                color: "from-emerald-500 to-teal-500"
                            }
                        ].map((plan, index) => {
                            const isTumbuh = plan.name === "TUMBUH";
                            return (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`relative`}
                                >
                                    {isTumbuh && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                                        >
                                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                                                Paling Populer
                                            </div>
                                        </motion.div>
                                    )}

                                    <div
                                        className={`
                                            rounded-3xl p-8 transition-all duration-500 border-2 h-full relative overflow-hidden
                                            ${isTumbuh
                                                ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white'
                                                : `bg-white border-gray-300 text-gray-900`
                                            }
                                        `}
                                    >
                                        {/* Background Pattern */}
                                        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                                            <div className={`w-full h-full bg-gradient-to-br ${plan.color} rounded-full transform translate-x-16 -translate-y-16`}></div>
                                        </div>

                                        <div className="relative z-10">
                                            <div className="text-center mb-8">
                                                <h3 className={`text-2xl font-bold mb-2 ${isTumbuh ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                                                <div className="flex items-baseline justify-center mb-4">
                                                    <span className={`text-5xl font-black ${isTumbuh ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' : 'gradient-text'}`}>Rp {plan.price}</span>
                                                    <span className={`text-xl ml-2 ${isTumbuh ? 'text-purple-200' : 'text-gray-500'}`}>{plan.period}</span>
                                                </div>
                                                <p className={`text-sm ${isTumbuh ? 'text-purple-100' : 'text-gray-600'}`}>{plan.description}</p>
                                            </div>

                                            <AnimatedButton
                                                bgColorClass={`
                                                    w-full mb-6
                                                    ${isTumbuh
                                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                                                        : 'bg-black'
                                                    }
                                                `}
                                                hoverBgColor={`
                                                    ${isTumbuh
                                                        ? 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'
                                                        : 'hover:bg-black'
                                                    }
                                                `}
                                                textColorClass="text-white"
                                            >
                                                {plan.cta}
                                            </AnimatedButton>

                                            <div className="space-y-4 mb-6">
                                                {plan.features.map((feature, featureIndex) => (
                                                    <motion.div
                                                        key={featureIndex}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: feature.length === 0 ? 0 : 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                                                        className={`flex items-center space-x-3 text-sm`}
                                                    >
                                                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span className={isTumbuh ? 'text-purple-100' : 'text-gray-700'}>{feature}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <div className={`text-center text-sm font-medium ${plan.name === 'PEMULA' ? 'text-red-600' :
                                                plan.name === 'TUMBUH' ? 'text-purple-200' : 'text-emerald-600'
                                                }`}>
                                                {plan.discount}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-12"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Punya kebutuhan spesifik?</h3>
                        <p className="text-gray-600 mb-6">Kami siap membantu merancang solusi yang paling pas untuk alur kerja bisnis Anda.</p>
                        <div className="flex justify-center">
                            <AnimatedButton
                                bgColorClass={`bg-gray-900`}
                                hoverBgColor={`hover:bg-gray-800`}
                                textColorClass="text-white"
                            >
                                Diskusikan Paket Kustom
                            </AnimatedButton>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Harga fleksibel sesuai kebutuhan</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={itemVariants}
                        className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6"
                    >
                        Kontak
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-0 text-left flex-1">
                                <span className="gradient-text">Siap Mengubah</span>{' '}
                                <span className="text-gray-900">Bisnis Anda?</span>
                            </h2>
                            <div className="hidden md:block flex-1" />
                            <p className="text-lg text-gray-400 mb-0 text-left md:text-right flex-1">
                                Mari berdiskusi. Kami akan bantu wujudkan sistem ideal untuk bisnis Anda.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card max-w-3xl mx-auto rounded-3xl p-8 lg:p-12 border border-gray-300"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    className="space-y-2"
                                >
                                    <label className="text-sm font-semibold text-gray-700">Nama</label>
                                    <input
                                        type="text"
                                        placeholder="Nama Anda"
                                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-black"
                                    />
                                </motion.div>

                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    className="space-y-2"
                                >
                                    <label className="text-sm font-semibold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@anda.com"
                                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-black"
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                whileFocus={{ scale: 1.02 }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-gray-700">Apa yang Anda butuhkan?</label>
                                <select className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-black">
                                    <option>Platform Pet Care</option>
                                    <option>Sistem Booking</option>
                                    <option>Dashboard Analitik</option>
                                    <option>Setup Bisnis Lengkap</option>
                                </select>
                            </motion.div>

                            <motion.div
                                whileFocus={{ scale: 1.02 }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-gray-700">Budget</label>
                                <select className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-black">
                                    <option>Pilih...</option>
                                    <option>Rp 1-5 Juta</option>
                                    <option>Rp 5-10 Juta</option>
                                    <option>Rp 10-25 Juta</option>
                                    <option>Rp 25+ Juta</option>
                                </select>
                            </motion.div>

                            <motion.div
                                whileFocus={{ scale: 1.02 }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-gray-700">Ceritakan tentang proyek Anda</label>
                                <textarea
                                    rows={4}
                                    placeholder="Deskripsikan bisnis pet care Anda dan apa yang dibutuhkan..."
                                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none resize-none text-black"
                                ></textarea>
                            </motion.div>

                            <AnimatedButton
                                bgColorClass='w-full bg-gradient-to-r from-purple-600 to-purple-700'
                                hoverBgColor='hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700'
                                textColorClass="text-white"
                                type='submit'
                            >
                                Kirim Permintaan
                            </AnimatedButton>

                            <p className="text-sm text-gray-500 text-center">
                                Dengan mengklik tombol ini, Anda setuju dengan{' '}
                                <a href="#" className="text-purple-600 hover:underline">Kebijakan Privasi</a>{' '}
                                dan menyetujui pemrosesan data pribadi Anda.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [360, 180, 0]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                            <span className="text-white">Siap Memberikan Layanan Terbaik?</span>
                            <br />
                            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Mulai dengan Sistem Terbaik.
                            </span>
                        </h2>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Berikan pengalaman booking premium bagi pelanggan dan kemudahan manajemen untuk tim Anda.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                        >
                            <AnimatedButton
                                bgColorClass='bg-white py-8'
                                hoverBgColor='hover:bg-white'
                                textColorClass="text-black"
                                hoverTextColor='hover:text-black'
                            >
                                Coba Gratis 14 Hari
                            </AnimatedButton>

                            <AnimatedButton
                                bgColorClass='border-2 border-white/30 py-8'
                                hoverBgColor='hover:bg-white/10'
                                textColorClass="text-white"
                                hoverTextColor='hover:text-white'
                            >
                                Jadwalkan Demo
                            </AnimatedButton>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-4 gap-8"
                    >
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">P</span>
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">PAWSI</span>
                            </div>
                            <p className="text-gray-400">
                                Platform manajemen all-in-one untuk bisnis pet care di Indonesia. Didedikasikan untuk membantu Anda bertumbuh.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h4 className="font-bold text-lg mb-4">Produk</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Booking Online</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Manajemen Pelanggan</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Analitik Bisnis</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Reminder Otomatis</a></li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h4 className="font-bold text-lg mb-4">Perusahaan</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Tentang Kami</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Karier</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Kontak</a></li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h4 className="font-bold text-lg mb-4">Dukungan</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Pusat Bantuan</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Dokumentasi</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Status Sistem</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Kebijakan Privasi</a></li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                    >
                        <p>&copy; 2025 PAWSI. Hak cipta dilindungi undang-undang.</p>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
};

export default PAWSILandingPage;