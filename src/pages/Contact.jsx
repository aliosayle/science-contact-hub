import { useState } from 'react'
import { 
  Clock, 
  Shield, 
  Send,
  MessageSquare,
  Users,
  Briefcase,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

// Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw8NbESWdgexkPb19dy0GIHFpbOsKUS-PA6x-orTukAwrbnIu32Xgkn1ydE5cOdSNXRGA/exec'

const Contact = () => {
  const { t } = useLanguage()
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('')

  const contactReasons = [
    {
      icon: <Users size={24} />,
      title: t('contact.reasons.researcher.title'),
      description: t('contact.reasons.researcher.description')
    },
    {
      icon: <Briefcase size={24} />,
      title: t('contact.reasons.projectOwner.title'),
      description: t('contact.reasons.projectOwner.description')
    },
    {
      icon: <MessageSquare size={24} />,
      title: t('contact.reasons.general.title'),
      description: t('contact.reasons.general.description')
    }
  ]

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      // Create FormData for Google Apps Script
      const submitData = new FormData()
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('subject', formData.subject)
      submitData.append('message', formData.message)
      submitData.append('timestamp', new Date().toISOString())

      // Submit using fetch - let browser handle Content-Type for FormData
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: submitData
      })

      // If we get here without an error, assume success
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(t('contact.form.errorMessage'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitStatus(null)
    setErrorMessage('')
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content centered">
            <span className="page-label">{t('contact.label')}</span>
            <h1>{t('contact.title')}</h1>
            <p>{t('contact.description')}</p>
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="section reasons-section">
        <div className="container">
          <div className="reasons-grid">
            {contactReasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="section-label">{t('contact.form.label')}</div>
              <h2>{t('contact.form.title')}</h2>
              <p>{t('contact.form.description')}</p>
              
              <div className="info-cards">
                <div className="info-card">
                  <Clock size={24} />
                  <div className="info-content">
                    <h4>{t('contact.form.responseTime')}</h4>
                    <p>{t('contact.form.responseDesc')}</p>
                  </div>
                </div>
                <div className="info-card">
                  <Shield size={24} />
                  <div className="info-content">
                    <h4>{t('contact.form.secure')}</h4>
                    <p>{t('contact.form.secureDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="contact-image">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80" 
                  alt="Professional handshake"
                />
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitStatus === 'success' ? (
                <div className="form-success">
                  <div className="success-icon">
                    <CheckCircle size={64} />
                  </div>
                  <h3>{t('contact.form.successTitle')}</h3>
                  <p>{t('contact.form.successMessage')}</p>
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={resetForm}
                  >
                    {t('contact.form.sendAnother')}
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {submitStatus === 'error' && (
                    <div className="form-error-banner">
                      <AlertCircle size={20} />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.form.fullName')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Your full name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('contact.form.email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="your.email@example.com" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">{t('contact.form.subject')}</label>
                    <select 
                      id="subject" 
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    >
                      <option value="">{t('contact.form.selectSubject')}</option>
                      <option value="researcher">{t('contact.form.subjectResearcher')}</option>
                      <option value="project-owner">{t('contact.form.subjectProjectOwner')}</option>
                      <option value="collaboration">{t('contact.form.subjectCollaboration')}</option>
                      <option value="technical">{t('contact.form.subjectTechnical')}</option>
                      <option value="other">{t('contact.form.subjectOther')}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">{t('contact.form.message')}</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      placeholder={t('contact.form.messagePlaceholder')}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg full-width"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="spinner" />
                        <span>{t('contact.form.sending')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('contact.form.submit')}</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                  <p className="form-note">{t('contact.form.note')}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map / Additional Info Section */}
      <section className="section affiliation-section">
        <div className="container">
          <div className="affiliation-card">
            <div className="affiliation-content">
              <h3>{t('contact.affiliation.title')}</h3>
              <p>{t('contact.affiliation.description')}</p>
              <div className="affiliation-badges">
                <div className="badge">
                  <Shield size={20} />
                  <span>{t('contact.affiliation.integrity')}</span>
                </div>
                <div className="badge">
                  <Users size={20} />
                  <span>{t('contact.affiliation.network')}</span>
                </div>
                <div className="badge">
                  <MessageSquare size={20} />
                  <span>{t('contact.affiliation.response')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
