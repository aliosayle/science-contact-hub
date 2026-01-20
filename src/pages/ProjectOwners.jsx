import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Eye, 
  FileSearch, 
  Scale,
  Users,
  Search,
  Handshake,
  ClipboardCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './ProjectOwners.css'

const ProjectOwners = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Eye size={24} />,
      step: '01',
      title: t('projectOwners.support.title'),
      description: t('projectOwners.support.description')
    },
    {
      icon: <FileSearch size={24} />,
      step: '02',
      title: t('projectOwners.dueDiligence.title'),
      description: t('projectOwners.dueDiligence.description')
    },
    {
      icon: <Scale size={24} />,
      step: '03',
      title: t('projectOwners.governance.title'),
      description: t('projectOwners.governance.description')
    }
  ]

  const benefits = [
    {
      icon: <Users size={24} />,
      title: t('projectOwners.globalTalent.title'),
      description: t('projectOwners.globalTalent.description')
    },
    {
      icon: <Search size={24} />,
      title: t('projectOwners.expertiseMatching.title'),
      description: t('projectOwners.expertiseMatching.description')
    },
    {
      icon: <Handshake size={24} />,
      title: t('projectOwners.expandNetwork.title'),
      description: t('projectOwners.expandNetwork.description')
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: t('projectOwners.streamlined.title'),
      description: t('projectOwners.streamlined.description')
    }
  ]

  const responsibilities = t('projectOwners.responsibilities.items') || []

  return (
    <div className="project-owners-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-content">
              <span className="page-label">{t('projectOwners.label')}</span>
              <h1>{t('projectOwners.title')}</h1>
              <p>{t('projectOwners.description')}</p>
              <div className="page-hero-actions">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZwTgKZjmpwBrewErPRbaPTf4r9NgU9P2b6MnwbOnAouiMUQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  <span>{t('projectOwners.submitProject')}</span>
                  <ArrowRight size={20} />
                </a>
                <Link to="/faq" className="btn btn-secondary btn-lg">
                  {t('projectOwners.learnMore')}
                </Link>
              </div>
            </div>
            <div className="page-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" 
                alt="Project team meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('projectOwners.role.label')}</span>
            <h2>{t('projectOwners.role.title')}</h2>
            <p>{t('projectOwners.role.description')}</p>
          </div>
          <div className="services-grid">
            {services.map((item, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{item.icon}</div>
                  <span className="service-step">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Image Banner */}
      <section className="image-banner">
        <div className="container">
          <div className="banner-grid">
            <div className="banner-image">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80" 
                alt="Team collaboration"
              />
            </div>
            <div className="banner-image">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" 
                alt="Business meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('projectOwners.benefitsLabel')}</span>
            <h2>{t('projectOwners.benefitsTitle')}</h2>
            <p>{t('projectOwners.benefitsDesc')}</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section responsibilities">
        <div className="container">
          <div className="responsibilities-wrapper">
            <div className="responsibilities-content">
              <span className="section-label">{t('projectOwners.responsibilities.label')}</span>
              <h2>{t('projectOwners.responsibilities.title')}</h2>
              <p>{t('projectOwners.responsibilities.description')}</p>
              <ul className="responsibilities-list">
                {Array.isArray(responsibilities) && responsibilities.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="responsibilities-notice">
              <div className="notice-card warning">
                <AlertCircle size={32} />
                <h4>{t('projectOwners.disclaimer.title')}</h4>
                <p>{t('projectOwners.disclaimer.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section submit-section" id="submit-form">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <span className="section-label">{t('projectOwners.form.label')}</span>
              <h2>{t('projectOwners.form.title')}</h2>
              <p>{t('projectOwners.form.description')}</p>
              <div className="submit-benefits" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                <div className="submit-benefit">
                  <CheckCircle2 size={20} />
                  <span>{t('projectOwners.form.noFees')}</span>
                </div>
                <div className="submit-benefit">
                  <CheckCircle2 size={20} />
                  <span>{t('projectOwners.form.globalResearchers')}</span>
                </div>
                <div className="submit-benefit">
                  <CheckCircle2 size={20} />
                  <span>{t('projectOwners.form.expertiseMatching')}</span>
                </div>
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZwTgKZjmpwBrewErPRbaPTf4r9NgU9P2b6MnwbOnAouiMUQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <span>{t('projectOwners.form.submit')}</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectOwners
