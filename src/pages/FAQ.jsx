import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronDown, 
  HelpCircle, 
  Shield, 
  DollarSign, 
  Users,
  FileQuestion,
  Scale,
  ArrowRight
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useLanguage()

  const faqCategories = [
    {
      title: t('faq.categories.about.title'),
      icon: <HelpCircle size={20} />,
      questions: [
        {
          question: t('faq.categories.about.q1'),
          answer: t('faq.categories.about.a1')
        },
        {
          question: t('faq.categories.about.q2'),
          answer: t('faq.categories.about.a2')
        },
        {
          question: t('faq.categories.about.q3'),
          answer: t('faq.categories.about.a3')
        }
      ]
    },
    {
      title: t('faq.categories.responsibility.title'),
      icon: <Scale size={20} />,
      questions: [
        {
          question: t('faq.categories.responsibility.q1'),
          answer: t('faq.categories.responsibility.a1')
        },
        {
          question: t('faq.categories.responsibility.q2'),
          answer: t('faq.categories.responsibility.a2')
        },
        {
          question: t('faq.categories.responsibility.q3'),
          answer: t('faq.categories.responsibility.a3')
        }
      ]
    },
    {
      title: t('faq.categories.financial.title'),
      icon: <DollarSign size={20} />,
      questions: [
        {
          question: t('faq.categories.financial.q1'),
          answer: t('faq.categories.financial.a1')
        },
        {
          question: t('faq.categories.financial.q2'),
          answer: t('faq.categories.financial.a2')
        }
      ]
    },
    {
      title: t('faq.categories.collaborations.title'),
      icon: <Users size={20} />,
      questions: [
        {
          question: t('faq.categories.collaborations.q1'),
          answer: t('faq.categories.collaborations.a1')
        },
        {
          question: t('faq.categories.collaborations.q2'),
          answer: t('faq.categories.collaborations.a2')
        },
        {
          question: t('faq.categories.collaborations.q3'),
          answer: t('faq.categories.collaborations.a3')
        }
      ]
    }
  ]

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content centered">
            <span className="page-label">{t('faq.label')}</span>
            <h1>{t('faq.title')}</h1>
            <p>{t('faq.description')}</p>
          </div>
        </div>
      </section>

      {/* FAQ Categories Overview */}
      <section className="section categories-section">
        <div className="container">
          <div className="categories-grid">
            {faqCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.questions.length} {t('faq.questions')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Image */}
      <section className="faq-image-section">
        <div className="container">
          <div className="faq-image-banner">
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" 
              alt="Research and study"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section faq-section">
        <div className="container">
          <div className="faq-wrapper">
            <div className="faq-sidebar">
              <div className="sidebar-card">
                <FileQuestion size={32} />
                <h4>{t('faq.stillHaveQuestions')}</h4>
                <p>{t('faq.cantFind')}</p>
                <Link to="/contact" className="btn btn-primary">
                  <span>{t('faq.contactUs')}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="sidebar-card secondary">
                <Shield size={32} />
                <h4>{t('faq.researchIntegrity')}</h4>
                <p>{t('faq.integrityDesc')}</p>
              </div>
            </div>
            <div className="faq-content">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex} className="faq-category">
                  <div className="category-header">
                    {category.icon}
                    <h3>{category.title}</h3>
                  </div>
                  <div className="faq-list">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = faqCategories
                        .slice(0, catIndex)
                        .reduce((acc, cat) => acc + cat.questions.length, 0) + faqIndex
                      
                      return (
                        <div 
                          key={faqIndex} 
                          className={`faq-item ${openIndex === globalIndex ? 'open' : ''}`}
                        >
                          <button 
                            className="faq-question"
                            onClick={() => setOpenIndex(openIndex === globalIndex ? -1 : globalIndex)}
                            aria-expanded={openIndex === globalIndex}
                          >
                            <span>{faq.question}</span>
                            <ChevronDown 
                              size={20} 
                              className={`faq-icon ${openIndex === globalIndex ? 'rotate' : ''}`} 
                            />
                          </button>
                          <div className="faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>{t('faq.cta.title')}</h2>
              <p>{t('faq.cta.description')}</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-accent btn-lg">
                {t('faq.cta.researcher')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
