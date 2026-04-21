import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiPhp,
  SiGit,
  SiReact,
  SiRuby,
  SiDocker,
  SiJenkins,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: SiHtml5, color: '#E34C26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'Git', icon: SiGit, color: '#F1502F' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Ruby', icon: SiRuby, color: '#CC342D' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D33833' },
  ]

  return (
    <section id="skills" className="da-section min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="da-title text-4xl md:text-5xl font-bold mb-12 transition-colors duration-300">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                  className="da-card flex flex-col items-center gap-4 p-6 rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/70 dark:bg-slate-800/70 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Icon 
                    size={32} 
                    style={{ color: skill.color }}
                    className="group-hover:drop-shadow-lg transition-all duration-300"
                  />
                </div>
                <span className="text-gray-900 dark:text-white font-semibold text-center text-sm md:text-base transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>

        <div className="mt-16 da-card rounded-2xl p-8 text-center transition-colors duration-300">
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
            <span className="font-semibold text-gray-900 dark:text-white">Always learning</span> 
            {' '}— I continuously train myself in the latest technologies and new languages.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
