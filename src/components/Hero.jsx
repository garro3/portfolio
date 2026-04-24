import { GithubIcon, Linkedin, Download } from "lucide-react";

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section
      id="home"
      className="da-section min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold da-title bg-gradient-to-r from-slate-900 via-blue-700 to-violet-700 dark:from-white dark:via-blue-300 dark:to-violet-300 text-transparent bg-clip-text transition-colors duration-300">
                Clément Garreau
              </h1>
              <h2 className="text-2xl md:text-3xl da-kicker font-medium transition-colors duration-300">
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
                className="da-btn-primary flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300"
              >
                <GithubIcon size={20} />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/clément-garreau"
                target="_blank"
                rel="noopener noreferrer"
                className="da-btn-secondary flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href={`${baseUrl}CV_Clement_Garreau (1).pdf`}
                download
                className="da-btn-secondary flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Download size={20} />
                <span className="font-medium">Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-35"></div>
              <img
                src={`${baseUrl}photo.jpg`}
                alt="Clément Garreau - Junior Developer"
                className="relative w-full max-w-md rounded-3xl border border-white/20 shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
