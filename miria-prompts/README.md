# MirIA Prompts - Instituto Manduvi

## 📁 Estrutura de Prompts

Esta pasta contém os prompts especializados para diferentes agentes da MirIA no Instituto Manduvi.

## 📋 Arquivos Disponíveis

### `miria_anfitria_especialista_navegacao.md`
**Prompt para MirIA Anfitriã - Especialista em Navegação**

- **Função:** Guia completa e especializada em navegação do site
- **Objetivo:** Direcionar usuários com precisão cirúrgica para informações específicas
- **Características:**
  - Mapa completo do site Manduvi
  - Metodologia de atendimento estruturada
  - Formato de resposta obrigatório
  - Exemplos práticos de interação
  - Tom acolhedor e especializado

## 🎯 Diferença entre Prompts e Vector Store

### **Prompts (esta pasta):**
- **Função:** Instruções para o comportamento da IA
- **Conteúdo:** Como responder, formato, tom, metodologia
- **Uso:** Configuração do agente/assistente
- **Exemplo:** "Sempre forneça links diretos e específicos"

### **Vector Store (pasta `vector-store-content/`):**
- **Função:** Base de conhecimento para consulta
- **Conteúdo:** Dados, informações, documentos, links
- **Uso:** File Search e recuperação de informações
- **Exemplo:** "O Instituto Manduvi foi fundado em 2004..."

## 🔧 Como Usar

### 1. Para Configurar a MirIA Anfitriã:
1. Copie o conteúdo de `miria_anfitria_especialista_navegacao.md`
2. Cole no campo de prompt do seu agente
3. Configure File Search apontando para a vector store
4. Teste as respostas com exemplos do prompt

### 2. Para Criar Novos Agentes:
1. Use o prompt base como template
2. Adapte para a função específica (FAQ, Classificador, etc.)
3. Mantenha consistência no tom e formato
4. Teste com cenários reais

## 📊 Estrutura Recomendada para Novos Prompts

```markdown
# Prompt [Nome do Agente] - [Função Específica]

## 🎯 IDENTIDADE E OBJETIVO
[Definição clara do papel e objetivo]

## 📚 CONHECIMENTO ESPECIALIZADO
[Área de expertise específica]

## 🎯 METODOLOGIA DE ATENDIMENTO
[Como responder e se comportar]

## 📋 EXEMPLOS PRÁTICOS
[Cenários de uso e respostas esperadas]

## 🎨 TOM E ESTILO
[Personalidade e linguagem]
```

## 🚀 Próximos Passos

1. **Teste** o prompt atual com diferentes cenários
2. **Refine** baseado nos resultados
3. **Crie** prompts para outras funções (FAQ, Classificador, etc.)
4. **Documente** melhorias e atualizações
5. **Versionamento** dos prompts para controle

---

**Versão:** 1.0  
**Data:** Dezembro 2024  
**Autor:** Assistente IA - Instituto Manduvi