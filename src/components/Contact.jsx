import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        {t.contact.title}
      </h2>
      <a 
        href="mailto:ofc.samuelromao@gmail.com"
        className="contact-email"
      >
        ofc.samuelromao@gmail.com
      </a>
    </section>
  );
};

export default React.memo(Contact); 