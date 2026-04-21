import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const AURORA_PARTICLES = Array.from({ length: 34 }, (_, index) => {
  const size = 1 + (index % 3)
  const driftX = `${8 + (index % 7) * 5}px`
  const driftY = `${-14 - (index % 6) * 6}px`
  return {
    id: index,
    left: `${(index * 13) % 100}%`,
    top: `${(index * 23) % 100}%`,
    size,
    duration: `${14 + (index % 8) * 3}s`,
    twinkleDuration: `${5 + (index % 5) * 2}s`,
    delay: `${-(index % 10) * 2.6}s`,
    driftX,
    driftY,
  }
})

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/portfolio">
        <div className="relative isolate min-h-screen overflow-hidden bg-slate-100/90 transition-colors duration-300 dark:bg-slate-950">
          <div className="site-aurora pointer-events-none" aria-hidden="true">
            <div className="aurora-vignette" />
            <div className="aurora-grid" />
            <div className="aurora-layer">
              <span className="aurora-blob aurora-blob-1" />
              <span className="aurora-blob aurora-blob-2" />
              <span className="aurora-blob aurora-blob-3" />
            </div>
            <div className="particle-layer">
              {AURORA_PARTICLES.map((particle) => (
                <span
                  key={particle.id}
                  className="aurora-particle"
                  style={{
                    left: particle.left,
                    top: particle.top,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    animationDuration: particle.duration,
                    animationDelay: particle.delay,
                    '--particle-x': particle.driftX,
                    '--particle-y': particle.driftY,
                    '--particle-twinkle-duration': particle.twinkleDuration,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 flex min-h-screen">
            <Sidebar />
            <ThemeToggle />
            <main className="flex-1 md:ml-32">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
