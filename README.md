# Meu Portfólio - React com Tailwind CSS

Este é o meu projeto de portfólio pessoal desenvolvido com React e estilizado com Tailwind CSS.

## Tecnologias Utilizadas

- React 19
- TypeScript
- Tailwind CSS
- CRACO (Create React App Configuration Override)

## Características

- Design responsivo
- Interface moderna e elegante
- Seções para apresentação, habilidades, projetos e contato
- Totalmente personalizável

## Como Iniciar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/meu-portfolio.git
   cd meu-portfolio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

4. Acesse `http://localhost:3000` no seu navegador (ou a porta indicada no terminal).

## Personalização

Você pode personalizar este portfólio de várias maneiras:

1. Editar informações pessoais no componente App.tsx
2. Adicionar suas próprias imagens na pasta public
3. Modificar cores, tamanhos e espaçamentos usando as classes do Tailwind CSS
4. Adicionar novas seções conforme necessário

## Estrutura do Projeto

```
portfolio/
├── public/               # Arquivos públicos (favicon, index.html, etc.)
├── src/                  # Código fonte
│   ├── components/       # Componentes React
│   ├── App.tsx           # Componente principal
│   ├── index.tsx         # Ponto de entrada
│   └── index.css         # Estilos globais e diretivas Tailwind
├── tailwind.config.js    # Configuração do Tailwind CSS
├── craco.config.js       # Configuração do CRACO
└── package.json          # Dependências e scripts
```

## Implantação

Para compilar o aplicativo para produção:

```bash
npm run build
```

Isso criará uma pasta `build` com os arquivos otimizados para produção, que podem ser implantados em serviços como GitHub Pages, Vercel, Netlify, etc.

## Licença

Este projeto está licenciado sob a licença MIT.
