import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Education.css';

const Education = () => {
  const { t, language } = useLanguage();
  
  const educations = [
    {
      id: 1,
      degree: language === 'pt-BR' ? "Análise e Desenvolvimento de Sistemas" : "Analysis and Systems Development",
      institution: language === 'pt-BR' ? "Faculdade/Universidade" : "College/University",
      period: "2023 - 2025",
      type: language === 'pt-BR' ? "Graduação" : "Bachelor's Degree"
    }
  ];
  
  // Cursos complementares
  const courses = [
    {
      id: 1,
      name: language === 'pt-BR' ? "Fundamentos de Desenvolvimento Web" : "Web Development Fundamentals",
      institution: "Digital Innovation One",
      period: "2023",
      certificate: true
    },
    {
      id: 2,
      name: "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
      institution: "Amazon Web Services",
      period: "2023",
      certificate: true
    },
    {
      id: 3,
      name: "CCNA: Introduction to Networks",
      institution: "Cisco",
      period: "2024",
      certificate: true
    }
  ];

  return (
    <section className="education-section" id="education">
      <h2 className="section-title">{t.education.title}</h2>
      
      {educations.map((edu) => (
        <div key={edu.id} className="education-item">
          <div className="education-header">
            <h3 className="education-title">{edu.degree}</h3>
            <span className="education-type">{edu.type}</span>
          </div>
          
          <div className="education-institution">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            {edu.institution}
          </div>
          
          <div className="education-period">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {edu.period}
          </div>
        </div>
      ))}
      
      {/* Seção de cursos complementares */}
      <h3 className="courses-title">{t.education.courses}</h3>
      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <div className="course-name">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              {course.name}
            </div>
            <div className="course-details">
              <span className="course-institution">{course.institution}</span>
              <span className="course-period">{course.period}</span>
              {course.certificate && <span className="course-certificate">
                {language === 'pt-BR' ? 'Certificado' : 'Certificate'}
              </span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Education); 