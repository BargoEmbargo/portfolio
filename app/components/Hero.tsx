"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          Daniel Pitropovski
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
         <code>&lt; Multiplatform Mobile App Developer &gt;</code>
        </motion.p>
        <div className="flex gap-4 justify-center">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                const offset = 100;
                const targetPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="w-40 px-4 py-2.5 bg-gray-400 hover:bg-gray-500 text-gray-900 rounded-lg font-medium transition-all duration-200 ease-out whitespace-nowrap"
          >
            Explore My Work
          </motion.button>
          <motion.a
            href="mailto:danielpitropovski@gmail.com"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-40 px-4 py-2.5 border-2 border-gray-400 hover:bg-gray-500/10 text-white rounded-lg font-medium transition-all duration-200 ease-out whitespace-nowrap inline-flex items-center justify-center"
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </section>
  )
}

