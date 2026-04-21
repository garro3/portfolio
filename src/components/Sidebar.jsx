import { useState, useEffect } from 'react'
import { Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'experience', icon: GraduationCap, label: 'Journey' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 h-[88vh] w-24 rounded-3xl border border-slate-300/40 bg-white/45 dark:bg-slate-900/60 dark:border-slate-700/40 backdrop-blur-xl flex-col items-center justify-center z-50 transition-colors duration-300 shadow-2xl shadow-slate-900/10">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative p-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/70'
              }`}
              aria-label={item.label}
            >
              <item.icon size={24} />
              <span className="absolute left-full ml-4 px-3 py-2 bg-slate-900/85 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-slate-700/60 backdrop-blur-md">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-4 left-3 right-3 rounded-2xl border border-slate-300/45 bg-white/70 dark:bg-slate-900/75 dark:border-slate-700/50 backdrop-blur-xl z-50 transition-colors duration-300 shadow-xl shadow-slate-900/15">
        <div className="flex justify-around items-center h-14">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
              aria-label={item.label}
            >
              <item.icon size={20} />
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Sidebar
