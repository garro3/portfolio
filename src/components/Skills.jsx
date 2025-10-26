const Skills = () => {
  const skills = [
    { name: 'HTML', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
    { name: 'CSS', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { name: 'JavaScript', color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
    { name: 'Java', color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-900/20' },
    { name: 'Python', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { name: 'PHP', color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
    { name: 'Git', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
    { name: 'React', color: 'text-cyan-500', bg: 'bg-cyan-50 dark:bg-cyan-900/20' },
    { name: 'Ruby', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 hover:scale-105 group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`${skill.bg} ${skill.color} w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-gray-900 dark:text-white font-semibold text-center transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center transition-colors duration-300">
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
            <span className="font-semibold text-gray-900 dark:text-white">Always learning</span> 
            {' '}— I continuously train myself in the latest technologies and new language.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
