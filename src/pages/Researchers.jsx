import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  User, 
  FileCheck, 
  ShieldCheck, 
  AlertTriangle,
  BookOpen,
  Globe,
  Network,
  Award,
  CheckCircle2
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Researchers.css'

const Researchers = () => {
  const { t } = useLanguage()

  const participationSteps = [
    {
      icon: <User size={24} />,
      step: '01',
      title: t('researchers.participation.title'),
      description: t('researchers.participation.description')
    },
    {
      icon: <AlertTriangle size={24} />,
      step: '02',
      title: t('researchers.responsibility.title'),
      description: t('researchers.responsibility.description')
    },
    {
      icon: <ShieldCheck size={24} />,
      step: '03',
      title: t('researchers.ethics.title'),
      description: t('researchers.ethics.description')
    }
  ]

  const benefits = [
    {
      icon: <Globe size={24} />,
      title: t('researchers.visibility.title'),
      description: t('researchers.visibility.description')
    },
    {
      icon: <Network size={24} />,
      title: t('researchers.network.title'),
      description: t('researchers.network.description')
    },
    {
      icon: <BookOpen size={24} />,
      title: t('researchers.matching.title'),
      description: t('researchers.matching.description')
    },
    {
      icon: <Award size={24} />,
      title: t('researchers.opportunities.title'),
      description: t('researchers.opportunities.description')
    }
  ]

  const expectations = t('researchers.expectations.items') || []

  return (
    <div className="researchers-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-content">
              <span className="page-label">{t('researchers.label')}</span>
              <h1>{t('researchers.title')}</h1>
              <p>{t('researchers.description')}</p>
              <div className="page-hero-actions">
                <a href="#submit-form" className="btn btn-primary btn-lg">
                  <span>{t('researchers.submitProfile')}</span>
                  <ArrowRight size={20} />
                </a>
                <Link to="/faq" className="btn btn-secondary btn-lg">
                  {t('researchers.learnMore')}
                </Link>
              </div>
            </div>
            <div className="page-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                alt="Researcher at work"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section participation">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('researchers.howItWorks.label')}</span>
            <h2>{t('researchers.howItWorks.title')}</h2>
            <p>{t('researchers.howItWorks.description')}</p>
          </div>
          <div className="participation-grid">
            {participationSteps.map((item, index) => (
              <div key={index} className="participation-card">
                <div className="card-header">
                  <div className="card-icon">{item.icon}</div>
                  <span className="card-step">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Image Banner */}
      <section className="image-banner">
        <div className="container">
          <div className="banner-grid">
            <div className="banner-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" 
                alt="Academic research"
              />
            </div>
            <div className="banner-image">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80" 
                alt="Laboratory research"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('researchers.benefitsLabel')}</span>
            <h2>{t('researchers.benefitsTitle')}</h2>
            <p>{t('researchers.benefitsDesc')}</p>
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

      {/* Expectations */}
      <section className="section expectations">
        <div className="container">
          <div className="expectations-wrapper">
            <div className="expectations-content">
              <span className="section-label">{t('researchers.expectations.label')}</span>
              <h2>{t('researchers.expectations.title')}</h2>
              <p>{t('researchers.expectations.description')}</p>
              <ul className="expectations-list">
                {Array.isArray(expectations) && expectations.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="expectations-notice">
              <div className="notice-card">
                <FileCheck size={32} />
                <h4>{t('researchers.notice.title')}</h4>
                <p>{t('researchers.notice.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Form Section */}
      <section className="section submit-section" id="submit-form">
        <div className="container">
          <div className="submit-wrapper">
            <div className="submit-info">
              <span className="section-label">{t('researchers.form.label')}</span>
              <h2>{t('researchers.form.title')}</h2>
              <p>{t('researchers.form.description')}</p>
              <div className="submit-benefits">
                <div className="submit-benefit">
                  <CheckCircle2 size={20} />
                  <span>{t('researchers.form.free')}</span>
                </div>
                <div className="submit-benefit">
                  <CheckCircle2 size={20} />
                  <span>{t('researchers.form.noCommitment')}</span>
                </div>
                <div className="submit-benefit">
                  <CheckCircle2 size={20} />
                  <span>{t('researchers.form.globalVisibility')}</span>
                </div>
              </div>
              <div className="submit-image">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" 
                  alt="Researcher professional"
                />
              </div>
            </div>
            <form className="submit-form">
              <div className="form-group">
                <label htmlFor="name">{t('researchers.form.fullName')}</label>
                <input type="text" id="name" placeholder="Dr. Jane Smith" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('researchers.form.email')}</label>
                <input type="email" id="email" placeholder="jane.smith@university.edu" required />
              </div>
              <div className="form-group">
                <label htmlFor="institution">{t('researchers.form.institution')}</label>
                <input type="text" id="institution" placeholder="University or Institution" />
              </div>
              <div className="form-group">
                <label htmlFor="field">{t('researchers.form.field')}</label>
                <input type="text" id="field" placeholder="e.g., Molecular Biology, Data Science" required />
              </div>
              <div className="form-group">
                <label htmlFor="interests">{t('researchers.form.interests')}</label>
                <textarea 
                  id="interests" 
                  rows="4" 
                  placeholder={t('researchers.form.interestsPlaceholder')}
                  required
                ></textarea>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" id="agree" required />
                <label htmlFor="agree">{t('researchers.form.agree')}</label>
              </div>
              <button type="submit" className="btn btn-primary btn-lg full-width">
                <span>{t('researchers.form.submit')}</span>
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Researchers
