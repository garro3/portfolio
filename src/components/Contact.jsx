import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xdkojqzy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        setTimeout(() => {
          setSubmitStatus(null)
        }, 3000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'garreau.clem03@gmail.com',
      href: null,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '07 69 87 73 93',
      href: null,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'France',
      href: null,
    },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          Contact Me
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl transition-colors duration-300">
          Have a project in mind or want to collaborate? 
          Feel free to contact me, I'd be happy to discuss with you!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Let's contact me.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                I'm always open to collaboration opportunities, 
                interesting projects, and new professional connections.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-3 rounded-xl transition-colors duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 dark:text-white font-semibold hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white rounded-2xl p-8 transition-colors duration-300">
              <h4 className="text-xl font-bold mb-2">Availability</h4>
              <p className="text-gray-300 dark:text-gray-200 transition-colors duration-300">
                I'm currently seeking an apprenticeship opportunity 
                and open to all professional opportunities and collaborations.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 card-shadow transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent transition-all outline-none"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent transition-all outline-none"
                  placeholder="Collaboration opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white dark:border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 rounded-lg text-center transition-colors duration-300">
                  ✓ Message sent successfully! I'll reply shortly.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400 rounded-lg text-center transition-colors duration-300">
                  ✗ Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
          <p>
            © {new Date().getFullYear()} Clément Garreau. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
