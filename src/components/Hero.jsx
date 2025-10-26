import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 dark:bg-gray-900 transition-colors duration-300"
    >
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
              Passionate about tech, I turn ideas into modern, high-performance
              digital experiences. Every project is a new challenge to learn,
              create, and grow.
            </p>

            <p className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Currently seeking an apprenticeship opportunity
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/garro3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/clément-garreau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="/portfolio/CV_Clement_Garreau.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                <Download size={20} />
                <span className="font-medium">Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/portfolio/photo.jpg"
                alt="Clément Garreau - Junior Developer"
                className="relative w-full max-w-md rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
