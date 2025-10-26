import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ECHO',
      subtitle: 'YouTube Video Learning Platform',
      description: 'An innovative application that generates summaries, quizzes, and provides an AI chatbot to help you learn from any YouTube video. Transform video content into interactive learning materials.',
      technologies: ['Ruby', 'HTML', 'SCSS', 'JavaScript', 'MySQL'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      codeUrl: '#',
      demoUrl: '#',
    },
    {
      id: 2,
      title: 'CoffeeJob',
      subtitle: 'Job Board Platform',
      description: 'A modern job board platform developed as a student project. Features job listings, company profiles, and application management with an intuitive and responsive interface.',
      technologies: ['React', 'JavaScript', 'HTML', 'Tailwind', 'Vite'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      codeUrl: '#',
      demoUrl: '#',
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">
          My Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-900 rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div
                    className="w-full h-full flex items-center justify-center text-white text-6xl font-bold"
                    style={{ background: project.image }}
                  >
                    <div className="text-center p-8">
                      <div className="text-2xl mb-2">Project {String(project.id).padStart(2, '0')}</div>
                      <div className="text-4xl">{project.title}</div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider transition-colors duration-300">
                        Project {String(project.id).padStart(2, '0')}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-300">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.codeUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
                      >
                        <Github size={20} />
                        <span className="font-medium">Code</span>
                      </a>
                      <a
                        href={project.demoUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                        <span className="font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors duration-300">
            More projects available on my{' '}
            <a
              href="https://github.com/clementgarreau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white font-semibold hover:underline transition-colors duration-300"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
