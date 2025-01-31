"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/BargoEmbargo?tab=repositories" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/daniel-pitropovski-762b24282/" },
  { icon: MdEmail, href: "mailto:danielpitropovski@gmail.com" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-8 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex justify-center space-x-8 mb-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            >
              <link.icon className="w-8 h-8" />
            </motion.a>
          ))}
        </div>
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Daniel Pitropovski. All rights reserved.</p>
          <p>Mobile App Developer</p>
        </div>
      </div>
    </footer>
  )
}

