import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const { language, changeLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setLangOpen(false)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langOpen && !e.target.closest('.language-selector')) {
        setLangOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [langOpen])

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/researchers', label: t('nav.researchers') },
    { path: '/project-owners', label: t('nav.projectOwners') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ]

  const languages = [
    { code: 'en', name: t('languages.en') },
    { code: 'fr', name: t('languages.fr') },
    { code: 'de', name: t('languages.de') },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">
            <span className="logo-icon">SCH</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Science Contact Hub</span>
            <span className="brand-tagline">Research Collaboration</span>
          </div>
        </Link>

        <nav className={`navbar-nav ${isOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <div className="language-selector">
            <button
              className="lang-btn"
              onClick={(e) => {
                e.stopPropagation()
                setLangOpen(!langOpen)
              }}
              aria-expanded={langOpen}
            >
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
              <ChevronDown size={14} className={langOpen ? 'rotate' : ''} />
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      changeLanguage(lang.code)
                      setLangOpen(false)
                    }}
                  >
                    <span>{lang.name}</span>
                    {language === lang.code && <Check size={16} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
