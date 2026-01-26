import { 
  Mail, 
  Shield, 
  MessageSquare,
  Users
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

const Contact = () => {
  const { t } = useLanguage()
  const email = 'info@sciencecontacthub.com'

  const contactReasons = [
    {
      icon: <Users size={24} />,
      title: t('contact.reasons.researcher.title'),
      description: t('contact.reasons.researcher.description')
    },
    {
      icon: <MessageSquare size={24} />,
      title: t('contact.reasons.general.title'),
      description: t('contact.reasons.general.description')
    }
  ]

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

      {/* Contact Email Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-email-wrapper">
            <div className="email-card">
              <div className="email-icon">
                <Mail size={48} />
              </div>
              <h2>{t('contact.form.title')}</h2>
              <p>{t('contact.form.description')}</p>
              <a href={`mailto:${email}`} className="email-link">
                {email}
              </a>
              <div className="info-cards">
                <div className="info-card">
                  <Shield size={24} />
                  <div className="info-content">
                    <h4>{t('contact.form.secure')}</h4>
                    <p>{t('contact.form.secureDesc')}</p>
                  </div>
                </div>
              </div>
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
