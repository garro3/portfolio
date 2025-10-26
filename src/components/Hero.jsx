import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Clément Garreau
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">
                Junior Developer
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 flex items-center gap-2 transition-colors duration-300">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Based in France
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl transition-colors duration-300">
              Passionate about web development and new technologies, 
              I create modern and high-performance digital experiences. 
              Always looking for new challenges to develop my skills.
            </p>

            <p className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Currently seeking an apprenticeship opportunity
            </p>

            {/* Social Buttons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/clementgarreau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/clement-garreau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:garreau.clement@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Mail size={20} />
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right Content - Code Preview */}
          <div className="hidden lg:block">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 card-shadow-hover transition-colors duration-300">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm text-gray-300 dark:text-gray-200 overflow-x-auto transition-colors duration-300">
                <code>{`const developer = {
  name: "Clément Garreau",
  role: "Full-Stack Developer",
  location: "France 🇫🇷",
  
  skills: [
    "React", "Ruby",
    "JavaScript", "Python"
  ],
  
  passion: "Building amazing
           web experiences",
  
  currentlyLearning: [
    "Advanced Architecture",
    "System Design"
  ],
  
  seeking: "Apprenticeship",
  openTo: "Collaboration",
  
  contact: {
    email: "garreau.clement@gmail.com",
    available: true
  }
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
