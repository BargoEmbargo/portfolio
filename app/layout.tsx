import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import ParticlesBackground from './components/ParticlesBackground'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Daniel Pitropovski Portfolio',
  description: 'Mobile App Developer Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  )
}

