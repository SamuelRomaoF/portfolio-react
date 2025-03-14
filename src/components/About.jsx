import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/About.css';

const About = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">{language === 'pt-BR' ? 'Sobre Mim' : 'About Me'}</h2>

      <div className="about-content-text">
        {language === 'pt-BR' ? (
          <>
            <p className="about-description">
              Olá! Sou um desenvolvedor front-end apaixonado por criar interfaces interativas e responsivas. Atualmente estou cursando Análise e Desenvolvimento de Sistemas (2023-2025), e complemento minha formação com estudos contínuos em tecnologias web modernas.
            </p>
            <p className="about-description">
              Tenho experiência na criação de aplicações utilizando HTML, CSS e JavaScript, além de frameworks como React e bibliotecas como Bootstrap. Meu objetivo é desenvolver soluções que não apenas funcionem perfeitamente, mas que também proporcionem uma excelente experiência ao usuário.
            </p>
            <p className="about-description">
              Sou um entusiasta de novas tecnologias e estou sempre em busca de aprendizado contínuo. Meus projetos incluem desde interfaces de login a aplicações que integram APIs externas, demonstrando minha versatilidade e capacidade de adaptação a diferentes desafios.
            </p>
          </>
        ) : (
          <>
            <p className="about-description">
              Hello! I am a front-end developer passionate about creating interactive and responsive interfaces. I am currently studying Systems Analysis and Development (2023-2025), and I complement my education with continuous studies in modern web technologies.
            </p>
            <p className="about-description">
              I have experience in creating applications using HTML, CSS and JavaScript, as well as frameworks like React and libraries like Bootstrap. My goal is to develop solutions that not only work perfectly, but also provide an excellent user experience.
            </p>
            <p className="about-description">
              I am an enthusiast of new technologies and I am always seeking continuous learning. My projects range from login interfaces to applications that integrate external APIs, demonstrating my versatility and ability to adapt to different challenges.
            </p>
          </>
        )}
        
        <div className="cv-button-container">
          <a 
            href="https://drive.google.com/file/d/17yJVwpJi9RZnxIxbXwDRZozxjy936HNT/view" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cv-button"
          >
            {language === 'pt-BR' ? 'Baixar CV' : 'Download CV'}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About); 