import { Code, Coffee, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Code,
      value: "15+",
      label: "Projects",
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Coffee,
      value: "1000+",
      label: "Coffees",
      color: "text-amber-600",
      bg: "bg-amber-50 dark:bg-amber-900/20",
    },
    {
      icon: Lightbulb,
      value: "∞",
      label: "Ideas",
      color: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content - Text */}
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            <p className="text-lg">
              Hey I'm Clément, a Master's student in Information
              Systems Architecture at Epitech. After an initial training at Le
              Wagon, I discovered my passion for web development and the
              creation of applications that are both useful and well-designed.
            </p>
            <p className="text-lg">
              Today, I’m expanding my skills into broader fields such as AI,
              cloud computing, and software engineering, to better understand
              how to design robust and scalable systems.
            </p>
            <p className="text-lg">
              I enjoy learning, experimenting, and turning ideas into tangible
              projects.
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Looking for an apprenticeship starting in January 2026 to keep
              growing and contribute to innovative projects.
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
                  <div
                    className={`${stat.bg} ${stat.color} p-4 rounded-xl transition-colors duration-300`}
                  >
                    <stat.icon size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
