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
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 bg-sidebar dark:bg-gray-950 flex-col items-center justify-center z-50 transition-colors duration-300">
        <nav className="flex flex-col gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative p-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              aria-label={item.label}
            >
              <item.icon size={24} />
              <span className="absolute left-full ml-4 px-3 py-2 bg-sidebar dark:bg-gray-950 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-sidebar dark:bg-gray-950 border-t border-white/10 z-50 transition-colors duration-300">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-gray-400'
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
