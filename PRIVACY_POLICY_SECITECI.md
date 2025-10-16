# Política de Privacidade - Painel SECITECI MT

## 🔒 Proteção de Dados Pessoais

### Visão Geral
O Painel SECITECI MT foi desenvolvido com foco na proteção de dados pessoais, seguindo rigorosamente a Lei Geral de Proteção de Dados (LGPD) e as melhores práticas de privacidade.

### Princípios Implementados

#### 1. **Anonimização de Dados**
- **Nomes:** Substituídos por IDs únicos (MAT-001, MAT-002, etc.)
- **CPFs:** Mascarados ou indicados apenas como "Cadastrado/Pendente"
- **Logins:** Substituídos por "****"
- **Dados de Nascimento:** Convertidos para faixas etárias

#### 2. **Agregação de Informações**
- **Estatísticas:** Apenas totais e percentuais são exibidos
- **Distribuição Geográfica:** Agrupamento por cidade e região
- **Análise Demográfica:** Faixas etárias em vez de idades específicas

#### 3. **Mascaramento Inteligente**
```javascript
// Exemplo de mascaramento implementado
const maskPersonalData = (data) => {
  // CPF: 123.456.789-00 → ***.***.***-**
  if (data.cpf) {
    data.cpf = data.cpf.replace(/\d/g, '*')
  }
  
  // Nome: João Silva → J*** S****
  if (data.nome) {
    const parts = data.nome.split(' ')
    data.nome = parts.map(part => 
      part.charAt(0) + '*'.repeat(part.length - 1)
    ).join(' ')
  }
  
  // Login: 4128 → ****
  if (data.login) {
    data.login = '****'
  }
}
```

### Estrutura de Dados Anonimizados

#### Dados Exibidos (Seguros)
- ✅ Total de matrículas
- ✅ Distribuição por cidade
- ✅ Faixas etárias
- ✅ Status de CPF (Cadastrado/Pendente)
- ✅ Percentuais e estatísticas
- ✅ IDs únicos de matrícula

#### Dados Protegidos (Não Exibidos)
- ❌ Nomes completos
- ❌ CPFs reais
- ❌ Logins originais
- ❌ Datas de nascimento específicas
- ❌ Endereços completos
- ❌ Qualquer informação que permita identificação direta

### Conformidade LGPD

#### Base Legal
- **Art. 7º, V:** Interesse legítimo para fins educacionais
- **Art. 7º, VI:** Proteção da vida ou da incolumidade física
- **Art. 7º, VII:** Tutela da saúde

#### Direitos dos Titulares
- **Acesso:** Dados podem ser consultados de forma anonimizada
- **Retificação:** Processo interno para correção de dados
- **Eliminação:** Dados podem ser removidos conforme solicitação
- **Portabilidade:** Exportação em formato agregado

### Medidas de Segurança

#### 1. **Controle de Acesso**
- Autenticação obrigatória
- Logs de auditoria
- Controle de permissões por função

#### 2. **Criptografia**
- Dados em trânsito (HTTPS)
- Dados em repouso (AES-256)
- Chaves de criptografia rotacionadas

#### 3. **Monitoramento**
- Logs de acesso
- Alertas de segurança
- Auditoria contínua

### Exportação de Dados

#### Formatos Disponíveis
- **CSV:** Dados agregados apenas
- **JSON:** Estrutura anonimizada
- **PDF:** Relatórios estatísticos

#### Conteúdo das Exportações
```json
{
  "summary": "Dados Agregados SECITECI MT",
  "timestamp": "2024-01-15T10:30:00Z",
  "format": "csv",
  "note": "Dados anonimizados - sem informações pessoais",
  "data": {
    "totalMatriculas": 4128,
    "cidades": [
      {
        "name": "Cuiabá",
        "count": 2847,
        "pctCpf": 35.2
      }
    ]
  }
}
```

### Responsabilidades

#### Instituto Manduvi
- Garantir conformidade com LGPD
- Manter segurança dos dados
- Responder a solicitações dos titulares
- Realizar auditorias regulares

#### Usuários do Sistema
- Usar dados apenas para fins autorizados
- Não tentar re-identificar dados anonimizados
- Reportar incidentes de segurança
- Respeitar políticas de acesso

### Contato para Privacidade

**Encarregado de Dados (DPO):**
- Email: privacidade@manduvi.org.br
- Telefone: (65) 99690-6281
- Endereço: Rua Cândido Mariano 830, Centro Norte, Cuiabá-MT

### Atualizações

Esta política é revisada regularmente e atualizada conforme necessário. A última atualização foi em: **15 de Janeiro de 2024**.

---

**⚠️ Importante:** Este painel foi desenvolvido para fornecer insights estatísticos sem comprometer a privacidade individual. Qualquer tentativa de re-identificação de dados anonimizados é proibida e pode resultar em medidas disciplinares.
