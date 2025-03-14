import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Experience.css';

const Experience = () => {
  const { t, language } = useLanguage();
  
  // Dados de experiência específicos para cada idioma
  const experiences = [
    {
      id: 1,
      title: language === 'pt-BR' ? "Desenvolvedor Front-end" : "Front-end Developer",
      company: language === 'pt-BR' ? "Site de Mão de Obra Especializada" : "Specialized Labor Website",
      location: language === 'pt-BR' ? "São Paulo" : "São Paulo, Brazil",
      period: language === 'pt-BR' ? "Maio 2024" : "May 2024",
      type: language === 'pt-BR' ? "Freelancer" : "Freelance",
      description: language === 'pt-BR' 
        ? "Desenvolvimento de um site responsivo para serviços de mão de obra especializada. Implementação de interface intuitiva com sistema de pagamento online, seções para serviços, contato e informações sobre a empresa. Projeto completo desde o design até a implementação. Tecnologias: HTML, CSS, JavaScript, Bootstrap e Figma."
        : "Development of a responsive website for specialized labor services. Implementation of an intuitive interface with online payment system, sections for services, contact, and company information. Complete project from design to implementation. Technologies: HTML, CSS, JavaScript, Bootstrap, and Figma."
    },
    {
      id: 2,
      title: language === 'pt-BR' ? "Desenvolvedor Front-end" : "Front-end Developer",
      company: language === 'pt-BR' ? "Projeto API Google Maps" : "Google Maps API Project",
      location: language === 'pt-BR' ? "São Paulo" : "São Paulo, Brazil",
      period: language === 'pt-BR' ? "Maio 2024" : "May 2024",
      type: language === 'pt-BR' ? "Freelancer" : "Freelance",
      description: language === 'pt-BR'
        ? "Desenvolvimento de site com integração da API do Google Maps, implementando uma funcionalidade personalizada que permite sobrepor a visão de satélite ao mapa normal ao clicar no ícone de localização. Essa solução proporciona uma experiência de visualização híbrida para o usuário. Tecnologias: HTML, CSS, JavaScript."
        : "Website development with Google Maps API integration, implementing a custom functionality that allows overlaying satellite view on the normal map when clicking on the location icon. This solution provides a hybrid viewing experience for the user. Technologies: HTML, CSS, JavaScript."
    },
    {
      id: 3,
      title: language === 'pt-BR' ? "Desenvolvedor Front-end" : "Front-end Developer",
      company: language === 'pt-BR' ? "Portfolio para Engenheiro" : "Portfolio for Engineer",
      location: language === 'pt-BR' ? "São Paulo" : "São Paulo, Brazil",
      period: language === 'pt-BR' ? "Junho 2024 - Presente" : "June 2024 - Present",
      type: language === 'pt-BR' ? "Freelancer" : "Freelance",
      description: language === 'pt-BR'
        ? "Desenvolvimento em andamento de um portfolio profissional para engenheiro civil, com foco em exibição de projetos técnicos e certificações. Implementação de visualizador interativo de plantas, galeria de projetos categorizada e seção de depoimentos de clientes. Tecnologias: React, Tailwind CSS, JavaScript."
        : "Ongoing development of a professional portfolio for a civil engineer, focusing on displaying technical projects and certifications. Implementation of an interactive floor plan viewer, categorized project gallery, and customer testimonials section. Technologies: React, Tailwind CSS, JavaScript."
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">{t.experience.title}</h2>
      
      {experiences.map((job, index) => (
        <div 
          key={job.id} 
          className={`job-item ${index === experiences.length - 1 ? 'last-item' : ''}`}
        >
          <div className="job-header">
            <h3 className="job-title">{job.title}</h3>
            <span className="job-type">{job.type}</span>
          </div>
          
          <div className="job-company">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            {job.company}
          </div>
          
          <div className="job-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {job.location}
          </div>
          
          <div className="job-period">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {job.period}
          </div>
          
          {job.description && (
            <div className="job-description">
              <p>{job.description}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default React.memo(Experience); 