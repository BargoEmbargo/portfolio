"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-8 px-4 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto relative z-10 max-w-[950px]"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          <code>&lt; ABOUT ME &gt;</code>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl font-mono"
        >
          <div className="text-gray-400">
            <span className="text-pink-400">class</span>{" "}
            <span className="text-cyan-400">Developer</span>{" "}
            <span className="text-white">{"{"}</span>
          </div>

          <div className="pl-8 mb-2"><br />
            <span className="text-gray-500">// What drives me</span>
          </div>
          <div className="pl-8 mb-6">
            <span className="text-pink-400">val</span>{" "}
            <span className="text-blue-400">passion</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-yellow-300">"</span>
            <span className="text-gray-300">
              I'm a passionate mobile app developer with a keen eye for design and a love for creating seamless user experiences. I bring ideas to life through intuitive and visually appealing applications.
            </span>
            <span className="text-yellow-300">"</span>
          </div>

          <div className="pl-8 mb-2">
            <span className="text-gray-500">// My mission</span>
          </div>
          <div className="pl-8 mb-6">
            <span className="text-pink-400">val</span>{" "}
            <span className="text-blue-400">mission</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-yellow-300">"</span>
            <span className="text-gray-300">
              To push the boundaries of mobile technology and deliver innovative solutions that make a difference in people's lives.
            </span>
            <span className="text-yellow-300">"</span>
          </div>

          <div className="text-white">{"}"}</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

