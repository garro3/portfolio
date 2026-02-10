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

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Sidebar />
        <ThemeToggle />
        <main className="flex-1 md:ml-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <NotFound />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
