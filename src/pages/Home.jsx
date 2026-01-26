import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Users, 
  Shield, 
  Globe, 
  Handshake,
  Target,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Home.css'

const Home = () => {
  const { t } = useLanguage()

  const platformFeatures = [
    {
      icon: <Users size={28} />,
      title: t('overview.forResearchers.title'),
      description: t('overview.forResearchers.description'),
      link: '/researchers'
    },
    {
      icon: <Shield size={28} />,
      title: t('overview.integrity.title'),
      description: t('overview.integrity.description'),
      link: '/faq'
    }
  ]

  const howItWorks = [
    {
      step: '01',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description')
    },
    {
      step: '02',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description')
    },
    {
      step: '03',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description')
    },
    {
      step: '04',
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description')
    }
  ]

  const benefits = t('benefits.items') || []

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>{t('hero.badge')}</span>
            </div>
            <h1>{t('hero.title')}</h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="hero-actions">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5LAIvmeTTHQq-0PLCKW8dBFc0kIGjZFVq2OdDW3pL3pQehA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <span>{t('hero.joinResearcher')}</span>
                <ArrowRight size={20} />
              </a>
              <p className="hero-email-note">{t('hero.emailNote')}</p>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <Globe size={20} />
                <span>{t('hero.globalNetwork')}</span>
              </div>
              <div className="stat">
                <Handshake size={20} />
                <span>{t('hero.crossBorder')}</span>
              </div>
              <div className="stat">
                <Shield size={20} />
                <span>{t('hero.independent')}</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Research collaboration team"
            />
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="section overview">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('overview.label')}</span>
            <h2>{t('overview.title')}</h2>
            <p>{t('overview.description')}</p>
          </div>
          <div className="features-grid">
            {platformFeatures.map((feature, index) => (
              <Link to={feature.link} key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-link">
                  {t('overview.learnMore')} <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="section image-section">
        <div className="container">
          <div className="image-grid">
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80" 
                alt="Scientific research"
              />
              <div className="image-overlay">
                <h4>{t('overview.forResearchers.title')}</h4>
              </div>
            </div>
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" 
                alt="Laboratory work"
              />
              <div className="image-overlay">
                <h4>{t('overview.integrity.title')}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('howItWorks.label')}</span>
            <h2>{t('howItWorks.title')}</h2>
            <p>{t('howItWorks.description')}</p>
          </div>
          <div className="steps-grid">
            {howItWorks.map((item, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits">
        <div className="container">
          <div className="benefits-wrapper">
            <div className="benefits-content">
              <span className="section-label">{t('benefits.label')}</span>
              <h2>{t('benefits.title')}</h2>
              <p>{t('benefits.description')}</p>
              <ul className="benefits-list">
                {Array.isArray(benefits) && benefits.map((benefit, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary">
                <span>{t('benefits.getStarted')}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="benefits-visual">
              <div className="visual-card">
                <div className="visual-icon">
                  <Target size={48} />
                </div>
                <h4>{t('benefits.capabilityMatching')}</h4>
                <p>{t('benefits.capabilityDesc')}</p>
              </div>
              <div className="benefits-image">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaboration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>{t('cta.title')}</h2>
              <p>{t('cta.description')}</p>
            </div>
            <div className="cta-actions">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5LAIvmeTTHQq-0PLCKW8dBFc0kIGjZFVq2OdDW3pL3pQehA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg">
                {t('cta.submitProfile')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
