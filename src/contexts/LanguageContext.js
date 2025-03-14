import React, { createContext, useState, useContext, useEffect } from 'react';
// Removendo a importação não utilizada
// import translations from '../locales';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Usa o idioma do navegador ou português por padrão
    const browserLang = navigator.language;
    return browserLang === 'en-US' ? 'en-US' : 'pt-BR';
  });

  const [t, setTranslations] = useState(() => {
    return language === 'en-US' 
      ? require('../locales/en-US').default 
      : require('../locales/pt-BR').default;
  });

  // Alterna entre português e inglês
  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'pt-BR' ? 'en-US' : 'pt-BR';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  // Atualiza as traduções quando o idioma muda
  useEffect(() => {
    const loadTranslations = async () => {
      const newTranslations = language === 'en-US' 
        ? require('../locales/en-US').default 
        : require('../locales/pt-BR').default;
      setTranslations(newTranslations);
      document.documentElement.setAttribute('lang', language);
    };
    
    loadTranslations();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext; 