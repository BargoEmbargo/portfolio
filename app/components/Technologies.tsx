"use client"

import { motion } from "framer-motion"
import { FaJava } from "react-icons/fa"; // Using FontAwesome
import { SiKotlin, SiJetpackcompose, SiFigma, SiGithub, SiFirebase, SiSqlite, SiAndroid } from "react-icons/si"

const technologies = [
  { name: "Java", icon: FaJava },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Jetpack Compose", icon: SiJetpackcompose },
  { name: "Figma", icon: SiFigma },
  { name: "GitHub", icon: SiGithub },
  { name: "Firebase", icon: SiFirebase },
  { name: "SQLite", icon: SiSqlite },
  { name: "Android", icon: SiAndroid },
]

export default function Technologies() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
      <code>&lt; TECH STACK &gt;</code>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <tech.icon className="text-4xl mb-2 text-gray-400" />
            <span className="text-sm font-medium text-center text-gray-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

