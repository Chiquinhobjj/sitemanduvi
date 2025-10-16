# 🌳 Guia Completo para Editar o Site do Instituto Manduvi

## 📁 Como Baixar e Configurar

### 1. **Download do Projeto**
- Baixe o arquivo `instituto-manduvi-site.zip` 
- Extraia em uma pasta no seu computador
- Abra a pasta no **Cursor**, **VS Code** ou seu editor preferido

### 2. **Instalação das Dependências**
```bash
# No terminal, dentro da pasta do projeto:
npm install
# ou
pnpm install
```

### 3. **Executar Localmente**
```bash
# Para ver as mudanças em tempo real:
npm run dev
# ou
pnpm dev
```

## 🤖 Chatbot ManduvIA (ChatKit)

O assistente da ManduvIA agora está conectado ao workflow hospedado na OpenAI via ChatKit.

### Variáveis de ambiente
- `OPENAI_API_KEY`: chave privada da OpenAI (nunca exponha no frontend). Requer permissão para o workflow.
- `OPENAI_CHATKIT_WORKFLOW_ID` (opcional): por padrão usamos `wf_68e6a6d819d88190aee60893b4b8ef660de2547f19c73575`. Ajuste se criar outro workflow.

Crie um arquivo `.env.local` na raiz do projeto e adicione:
```bash
OPENAI_API_KEY="coloque_sua_chave_aqui"
# OPENAI_CHATKIT_WORKFLOW_ID="wf_personalizado_se_precisar"
```

### Fluxo de autenticação
- O Vite expõe o endpoint local `/api/chatkit/session`, que troca o `workflow_id` por um `client_secret`.
- O frontend nunca conhece a sua `OPENAI_API_KEY`; apenas consome o `client_secret`.
- Em produção, replique esse endpoint em qualquer servidor (Node/Edge) e mantenha a rota `/api/chatkit/session`.

### Personalização do widget
- O componente `ManduviaChat` (`src/components/assistant/ManduviaChat.jsx`) usa `@openai/chatkit-react`.
- Ajuste `startScreen.prompts`, a mensagem de boas-vindas ou o placeholder do composer para mudar os atalhos sugeridos.
- Para estilização avançada consulte a [documentação oficial](https://platform.openai.com/docs/guides/chatkit) e altere a chave `theme` do hook `useChatKit`.

### Cuidados de produção
- O build continua estático, mas você precisa de um backend/dynamic route para `/api/chatkit/session`.
- Não versione arquivos `.env*` com a chave.
- Teste o fluxo rodando `pnpm dev` após configurar a variável – o console avisará se o token não puder ser emitido.

## 🎯 Arquivos Principais para Editar

### 📄 **1. Informações Básicas**
**Arquivo:** `index.html`
- Título da página
- Meta descrições
- Favicon

### 🏠 **2. Seção Hero (Página Inicial)**
**Arquivo:** `src/components/sections/HeroSection.jsx`

**O que editar:**
```jsx
// Linha 82-87: Título e subtítulo
<h1>Instituto Manduvi</h1>
<p>SocialTech que transforma vidas e comunidades</p>

// Linha 5-22: Badges animados
const achievements = [
  { text: '20+ Anos', bgColor: 'bg-secondary', textColor: 'text-secondary-foreground', icon: '📅' },
  // Adicione/edite mais badges aqui
]

// Linha 71-73: Avatar (ícone da árvore)
<span className="text-8xl">🌳</span>
```

### 📖 **3. Seção Sobre**
**Arquivo:** `src/components/sections/AboutSection.jsx`

**O que editar:**
- História do Instituto
- Missão e valores
- Fundadores
- Informações institucionais

### 🚀 **4. Seção Projetos**
**Arquivo:** `src/components/sections/ProjectsSection.jsx`

**O que editar:**
- Lista de projetos
- Descrições
- Imagens dos projetos
- Depoimentos

### 🏆 **5. Seção Conquistas/Impacto**
**Arquivo:** `src/components/sections/AchievementsSection.jsx`

**O que editar:**
- Números de impacto
- Estatísticas
- Conquistas especiais

### 📞 **6. Seção Contato**
**Arquivo:** `src/components/sections/ContactSection.jsx`

**O que editar:**
- Informações de contato
- Endereço
- Telefone e email
- Redes sociais

## 📊 Observatório de Dados Manduvi

O Observatório é uma página completa que cruza indicadores institucionais, metas de projetos e status da integração via MCP/API. Ele fica no arquivo `src/components/sections/DataObservatorySection.jsx` e usa os dados carregados pelo hook `useObservatoryData`.

### ✨ Como abrir no Cursor
1. Abra o Cursor e carregue a pasta do projeto (`Arquivo > Open...`).
2. No painel esquerdo, localize `src/components/sections/DataObservatorySection.jsx`.
3. Use `Cmd/Ctrl + P` para pesquisar por “DataObservatorySection” e abrir o componente mais rápido.
4. Para editar os dados padrão, abra também `src/data/observatory.js`.

### 🔌 Conectando à API ou MCP
O hook `src/hooks/use-observatory-data.js` primeiro tenta buscar os dados reais e, se houver erro, usa o fallback local.

1. **Endpoints**: atualize `src/lib/observatoryClient.js` com as URLs da MCP ou da sua API REST.
2. **Chaves/Headers**: personalize a função `fetchFromApi()` no mesmo arquivo para incluir tokens ou cabeçalhos necessários.
3. **Teste**: rode `pnpm dev` e observe o bloco “Pipeline automatizado” na página do Observatório. Ele mostra se o feed está “Online”, “Sincronizando” ou “Em manutenção”.

### 🧠 Customizando os indicadores
- `src/data/observatory.js` contém séries históricas, metas e insights utilizados como fallback. Você pode editar os arrays `instituteIndicators`, `projects` e `integrationFlow` diretamente no Cursor.
- Cada projeto aceita campos como `trilhasConcluidas`, `satisfacao`, `empregabilidade` etc. Mantenha o formato em `camelCase` para continuar exibindo nos gráficos.
- Os textos explicativos (cards de destaque, insights e CTAs) também moram nesse arquivo.

### 👥 Painel de Usuários
- A página `src/components/sections/ObservatoryUserPanel.jsx` lista guardiões, parceiros e convites pendentes do Observatório.
- Ajuste filtros, textos e cards alterando os arrays `userStats`, `userDirectory` e `activityTimeline` no topo do componente.
- Para incluir integrações reais, substitua os dados estáticos por chamadas MCP/API dentro do componente (ou extraia para um hook dedicado).

### 🎨 Ajustando layout/narrativa
O componente principal está dividido em blocos:

1. **Hero** – linhas 40-120: título, resumo e indicadores principais.
2. **Indicadores institucionais** – linhas 120-270: gráficos (`recharts`) e resumos automáticos.
3. **Destaques por projeto** – linhas 270-520: cards com série histórica + comparativos.
4. **Pipeline de dados** – linhas 520-660: status de integrações MCP/API.
5. **CTA final e governança** – linhas 660+.

Edite textos e rótulos diretamente nas seções correspondentes. Se quiser alterar cores dos gráficos, ajuste os objetos `instituteTrendConfig` e `projectEngagementConfig` no topo do arquivo.

### 🚀 Publicando as mudanças
1. Confirme que tudo funciona localmente (`pnpm dev`).
2. Rode `pnpm build` para garantir que não há erros de produção.
3. Faça commit das alterações e publique normalmente (Vercel, Netlify ou servidor próprio).
4. Caso use MCP hospedado separadamente, verifique se o cron/sincronização está ativo para alimentar o Observatório.

## 🎨 Personalização Visual

### **Cores do Instituto**
**Arquivo:** `src/App.css`

```css
/* Cores principais do Manduvi */
:root {
  --primary: #f97316; /* Laranja */
  --secondary: #16a34a; /* Verde */
  /* Outras cores... */
}
```

### **Imagens**
**Pasta:** `public/images/`
- Adicione imagens dos projetos
- Fotos da equipe
- Logo do Instituto

## 📝 Seções que Precisam ser Editadas

### ✅ **Já Editadas (Seção Hero):**
- [x] Título: "Instituto Manduvi"
- [x] Subtítulo: "SocialTech que transforma vidas"
- [x] Avatar: 🌳 (árvore Manduvi)
- [x] Badges temáticos

### 🔄 **Ainda Precisam ser Editadas:**

#### **1. AboutSection.jsx**
- [ ] Remover informações da Marina
- [ ] Adicionar história do Instituto Manduvi
- [ ] Incluir tripé: Acolher, Inovar, Impactar
- [ ] Adicionar fundadores: Chiquinho, Luzia, Mestre Chicão

#### **2. SkillsSection.jsx**
- [ ] Trocar skills técnicas por áreas de atuação
- [ ] Esporte, Educação, Tecnologia, Saúde
- [ ] Metodologias do Instituto

#### **3. ProjectsSection.jsx**
- [ ] Academia Solidária
- [ ] Programa Meu Futuro
- [ ] Jiu-Jitsu Para Todos - APAE
- [ ] Outros projetos do Instituto

#### **4. TechStackSection.jsx**
- [ ] Trocar por "Áreas de Atuação"
- [ ] Esporte, Educação, Saúde, Tecnologia
- [ ] Parcerias e metodologias

#### **5. AchievementsSection.jsx**
- [ ] 20+ anos de atuação
- [ ] 20.000+ vidas impactadas
- [ ] 94% consideram espaço seguro
- [ ] 68% melhoria nas notas
- [ ] 20% redução na evasão escolar

#### **6. ContactSection.jsx**
- [ ] Endereço: Cuiabá, MT
- [ ] Email: contato@institutomanduvi.org.br
- [ ] Telefone real do Instituto
- [ ] Redes sociais do Manduvi

#### **7. FloatingNav.jsx**
- [ ] Ajustar links de navegação
- [ ] Traduzir para português se necessário

#### **8. Footer.jsx**
- [ ] Informações do Instituto
- [ ] Links institucionais
- [ ] Copyright do Instituto Manduvi

## 🚀 Como Publicar no GitHub

### **1. Criar Repositório**
1. Vá para [github.com](https://github.com)
2. Clique em "New repository"
3. Nome: `instituto-manduvi-site`
4. Descrição: "🌳 Site oficial do Instituto Manduvi"
5. Marque como "Public"

### **2. Subir o Código**
```bash
# No terminal, dentro da pasta:
git init
git add .
git commit -m "🌳 Site inicial do Instituto Manduvi"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/instituto-manduvi-site.git
git push -u origin main
```

### **3. Configurar Deploy Automático**
- Use **Vercel**, **Netlify** ou **GitHub Pages**
- Conecte com o repositório GitHub
- Deploy automático a cada commit

## 📋 Checklist de Edição

### **Prioridade Alta:**
- [ ] Editar AboutSection (história e valores)
- [ ] Editar ProjectsSection (projetos reais)
- [ ] Editar AchievementsSection (números reais)
- [ ] Editar ContactSection (contatos reais)

### **Prioridade Média:**
- [ ] Personalizar SkillsSection (áreas de atuação)
- [ ] Adaptar TechStackSection (metodologias)
- [ ] Ajustar navegação e footer

### **Prioridade Baixa:**
- [ ] Adicionar imagens reais
- [ ] Ajustar cores específicas
- [ ] Otimizar SEO

## 🎯 Dicas Importantes

1. **Mantenha o Design:** O layout está perfeito, só mude o conteúdo
2. **Teste Sempre:** Use `npm run dev` para ver mudanças
3. **Backup:** Faça commits frequentes no Git
4. **Imagens:** Use formato WebP para melhor performance
5. **Responsivo:** Teste em mobile e desktop

## 📞 Suporte

Se precisar de ajuda com alguma edição específica, me chame! Posso ajudar a:
- Editar seções específicas
- Adicionar novas funcionalidades
- Resolver problemas técnicos
- Configurar deploy automático

**Boa sorte com as edições! 🌟**
