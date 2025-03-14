import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Detecta idioma do navegador e atualiza o atributo lang, se necessário
if (navigator.language.toLowerCase().includes('pt')) {
  document.documentElement.lang = 'pt-BR';
} else {
  // Se quiser permitir outros idiomas no futuro, pode adicionar aqui
  document.documentElement.lang = 'pt-BR'; // Mantém pt-BR como padrão por enquanto
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
