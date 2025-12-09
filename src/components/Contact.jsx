import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mo871sa'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_htxe1o7'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 's2tkCARAZqozP8s4J'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (submitStatus === 'error') {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      console.error('EmailJS credentials not configured. Please set up your environment variables.')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      const now = new Date()
      const timeString = now.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Africa/Casablanca',
      })

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: timeString,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <html lang="fr" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-main transition-colors duration-300">
        <Navbar />
        
        <section
          id="contact"
          className="py-10 px-4 sm:px-5 lg:px-6 bg-section min-h-screen"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-title font-bold text-accent-beige mb-2">
                Contactez-moi
              </h2>
              <div className="w-20 h-0.5 bg-secondary-blue mx-auto"></div>
              <p className="text-main text-xs sm:text-sm mt-2 max-w-md mx-auto px-2">
                N'hésitez pas à me contacter pour toute question ou opportunité de
                collaboration.
              </p>
            </motion.div>

            <div className="max-w-sm mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-accent-beige mb-1.5"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-accent-beige rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-secondary-blue outline-none transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-accent-beige mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-accent-beige rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-secondary-blue outline-none transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder="votre.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium text-accent-beige mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-accent-beige rounded-lg focus:ring-2 focus:ring-secondary-blue focus:border-secondary-blue outline-none transition-colors text-gray-900 resize-none placeholder:text-gray-500"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-secondary-green/20 border border-secondary-green rounded-lg text-secondary-green">
                      Message envoyé avec succès !
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                      Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-1.5 text-xs sm:text-sm bg-primary hover:bg-primary-light text-main font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default Contact

