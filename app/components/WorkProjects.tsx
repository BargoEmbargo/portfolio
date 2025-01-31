"use client"

import { motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

const workProjects = [
  {
    title: "Storky",
    description: "Contraction timer app built with the latest Android technologies, including Jetpack Compose.",
    image: "/storky.jpg",
    playstore: "https://www.getstorky.com"
  },
  {
    title: "Barkio",
    description: "Dog monitoring app project built with traditional Android technologies, including Fragments and XML. The app has over 100K downloads across platforms.",
    image: "/barkio.jpg",
    playstore: "https://barkio.com/en"
  },
  {
    title: "Bibino",
    description: "Baby monitoring app project built with traditional Android technologies, including Fragments and XML. The app has over 100K downloads across platforms.",
    image: "/bibino.jpg",
    playstore: "https://bibinoapp.com/cs"
  }
];

export default function WorkProjects() {
  return (
    <section className="relative flex flex-col items-center justify-center py-8">
      <div className="w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
        <code>&lt; PROJECTS I HAVE WORKED ON &gt;</code>
        </motion.h2>
        <div className="flex flex-col gap-8 px-4 md:px-8 max-w-[1000px] mx-auto">
          {workProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg relative group border-2 border-gray-700 hover:border-gray-500 transition-colors duration-300"
            >
              <div className="relative h-[400px] overflow-hidden">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 