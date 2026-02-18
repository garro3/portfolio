import { Home, AlertCircle } from 'lucide-react'

const NotFound = () => {
  const scrollToHome = () => {
    const homeElement = document.getElementById('home')
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
        <div className="flex justify-center">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 sm:p-6 rounded-full">
            <AlertCircle size={48} className="sm:w-16 sm:h-16 text-red-600 dark:text-red-400" />
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Oops! It looks like you're trying to access a page that doesn't exist.
            This might happen if the URL is incorrect or if a page has been moved.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors duration-300">
            But don't worry! You can always navigate back to my portfolio:
          </p>
          <button
            onClick={scrollToHome}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 font-semibold text-base sm:text-lg"
            aria-label="Go back to home page"
          >
            <Home size={20} className="sm:w-6 sm:h-6" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="pt-6 sm:pt-8 text-gray-600 dark:text-gray-400 transition-colors duration-300">
          <p className="text-xs sm:text-sm">
            If you think this is an error, feel free to contact me at{' '}
            <a
              href="mailto:garreau.clem03@gmail.com"
              className="text-gray-900 dark:text-white font-semibold hover:underline transition-colors duration-300"
            >
              garreau.clem03@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default NotFound
