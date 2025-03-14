/**
 * Arquivo de configuração para internacionalização (i18n)
 * 
 * Este módulo pode ser expandido no futuro para suportar múltiplos idiomas
 * Por enquanto, configurado para usar apenas português brasileiro (pt-BR)
 */

interface Translations {
  [lang: string]: {
    [key: string]: string;
  };
}

// Objeto que armazena as traduções (apenas pt-BR por enquanto)
const translations: Translations = {
  'pt-BR': {
    // Adicione mensagens aqui para suporte futuro a múltiplos idiomas
  }
};

// Retorna o idioma atual configurado no navegador ou pt-BR como padrão
export const getCurrentLanguage = (): string => {
  return 'pt-BR'; // Mantido fixo por enquanto
};

// Função para obter uma mensagem traduzida (para uso futuro)
export const t = (key: string): string => {
  const lang = getCurrentLanguage();
  const messages = translations[lang] || {};
  return messages[key] || key;
};

export default {
  getCurrentLanguage,
  t
}; 