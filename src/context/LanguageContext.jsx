import { createContext, useContext, useState, useEffect } from 'react'
import en from '../translations/en.json'
import fr from '../translations/fr.json'
import de from '../translations/de.json'

const translations = { en, fr, de }

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('sch-language')
    return saved || 'en'
  })

  useEffect(() => {
    localStorage.setItem('sch-language', language)
    document.documentElement.lang = language
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // Fallback to English if translation not found
    if (value === undefined) {
      value = translations.en
      for (const k of keys) {
        value = value?.[k]
      }
    }
    
    return value || key
  }

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
