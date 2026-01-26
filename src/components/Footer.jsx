import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Users, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <div className="logo-box">
                  <span>SCH</span>
                </div>
                <div className="logo-text">
                  <span className="logo-name">Science Contact Hub</span>
                  <span className="logo-desc">Research Collaboration Platform</span>
                </div>
              </Link>
              <p className="footer-description">
                {t('footer.description')}
              </p>
              <div className="footer-features">
                <div className="feature-item">
                  <Shield size={16} />
                  <span>{t('footer.features.independent')}</span>
                </div>
                <div className="feature-item">
                  <Users size={16} />
                  <span>{t('footer.features.global')}</span>
                </div>
                <div className="feature-item">
                  <Globe size={16} />
                  <span>{t('footer.features.crossBorder')}</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <h4>{t('footer.platform')}</h4>
              <ul>
                <li><Link to="/">{t('nav.home')}</Link></li>
                <li><Link to="/researchers">{t('nav.researchers')}</Link></li>
                <li><Link to="/faq">{t('nav.faq')}</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>{t('footer.resources')}</h4>
              <ul>
                <li><Link to="/contact">{t('footer.submitProfile')}</Link></li>
                <li><Link to="/faq">{t('footer.howItWorks')}</Link></li>
                <li><Link to="/contact">{t('footer.getSupport')}</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>{t('footer.contactTitle')}</h4>
              <p>{t('footer.contactDesc')}</p>
              <Link to="/contact" className="footer-cta">
                <span>{t('footer.getInTouch')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} {t('footer.copyright')}</p>
            <div className="footer-legal">
              <Link to="/faq">{t('footer.privacy')}</Link>
              <Link to="/faq">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
