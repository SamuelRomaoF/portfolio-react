import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = t.hero.roles || ["Programador web", "Programador front-end", "Especialistas em Web", "Criador de interfaces"];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Ajusta a velocidade
      if(!isDeleting && text === fullText) {
        // Pausa ao completar a frase
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(100);
      } else if(isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  // Adicionar o estilo do cursor diretamente ao head do documento
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: var(--text-primary) }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="home" className="hero">
      {/* Conteúdo de texto */}
      <div className="hero-content">
        <h1 className="hero-title">
          {t.hero.greeting} <span role="img" aria-label="waving hand" className="wave-emoji">👋</span>,
        </h1>
        <h2 className="hero-subtitle">
          {t.hero.intro} <span className="highlight">{t.hero.name}</span>
        </h2>
        <p className="hero-typing">
          {text}
          <span className="cursor"></span>
        </p>
      </div>
      
      {/* Foto com borda gradiente */}
      <div className="profile-container">
        <div className="profile-image-wrapper">
          <img 
            src="https://i.im.ge/2025/03/13/pqVO2D.WhatsApp-Image-2025-03-13-at-15-02-59.jpeg" 
            alt="Profissional agenciasml" 
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 