import React, { useState, lazy, Suspense } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Projects.css';

// Definição de um componente ProjectCard para cada projeto
const ProjectCard = ({ project, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  
  return (
    <div
      className={`project-card ${isHovered ? 'project-card-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container da imagem */}
      <div className="project-image-container">
        {/* Tags de tecnologias posicionadas acima da imagem */}
        <div className="project-tech-tags">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="project-tech-tag"
              style={{
                backgroundColor: tech.color,
                color: tech.color === '#F7DF1E' ? '#000' : '#fff'
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        {/* Imagem do projeto */}
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
          loading="lazy" // Lazy loading para performance
        />
      </div>
      
      {/* Conteúdo do projeto */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {/* Links para demo e código */}
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            {t.projects.live}
          </a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            {t.projects.code}
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t, language } = useLanguage();
  
  // Dados dos projetos
  const projects = [
    {
      id: 1,
      title: language === 'pt-BR' ? 'Portfolio para Engenheiro' : 'Portfolio for Engineer',
      description: language === 'pt-BR'
        ? 'Desenvolvimento de um portfolio profissional para engenheiro civil, com foco em exibição de projetos técnicos e certificações. Implementação de visualizador interativo de plantas, galeria de projetos categorizada e seção de depoimentos de clientes. Tecnologias: React, Tailwind CSS, JavaScript.'
        : 'Development of a professional portfolio for a civil engineer, focusing on displaying technical projects and certifications. Implementation of an interactive floor plan viewer, categorized project gallery, and customer testimonials section. Technologies: React, Tailwind CSS, JavaScript.',
      image: 'https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=850&q=80',
      technologies: [
        { name: 'React', color: '#61DAFB' },
        { name: 'Tailwind CSS', color: '#06B6D4' },
        { name: 'JavaScript', color: '#F7DF1E' }
      ],
      liveLink: 'https://portfolioengenheiro.netlify.app/',
      codeLink: 'https://github.com/SamuelRomaoF/engenheiro-portfolio'
    },
    {
      id: 2,
      title: language === 'pt-BR' ? 'Sistema de Login com Autenticação' : 'Login System with Authentication',
      description: language === 'pt-BR' 
        ? 'Sistema completo de autenticação com interface de login e registro de usuários. O projeto inclui formulários validados, persistência de dados, feedback visual e medidas de segurança básicas. Uma interface moderna e responsiva garante boa experiência em diferentes dispositivos.'
        : 'Complete authentication system with login and user registration interface. The project includes validated forms, data persistence, visual feedback, and basic security measures. A modern and responsive interface ensures a good experience across different devices.',
      image: 'https://i.im.ge/2025/03/13/pq8ztT.Captura-de-tela-2025-03-13-141829.png',
      technologies: [
        { name: 'HTML', color: '#E34F26' },
        { name: 'CSS', color: '#1572B6' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'React', color: '#61DAFB' }
      ],
      liveLink: 'https://sistemadeloginregistro.netlify.app/',
      codeLink: 'https://github.com/SamuelRomaoF/login-register'
    },
    {
      id: 3,
      title: language === 'pt-BR' ? 'Site de Mão de Obra Especializada' : 'Specialized Labor Website',
      description: language === 'pt-BR'
        ? 'Plataforma completa para contratação de serviços temporários e efetivos em diversas áreas como administrativa, limpeza e construção. Implementação de formulário de pagamento online integrado, sistema de contato e apresentação detalhada dos serviços oferecidos com design responsivo e intuitivo.'
        : 'Complete platform for hiring temporary and permanent services in various areas such as administrative, cleaning, and construction. Implementation of an integrated online payment form, contact system, and detailed presentation of services offered with responsive and intuitive design.',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=848&q=80',
      technologies: [
        { name: 'HTML', color: '#E34F26' },
        { name: 'CSS', color: '#1572B6' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'Bootstrap', color: '#7952B3' }
      ],
      liveLink: 'https://maodeobra.netlify.app/',
      codeLink: 'https://github.com/SamuelRomaoF/maodeobra'
    },
    {
      id: 4,
      title: language === 'pt-BR' ? 'Integração API Google Maps' : 'Google Maps API Integration',
      description: language === 'pt-BR'
        ? 'Aplicação web que integra a API do Google Maps com uma funcionalidade personalizada única: ao clicar no ícone de localização, a visualização de satélite sobrepõe o mapa tradicional, proporcionando uma experiência de visualização híbrida imersiva que facilita a navegação e o reconhecimento de áreas.'
        : 'Web application that integrates the Google Maps API with a unique custom functionality: when clicking on the location icon, the satellite view overlays the traditional map, providing an immersive hybrid viewing experience that facilitates navigation and area recognition.',
      image: 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=829&q=80',
      technologies: [
        { name: 'HTML', color: '#E34F26' },
        { name: 'CSS', color: '#1572B6' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'API', color: '#4CAF50' }
      ],
      liveLink: 'https://apidogooglemaps.netlify.app/',
      codeLink: 'https://github.com/SamuelRomaoF/Maps-API'
    },
    {
      id: 5,
      title: language === 'pt-BR' ? 'Gerador de QR Code' : 'QR Code Generator',
      description: language === 'pt-BR'
        ? 'Ferramenta web que permite aos usuários criar QR Codes personalizados a partir de URLs ou textos. A aplicação gera códigos QR funcionais instantaneamente que podem ser baixados e utilizados em materiais de marketing, compartilhamento de links ou informações de contato de forma simples e eficiente.'
        : 'Web tool that allows users to create customized QR Codes from URLs or text. The application generates functional QR codes instantly that can be downloaded and used in marketing materials, link sharing, or contact information in a simple and efficient way.',
      image: 'https://i.im.ge/2024/05/08/ZZWhih.Gerador-Qr-Code-Google-Chrome-07-05-2024-16-53-26.png',
      technologies: [
        { name: 'HTML', color: '#E34F26' },
        { name: 'CSS', color: '#1572B6' },
        { name: 'JavaScript', color: '#F7DF1E' }
      ],
      liveLink: 'https://qrforger.netlify.app/',
      codeLink: 'https://github.com/SamuelRomaoF/QR-Code'
    },
    {
      id: 6,
      title: language === 'pt-BR' ? 'Tela de Login' : 'Login Screen',
      description: language === 'pt-BR'
        ? 'Interface de autenticação moderna e segura com design minimalista e intuitivo. Implementação de validação de dados em tempo real, estilização avançada com CSS para criar uma experiência visual atraente e funcional, adaptada para diferentes dispositivos com layout responsivo.'
        : 'Modern and secure authentication interface with minimalist and intuitive design. Implementation of real-time data validation, advanced styling with CSS to create an attractive and functional visual experience, adapted for different devices with responsive layout.',
      image: 'https://i.im.ge/2025/03/13/pq8kq0.Captura-de-tela-2025-03-13-141448.png',
      technologies: [
        { name: 'HTML', color: '#E34F26' },
        { name: 'CSS', color: '#1572B6' },
        { name: 'JavaScript', color: '#F7DF1E' }
      ],
      liveLink: 'https://teladellogin.netlify.app/',
      codeLink: 'https://github.com/SamuelRomaoF/telalogin'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{t.projects.title}</h2>
      <p className="projects-description">
        {t.projects.description}
      </p>
      
      {/* Grid de projetos */}
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Projects); 