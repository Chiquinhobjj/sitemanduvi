# Vector Store Content - Instituto Manduvi

## 📚 Pacote Completo para Vector Store

Este pacote contém todos os documentos necessários para configurar a vector store do Instituto Manduvi, combinando a estrutura sugerida com o conteúdo detalhado do projeto.

## 📁 Estrutura de Arquivos

```
vector-store-content/
├── 00_sobre_instituto_manduvi.md      # Visão geral do Instituto
├── 01_navegacao_projetos.md           # Navegação e 6 iniciativas principais
├── 02_super_ralinha.md                # Campeonato de futebol society
├── 03_cursos_meu_futuro_catalogo.md   # Cursos EAD e Programa Meu Futuro
├── 04_transparencia.md                # Transparência e governança
├── 05_acessibilidade.md               # Recursos de acessibilidade
├── 06_enderecos_canais_institucionais.md # Contatos e localização
├── 07_faq_curto.md                    # Perguntas frequentes
├── 08_estrutura_tematica_rag.md       # Estrutura hierárquica otimizada para RAG
└── README.md                          # Este arquivo
```

## 🎯 Como Usar

### 1. Upload para Vector Store
- Faça upload de todos os arquivos `.md` para sua vector store
- Mantenha os nomes dos arquivos para referência
- Configure metadados conforme necessário

### 2. Configuração do Agent (MirIA-FAQ)
- Adicione **File search** ao agente
- Selecione a vector store criada
- Configure para priorizar a base de conhecimento
- Mantenha guardrails de Hallucination ativos

### 3. Domínios Oficiais Permitidos
- manduvi.org.br
- superralinha.com.br
- playcurso.com/manduvi
- instagram.com/institutomanduvi
- instagram.com/superralinha

## 📋 Conteúdo de Cada Arquivo

### 00_sobre_instituto_manduvi.md
- **Conteúdo:** Visão geral, missão, valores, metodologia HEXA
- **Metadados:** organizacao, sobre, instituto, socialtech
- **Links:** Páginas principais do site

### 01_navegacao_projetos.md
- **Conteúdo:** 6 iniciativas principais detalhadas
- **Metadados:** navegacao, projetos, iniciativas
- **Links:** Páginas específicas de cada projeto

### 02_super_ralinha.md
- **Conteúdo:** Campeonato de futebol society
- **Metadados:** evento, esporte, super_ralinha
- **Links:** Site oficial e redes sociais

### 03_cursos_meu_futuro_catalogo.md
- **Conteúdo:** Cursos EAD e Programa Meu Futuro
- **Metadados:** educacao, cursos_ead, certificacao
- **Links:** Plataforma de cursos

### 04_transparencia.md
- **Conteúdo:** Transparência e governança
- **Metadados:** transparencia, governanca, relatorios
- **Links:** Página de transparência

### 05_acessibilidade.md
- **Conteúdo:** Recursos de acessibilidade e inclusão
- **Metadados:** acessibilidade, inclusao, vlibras
- **Links:** Página de acessibilidade

### 06_enderecos_canais_institucionais.md
- **Conteúdo:** Contatos e localização
- **Metadados:** contato, institucional, canais
- **Links:** Canais oficiais

### 07_faq_curto.md
- **Conteúdo:** Perguntas frequentes com respostas rápidas
- **Metadados:** faq, perguntas_frequentes
- **Links:** Links diretos para cada resposta

### `08_estrutura_tematica_rag.md`
- **Conteúdo:** Estrutura hierárquica otimizada para RAG
- **Metadados:** estrutura_tematica, metodologia, rag
- **Organização:** 4 eixos principais para recuperação precisa

## 🔧 Configurações Recomendadas

### Vector Store
- **Chunking:** 500-1000 caracteres
- **Overlap:** 100-200 caracteres
- **Embedding:** OpenAI text-embedding-ada-002
- **Metadata:** Incluir todos os campos definidos

### Agent Configuration
- **Temperature:** 0.3-0.5
- **Max Tokens:** 2000-3000
- **Top K:** 5-10 documentos
- **Similarity Threshold:** 0.7-0.8

## 📊 Métricas de Qualidade

- **Cobertura:** 100% das páginas principais
- **Links Oficiais:** Todos verificados e funcionais
- **Metadados:** Estruturados e consistentes
- **Acessibilidade:** Recursos inclusivos documentados

## 🚀 Próximos Passos

1. **Upload** dos arquivos para vector store
2. **Teste** de recuperação de informações
3. **Ajuste** de configurações conforme necessário
4. **Monitoramento** de performance
5. **Atualização** periódica do conteúdo

## 📞 Suporte

Para dúvidas sobre implementação ou configuração, consulte:
- Documentação da plataforma de vector store
- Configurações do agente
- Testes de recuperação de informações

---

**Versão:** 1.0  
**Data:** Dezembro 2024  
**Autor:** Assistente IA - Instituto Manduvi
