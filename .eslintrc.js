module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'no-unused-vars': 'off', // Desabilita o aviso para variáveis não utilizadas
    '@typescript-eslint/no-unused-vars': 'off', // Também desabilita para TypeScript
  },
}; 