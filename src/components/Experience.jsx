import { GraduationCap, Rocket, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Master in Information Systems Architecture',
      organization: 'Epitech',
      organizationUrl: 'https://www.epitech.eu/',
      period: '2025 - Present',
      location: 'France',
      icon: GraduationCap,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Currently in my first year at Epitech, I’m pursuing advanced training in software architecture, complex applications, and project management. With its unique project-based pedagogy, I gain hands-on experience working on real-world projects, from design to implementation, while continuously developing my skills.',
      tags: ['JavaScript', 'Python', 'PHP', 'HTML', 'CSS', 'Java'],
      isCurrent: true,
    },
    {
      id: 2,
      title: 'Full-Stack Web Developer Training',
      organization: 'Le Wagon',
      organizationUrl: 'https://www.lewagon.com/fr',
      period: '2025',
      location: 'France',
      icon: Rocket,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50 dark:bg-purple-900/20',
      description: 'Intensive 10-week training covering modern web development. Learning full-stack development fundamentals with Ruby on Rails, JavaScript, and PostgreSQL. Completion of concrete team projects.',
      tags: ['Ruby', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
      badge: 'Certified',
      badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">
          My Journey
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block transition-colors duration-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-gray-900 dark:bg-white rounded-full transform -translate-x-1/2 hidden md:block transition-colors duration-300"></div>

                {/* Content Card */}
                <div className="md:ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className={`${exp.iconBg} ${exp.iconColor} p-4 rounded-xl shrink-0 transition-colors duration-300`}>
                      <exp.icon size={32} />
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                            {exp.title}
                          </h3>
                          {exp.badge && (
                            <span className={`px-3 py-1 ${exp.badgeColor} rounded-full text-sm font-semibold transition-colors duration-300`}>
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          <a 
                            href={exp.organizationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          >
                            {exp.organization}
                          </a>
                          <span className="flex items-center gap-1">
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
