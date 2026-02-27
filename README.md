# Portfolio Jean Velloso

Um portfolio pessoal moderno e responsivo desenvolvido com Next.js, TypeScript e Tailwind CSS, implementando as melhores práticas de desenvolvimento web.

## 🚀 Características


1. Open the terminal and navigate to the directory where you want to clone the repository, then run the following command:
    ```bash
    git clone https://github.com/jeanvelloso/website
    ```
   
2. Enter the project directory:
    ```bash
    cd portfolio
    ```
3. Install the dependencies using Yarn:
    ```bash
    yarn
    ```
4. Run the project
    ```bash
    yarn dev
    ```

- **Design Moderno**: Interface limpa e profissional com suporte a tema light/dark
- **Responsivo**: Otimizado para todos os dispositivos (mobile-first)
- **Performance**: Carregamento rápido com otimizações de SEO e lazy loading
- **Acessibilidade**: Conformidade com padrões WCAG 2.1
- **Configurável**: Sistema de configuração baseado em JSONs
- **Tipografia**: Fonte Inter Variable para melhor legibilidade
- **SEO Otimizado**: Meta tags dinâmicas e structured data


## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 13.5.7
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Tema**: next-themes
- **Ícones**: React Icons
- **Fontes**: Inter Variable (@fontsource-variable/inter)
- **Autenticação**: Clerk (opcional)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── commons/
│   │   ├── Header/
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── PageSection.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── Home/
│   │   └── Inicio.tsx
│   └── icons/
├── lib/
│   ├── settings.js
│   └── posts.ts
├── pages/
│   ├── index.tsx
│   ├── sobre.tsx
│   ├── projetos.tsx
│   ├── contato.tsx
│   └── posts/
├── styles/
│   └── globals.css
└── types/
    └── Home.d.ts

content/
└── settings/
    ├── business.json
    ├── general.json
    ├── theme.json
    ├── logos.json
    ├── mainMenu.json
    └── linkTree.json
```

## ⚙️ Configuração

### 1. Instalação

```bash
# Clone o repositório
git clone https://github.com/jeanvelloso/portfolio.git

# Entre na pasta do projeto
cd portfolio

# Instale as dependências
npm install
```

### 2. Configuração das Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Clerk (opcional - para autenticação)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key_here

# Configurações do site
NEXT_PUBLIC_SITE_URL=https://portfolio-velloso.netlify.app
CONTACT_EMAIL=jeanvelloso@hotmailcom
```

### 3. Personalização

Edite os arquivos JSON em `content/settings/` para personalizar:

- **business.json**: Informações da empresa/pessoa
- **general.json**: Configurações gerais do site
- **theme.json**: Cores e configurações visuais
- **logos.json**: URLs das imagens e logos
- **mainMenu.json**: Menu de navegação
- **linkTree.json**: Links das redes sociais

## 🚀 Executando o Projeto

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Produção

```bash
# Build do projeto
npm run build

# Iniciar servidor de produção
npm run start
```

## 📱 Páginas Disponíveis

- **/** - Página inicial com hero section e posts
- **/sobre** - Página sobre mim com habilidades e experiência
- **/projetos** - Galeria de projetos desenvolvidos
- **/contato** - Formulário de contato e informações
- **/posts/[slug]** - Posts individuais do blog

## 🎨 Sistema de Tema

O projeto inclui um sistema completo de tema light/dark:

- Toggle automático baseado na preferência do sistema
- Persistência da escolha do usuário
- Transições suaves entre temas
- Cores adaptáveis em todos os componentes

## 📝 Sistema de Configuração

O projeto utiliza um sistema de configuração baseado em arquivos JSON que permite:

- Alterar cores e temas sem modificar código
- Gerenciar menu de navegação dinamicamente
- Configurar informações de contato e redes sociais
- Personalizar logos e imagens

## 🔧 Componentes Reutilizáveis

### PageSection
Componente flexível para criar seções de página:

```tsx
<PageSection
  title="Título da Seção"
  subtitle="Subtítulo opcional"
  numColumns={3}
  bgColor="bg-gray-50 dark:bg-gray-800"
  ctaBtnText="Botão Principal"
  ctaBtnLink="/link"
>
  {/* Conteúdo da seção */}
</PageSection>
```

### ThemeToggle
Botão para alternar entre temas light/dark:

```tsx
<ThemeToggle />
```

## 📊 SEO e Performance

- Meta tags dinâmicas baseadas no conteúdo
- Structured data para melhor indexação
- Lazy loading de imagens
- Otimizações de Core Web Vitals
- Sitemap automático

## 🎯 Acessibilidade

- Navegação por teclado
- ARIA labels em componentes interativos
- Contraste de cores adequado
- Suporte a screen readers
- Foco visível em elementos interativos

## 📱 Responsividade

- Design mobile-first
- Breakpoints otimizados para todos os dispositivos
- Menu hamburger para mobile
- Grid responsivo em todas as seções

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`
3. Configure as variáveis de ambiente

### Outros Provedores

O projeto pode ser deployado em qualquer provedor que suporte Next.js.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Jean Velloso**

- Email: jeanvelloso@hotmailcom
- LinkedIn: [linkedin.com/in/guicirelli](https://linkedin.com/in/guicirelli)
- GitHub: [github.com/jeanvelloso](https://github.com/jeanvelloso)

---

Desenvolvido com ❤️ por Jean Velloso