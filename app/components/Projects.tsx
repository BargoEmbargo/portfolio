"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaGooglePlay } from "react-icons/fa"
import { FiFigma } from "react-icons/fi"

const projects = [
  {
    title: "Yamb Game",
    description: "This small project involves recreating the classic game of Yamb. In this interactive game, users roll the dice and record the resulting values in a table. It's a simple yet engaging activity that adds a fun twist to the traditional dice-rolling experience.",
    image: "/yamb.svg",
    width: 800,
    height: 600,
    github: "https://github.com/BargoEmbargo/Yamb",
    figma: "https://www.figma.com/file/fX0CqNTtE9srd1OJsFxfbR/YambGame?type=design&node-id=0%3A1&mode=design&t=qJhGssP41duZfI9H-1",
    playstore: "https://play.google.com/store/apps/details?id=com.yamb.chatgpt"
  },
  {
    title: "Monkify",
    description: "Monkify is your dedicated companion on the path to a disciplined and successful life. Unlock your potential by embracing consistency and achieving daily tasks. Define your path with clear, achievable goals, while Monkify holds you accountable, ensuring you stay on track. Cultivate lasting habits for lifelong success with this user-friendly app. This app is in the development phase...",
    image: "/monkify.svg",
    width: 800,
    height: 600,
    github: "https://github.com/BargoEmbargo/monkify",
    figma: "https://www.figma.com/file/oiP9dYYuNp304TrvTpIhO6/MonkApp?type=design&node-id=276%3A408&mode=design&t=6z2d4uzASxCMHlqW-1",
    playstore: null
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative flex flex-col items-center justify-center py-4">
      <div className="w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
           <code>&lt; MY PROJECTS &gt;</code>
        </motion.h2>
        <div className="flex flex-col gap-8 px-4 md:px-8 max-w-[1000px] mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg relative group border-2 border-gray-700 hover:border-gray-500 transition-colors duration-300"
            >
              <div className="relative z-10">
                <div className="bg-gray-900 overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 scale-125">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center 10%"
                        className="transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors ring-2 ring-gray-600"
                      >
                        <FaGithub className="w-7 h-7 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors ring-2 ring-gray-600"
                      >
                        <FiFigma className="w-7 h-7 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors ring-2 ring-gray-600"
                      >
                        <FaGooglePlay className="w-7 h-7 text-white" />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {project.title}
                      <div className="h-[2px] w-8 bg-white mt-2"></div>
                    </h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
