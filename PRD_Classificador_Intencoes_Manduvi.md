# PRD - Classificador de Intenções do Instituto Manduvi

## 📋 Visão Geral

**Objetivo:** Criar um sistema de classificação de intenções que receba perguntas dos usuários e retorne rótulos JSON para direcionar fluxos específicos no site do Instituto Manduvi.

**Contexto:** O Instituto Manduvi é uma SocialTech que atua em esporte, educação, tecnologia e impacto social, com 20+ anos de experiência e múltiplas iniciativas ativas.

---

## 🎯 Objetos do Site

### 1. **Instituto Manduvi (Entidade Principal)**
```json
{
  "nome": "Instituto Manduvi",
  "tipo": "SocialTech",
  "missao": "Promover desenvolvimento sustentável e impacto social",
  "visao": "Ser referência em desenvolvimento sustentável e impacto social positivo",
  "valores": ["Inovação", "Inclusão", "Colaboração", "Transparência", "Sustentabilidade"],
  "tripé": ["ACOLHER", "INOVAR", "IMPACTAR"],
  "metodologia": "HEXA (Competência • Confiança • Conexão • Caráter • Cuidado • Contribuição)",
  "localizacao": ["Mato Grosso", "Rio de Janeiro", "São Paulo", "Alabama"],
  "fundacao": "2004",
  "atendimentos_historicos": "150 mil+",
  "nps": "94%"
}
```

### 2. **Iniciativas/Projetos (6 Principais)**

#### 2.1 Jiu-Jitsu para Todos – APAE
```json
{
  "id": "jiujitsu",
  "nome": "Jiu-Jitsu para Todos – APAE",
  "pilar": "Esporte que Acolhe",
  "descricao": "Iniciativa pioneira que levou o jiu-jitsu para crianças, jovens e pessoas com deficiência",
  "metricas": {
    "atendimentos_anuais": "150",
    "faixa_preta_historica": "Fabricio Galvão - primeiro faixa-preta com Síndrome de Down do mundo",
    "parceria": "APAE de Cuiabá"
  },
  "ano_inicio": "2006",
  "tipo": "inclusao_esportiva"
}
```

#### 2.2 Manduvi Araras Team
```json
{
  "id": "araras",
  "nome": "Manduvi Araras Team",
  "pilar": "Esporte de Alto Rendimento",
  "descricao": "Programa permanente que identifica, nutre e potencializa atletas olímpicos",
  "metricas": {
    "atletas": "96",
    "pódios_internacionais": "27",
    "investimento": "R$ 4,8 mi"
  },
  "destaque": "Guilherme Porto - Prêmio Brasil Olímpico 2019",
  "tipo": "alto_rendimento"
}
```

#### 2.3 Programa Meu Futuro
```json
{
  "id": "meufuturo",
  "nome": "Programa Meu Futuro",
  "pilar": "Inovação que Acolhe",
  "descricao": "Motor de qualificação profissional com aulas curtas pelo WhatsApp e Mentor-IA Empático",
  "metricas": {
    "vagas_meta": "13.454",
    "taxa_conclusao": "75%",
    "empregabilidade": "60% em 6 meses"
  },
  "tecnologia": "ManduvIA Mentor",
  "tipo": "educacao_profissional"
}
```

#### 2.4 Coloiado – Saúde, Esporte e Lazer
```json
{
  "id": "coloiado",
  "nome": "Coloiado – Saúde, Esporte e Lazer",
  "pilar": "Inovação Data-Driven",
  "descricao": "Plataforma que coleta, analisa e visualiza dados para revolucionar a gestão social",
  "metricas": {
    "dados_monitorados": "2,4 mi registros",
    "painéis_ativos": "38 observatórios",
    "insights_ano": "92 decisões"
  },
  "tecnologia": "Dashboards + IA",
  "tipo": "governanca_dados"
}
```

#### 2.5 Academia Solidária
```json
{
  "id": "academia",
  "nome": "Academia Solidária",
  "pilar": "Esporte que Acolhe",
  "descricao": "Quartel-general das iniciações esportivas que une desenvolvimento físico e acompanhamento social",
  "metricas": {
    "familias_acompanhadas": "1.460",
    "melhora_escolar": "68%",
    "reducao_evasao": "-20%"
  },
  "modalidades": ["Boxe", "Jiu-Jitsu", "Futebol", "Ginástica Rítmica"],
  "tipo": "complexo_socioesportivo"
}
```

#### 2.6 Assistência & Saúde Manduvi
```json
{
  "id": "assistencia",
  "nome": "Assistência & Saúde Manduvi",
  "pilar": "Rede de Cuidado",
  "descricao": "Programas que garantem segurança alimentar, saúde física e mental em comunidades vulneráveis",
  "metricas": {
    "atendimentos_ano": "20 mil",
    "cestas_entregues": "48 toneladas",
    "voluntarios_ativos": "312"
  },
  "programas": ["Lutar Contra a Fome", "Esporte que Acolhe", "Ser + Saudável"],
  "tipo": "assistencia_social"
}
```

### 3. **Tecnologias e Ferramentas**

#### 3.1 ManduvIA (IA Empática)
```json
{
  "nome": "ManduvIA",
  "tipos": ["Mentor", "Concierge", "Insights", "Bem-estar"],
  "funcionalidades": [
    "Apoio 24/7 com linguagem acolhedora",
    "Avaliações técnicas e socioemocionais",
    "Dashboards de evolução",
    "Recomendações para gestores"
  ],
  "aplicacoes": ["Programa Meu Futuro", "Academia Solidária", "Coloiado", "Assistência"]
}
```

#### 3.2 Observatório Coloiado
```json
{
  "nome": "Coloiado",
  "tipo": "Plataforma de Dados",
  "funcionalidades": [
    "Coleta inteligente de dados",
    "Dashboards customizados",
    "Analytics em tempo real",
    "Integração com sistemas governamentais"
  ],
  "tecnologias": ["Crawlers", "APIs", "IA", "Cloud"]
}
```

### 4. **Métricas e KPIs**
```json
{
  "comunidade_acolhida": "72 mil pessoas",
  "investimento_social": "R$ 12,5 mi",
  "rede_ativa": "214 parceiros",
  "satisfacao": "94% NPS",
  "atendimentos_historicos": "150 mil+",
  "anos_atuacao": "20+",
  "paises_atuacao": 3
}
```

### 5. **Parceiros e Alianças**
```json
{
  "sebrae_mt": "Inovação empreendedora",
  "cuiaba_esporte_clube": "Alto rendimento e base",
  "secretaria_estadual_assistencia": "Políticas públicas e cofinanciamento",
  "fundacao_vale": "Investimento social privado"
}
```

---

## 🎯 Intenções do Usuário (Rótulos de Classificação)

### **Categoria: CONHECER**
```json
{
  "conhecer_instituto": {
    "descricao": "Quer saber sobre o Instituto Manduvi, história, missão, valores",
    "exemplos": [
      "O que é o Instituto Manduvi?",
      "Qual a missão do instituto?",
      "Como surgiu o Manduvi?",
      "Quais são os valores?",
      "Onde vocês atuam?"
    ],
    "fluxo_destino": "about"
  },
  "conhecer_iniciativas": {
    "descricao": "Quer conhecer os projetos e programas do instituto",
    "exemplos": [
      "Quais são as iniciativas?",
      "Que projetos vocês têm?",
      "O que é o Programa Meu Futuro?",
      "Como funciona o Jiu-Jitsu para Todos?",
      "O que é a Academia Solidária?"
    ],
    "fluxo_destino": "projects"
  },
  "conhecer_resultados": {
    "descricao": "Quer ver números, métricas e conquistas",
    "exemplos": [
      "Quantas pessoas vocês atendem?",
      "Quais são os resultados?",
      "Quantos projetos vocês têm?",
      "Qual o impacto social?",
      "Mostrem os números"
    ],
    "fluxo_destino": "achievements"
  }
}
```

### **Categoria: APOIAR**
```json
{
  "apoiar_financeiro": {
    "descricao": "Quer fazer doação, investimento ou patrocínio",
    "exemplos": [
      "Como posso doar?",
      "Quero patrocinar um projeto",
      "Como investir no instituto?",
      "Quero apoiar financeiramente",
      "Como fazer uma doação?"
    ],
    "fluxo_destino": "donation"
  },
  "apoiar_voluntario": {
    "descricao": "Quer ser voluntário ou mentor",
    "exemplos": [
      "Como ser voluntário?",
      "Quero ajudar como mentor",
      "Posso ser voluntário?",
      "Como participar como voluntário?",
      "Quero contribuir com meu tempo"
    ],
    "fluxo_destino": "volunteer"
  },
  "apoiar_parceria": {
    "descricao": "Empresa ou organização querendo parceria",
    "exemplos": [
      "Minha empresa quer ser parceira",
      "Como estabelecer parceria?",
      "Quero ser parceiro institucional",
      "Como minha ONG pode se aliar?",
      "Parceria corporativa"
    ],
    "fluxo_destino": "partnership"
  }
}
```

### **Categoria: MATRICULAR**
```json
{
  "matricular_meu_futuro": {
    "descricao": "Quer se inscrever no Programa Meu Futuro",
    "exemplos": [
      "Quero me inscrever no Meu Futuro",
      "Como participar do programa?",
      "Matrícula no Meu Futuro",
      "Quero fazer o curso",
      "Como me inscrever?"
    ],
    "fluxo_destino": "enrollment_meu_futuro"
  },
  "matricular_esporte": {
    "descricao": "Quer se matricular em atividades esportivas",
    "exemplos": [
      "Quero fazer jiu-jitsu",
      "Como me matricular na academia?",
      "Quero participar do boxe",
      "Matrícula em esportes",
      "Como entrar no time?"
    ],
    "fluxo_destino": "enrollment_sports"
  },
  "matricular_familia": {
    "descricao": "Quer matricular filhos ou família",
    "exemplos": [
      "Quero matricular meu filho",
      "Como inscrever minha família?",
      "Matrícula para crianças",
      "Quero que minha filha participe",
      "Inscrição familiar"
    ],
    "fluxo_destino": "enrollment_family"
  }
}
```

### **Categoria: AUDITAR**
```json
{
  "auditar_transparencia": {
    "descricao": "Quer ver relatórios, prestação de contas, transparência",
    "exemplos": [
      "Quero ver os relatórios",
      "Como vocês prestam contas?",
      "Mostrem a transparência",
      "Relatórios financeiros",
      "Prestação de contas"
    ],
    "fluxo_destino": "transparency"
  },
  "auditar_impacto": {
    "descricao": "Quer avaliar resultados e impacto social",
    "exemplos": [
      "Qual o impacto real?",
      "Como medem os resultados?",
      "Avaliação de impacto",
      "Métricas de sucesso",
      "Como comprovam o impacto?"
    ],
    "fluxo_destino": "impact_assessment"
  },
  "auditar_governanca": {
    "descricao": "Quer informações sobre governança e gestão",
    "exemplos": [
      "Como é a governança?",
      "Quem dirige o instituto?",
      "Estrutura organizacional",
      "Conselho de administração",
      "Gestão institucional"
    ],
    "fluxo_destino": "governance"
  }
}
```

### **Categoria: SOLICITAR**
```json
{
  "solicitar_ajuda": {
    "descricao": "Precisa de ajuda, acolhimento ou assistência",
    "exemplos": [
      "Preciso de ajuda",
      "Como solicitar acolhimento?",
      "Estou passando dificuldades",
      "Quero ajuda social",
      "Como receber assistência?"
    ],
    "fluxo_destino": "assistance_request"
  },
  "solicitar_apresentacao": {
    "descricao": "Quer uma apresentação ou reunião",
    "exemplos": [
      "Quero uma apresentação",
      "Agendar reunião",
      "Apresentação para minha empresa",
      "Quero conhecer melhor",
      "Demonstração dos projetos"
    ],
    "fluxo_destino": "presentation_request"
  },
  "solicitar_materiais": {
    "descricao": "Quer materiais, documentos ou informações específicas",
    "exemplos": [
      "Quero o material de patrocínio",
      "Kit do patrocinador",
      "Documentos do projeto",
      "Materiais de divulgação",
      "Informações detalhadas"
    ],
    "fluxo_destino": "materials_request"
  }
}
```

### **Categoria: CONTATAR**
```json
{
  "contatar_geral": {
    "descricao": "Quer entrar em contato geral",
    "exemplos": [
      "Como entrar em contato?",
      "Qual o telefone?",
      "Email de contato",
      "Quero falar com alguém",
      "Informações de contato"
    ],
    "fluxo_destino": "contact"
  },
  "contatar_especifico": {
    "descricao": "Quer falar com área específica",
    "exemplos": [
      "Quero falar com o setor de esportes",
      "Contato com educação",
      "Falar com assistência social",
      "Setor de parcerias",
      "Área de voluntariado"
    ],
    "fluxo_destino": "contact_specific"
  }
}
```

### **Categoria: NAVEGAR**
```json
{
  "navegar_site": {
    "descricao": "Quer navegar pelo site, ver seções",
    "exemplos": [
      "Quero ver o site",
      "Mostrem as seções",
      "Navegar pelo site",
      "Ver todas as páginas",
      "Explorar o site"
    ],
    "fluxo_destino": "navigation"
  },
  "navegar_projetos": {
    "descricao": "Quer ver projetos específicos",
    "exemplos": [
      "Mostrem o projeto de jiu-jitsu",
      "Quero ver a Academia Solidária",
      "Projeto Meu Futuro",
      "Coloiado",
      "Manduvi Araras"
    ],
    "fluxo_destino": "project_detail"
  }
}
```

---

## 🔄 Fluxos de Direcionamento

### **Mapeamento de Intenções para Ações**

```json
{
  "conhecer_instituto": {
    "acao": "redirect",
    "destino": "/about",
    "mensagem": "Vou te levar para conhecer nossa história e missão!"
  },
  "conhecer_iniciativas": {
    "acao": "redirect", 
    "destino": "/projects",
    "mensagem": "Aqui estão todas as nossas iniciativas de impacto!"
  },
  "apoiar_financeiro": {
    "acao": "modal",
    "componente": "DonationModal",
    "mensagem": "Que bom que quer apoiar nossa missão! Vou abrir as opções de doação."
  },
  "matricular_meu_futuro": {
    "acao": "redirect",
    "destino": "/projects/meufuturo",
    "mensagem": "Vou te levar para o Programa Meu Futuro onde você pode se inscrever!"
  },
  "solicitar_ajuda": {
    "acao": "redirect",
    "destino": "/contact",
    "mensagem": "Estamos aqui para ajudar! Vou te conectar com nossa equipe de assistência."
  }
}
```

---

## 🎯 Exemplos de Classificação

### **Entrada do Usuário → Rótulo JSON**

```json
// Exemplo 1
{
  "input": "Quero conhecer o Instituto Manduvi",
  "intent": "conhecer_instituto",
  "confidence": 0.95,
  "entities": [],
  "response": {
    "action": "redirect",
    "destination": "/about",
    "message": "Vou te levar para conhecer nossa história e missão!"
  }
}

// Exemplo 2  
{
  "input": "Como posso doar para vocês?",
  "intent": "apoiar_financeiro", 
  "confidence": 0.92,
  "entities": [],
  "response": {
    "action": "modal",
    "component": "DonationModal",
    "message": "Que bom que quer apoiar nossa missão! Vou abrir as opções de doação."
  }
}

// Exemplo 3
{
  "input": "Quero me inscrever no Programa Meu Futuro",
  "intent": "matricular_meu_futuro",
  "confidence": 0.98,
  "entities": ["meu_futuro"],
  "response": {
    "action": "redirect", 
    "destination": "/projects/meufuturo",
    "message": "Vou te levar para o Programa Meu Futuro onde você pode se inscrever!"
  }
}

// Exemplo 4
{
  "input": "Preciso de ajuda social",
  "intent": "solicitar_ajuda",
  "confidence": 0.89,
  "entities": ["ajuda_social"],
  "response": {
    "action": "redirect",
    "destination": "/contact", 
    "message": "Estamos aqui para ajudar! Vou te conectar com nossa equipe de assistência."
  }
}

// Exemplo 5
{
  "input": "Quais são os resultados de vocês?",
  "intent": "conhecer_resultados",
  "confidence": 0.91,
  "entities": [],
  "response": {
    "action": "redirect",
    "destination": "/achievements",
    "message": "Vou te mostrar nossos números e conquistas!"
  }
}
```

---

## 🛠️ Implementação Técnica

### **Estrutura do Classificador**

```javascript
// Exemplo de função de classificação
function classifyIntent(userInput) {
  const intents = {
    // Conhecer
    "conhecer_instituto": ["instituto manduvi", "missão", "história", "valores", "onde atuam"],
    "conhecer_iniciativas": ["iniciativas", "projetos", "programas", "meu futuro", "jiu-jitsu", "academia"],
    "conhecer_resultados": ["resultados", "números", "métricas", "impacto", "conquistas"],
    
    // Apoiar  
    "apoiar_financeiro": ["doar", "doação", "patrocinar", "investir", "apoiar financeiro"],
    "apoiar_voluntario": ["voluntário", "mentor", "ajudar", "contribuir tempo"],
    "apoiar_parceria": ["parceria", "parceiro", "aliança", "empresa"],
    
    // Matricular
    "matricular_meu_futuro": ["inscrever", "matricular", "meu futuro", "curso", "participar"],
    "matricular_esporte": ["jiu-jitsu", "boxe", "academia", "esporte", "treinar"],
    "matricular_familia": ["filho", "criança", "família", "inscrever família"],
    
    // Auditar
    "auditar_transparencia": ["relatórios", "prestação contas", "transparência", "financeiro"],
    "auditar_impacto": ["impacto", "resultados", "métricas", "avaliação"],
    "auditar_governanca": ["governança", "direção", "gestão", "conselho"],
    
    // Solicitar
    "solicitar_ajuda": ["ajuda", "acolhimento", "assistência", "dificuldades"],
    "solicitar_apresentacao": ["apresentação", "reunião", "agendar", "demonstração"],
    "solicitar_materiais": ["material", "kit", "documentos", "informações"],
    
    // Contatar
    "contatar_geral": ["contato", "telefone", "email", "falar"],
    "contatar_especifico": ["setor", "área", "esporte", "educação", "assistência"],
    
    // Navegar
    "navegar_site": ["site", "seções", "navegar", "explorar"],
    "navegar_projetos": ["projeto", "ver projeto", "detalhes"]
  };
  
  // Lógica de classificação baseada em palavras-chave
  // Retorna o intent com maior confiança
}
```

---

## 📊 Métricas de Sucesso

### **KPIs do Classificador**
- **Precisão**: >90% de classificação correta
- **Cobertura**: >95% das perguntas classificadas
- **Tempo de resposta**: <500ms
- **Taxa de redirecionamento**: >80% dos usuários seguem o fluxo sugerido

### **Monitoramento**
- Log de todas as classificações
- Feedback do usuário sobre acerto/erro
- Análise de intenções não cobertas
- Ajustes contínuos no modelo

---

## 🚀 Roadmap de Evolução

### **Fase 1 - MVP**
- [ ] Implementar classificação básica por palavras-chave
- [ ] Mapear 15 intenções principais
- [ ] Integrar com sistema de navegação

### **Fase 2 - Melhorias**
- [ ] Adicionar processamento de linguagem natural
- [ ] Implementar aprendizado com feedback
- [ ] Expandir para 25+ intenções

### **Fase 3 - Avançado**
- [ ] Integração com ManduvIA
- [ ] Classificação por contexto
- [ ] Análise de sentimento
- [ ] Suporte a múltiplos idiomas

---

## 📝 Conclusão

Este PRD define um sistema robusto de classificação de intenções para o site do Instituto Manduvi, permitindo direcionar usuários para os fluxos mais apropriados baseado em suas necessidades. O sistema é escalável e pode evoluir conforme novas intenções e funcionalidades sejam identificadas.

**Objetivo final**: Transformar cada visita ao site em uma jornada personalizada que conecte o usuário com a solução mais adequada para sua necessidade, maximizando o impacto social do Instituto Manduvi.
