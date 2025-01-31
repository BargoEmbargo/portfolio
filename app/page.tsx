import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Footer from "./components/Footer"
import WorkProjects from "./components/WorkProjects"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <WorkProjects />
      <Technologies />
      <Footer />
    </main>
  )
}

