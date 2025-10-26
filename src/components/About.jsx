import { Code, Coffee, Lightbulb } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Code,
      value: '15+',
      label: 'Projects',
      color: 'text-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Coffee,
      value: '1000+',
      label: 'Coffees',
      color: 'text-amber-600',
      bg: 'bg-amber-50 dark:bg-amber-900/20'
    },
    {
      icon: Lightbulb,
      value: '∞',
      label: 'Ideas',
      color: 'text-purple-600',
      bg: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content - Text */}
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            <p className="text-lg">
              Passionate developer with solid training in full-stack web development, 
              I specialize in creating modern and high-performance web applications. 
              My journey has allowed me to gain expertise in the most in-demand 
              front-end and back-end technologies.
            </p>
            <p className="text-lg">
              Currently pursuing a Master's degree in Information Systems Architecture at Epitech, 
              I'm perfecting my skills in software development and designing scalable architectures. 
              I also completed intensive training at Le Wagon, which allowed me to master 
              the fundamentals of web development.
            </p>
            <p className="text-lg">
              My approach to development combines creativity, technical rigor, and 
              attention to detail. I enjoy taking on new challenges and continuously 
              learning to stay at the cutting edge of modern web technologies.
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Open to all collaborations and professional opportunities!
            </p>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className={`${stat.bg} ${stat.color} p-4 rounded-xl transition-colors duration-300`}>
                    <stat.icon size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{stat.value}</div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">{stat.label}</div>
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

export default About
