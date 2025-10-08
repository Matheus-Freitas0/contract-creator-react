# 🚀 Gerador de Contratos DevShop

Sistema web moderno para geração automática de contratos de desenvolvimento digital da DevShop Tecnologia e Comércio LTDA.

## ✨ Funcionalidades

- **Formulário Multi-Step**: Interface intuitiva com 4 etapas organizadas
- **Preview Completo**: Visualização do contrato antes da geração
- **Geração DOCX**: Documentos Word profissionais com logo da empresa
- **Personalização Avançada**: Ajuste de valores padrão (desconto, multa, juros, suporte)
- **Validações Robustas**: CNPJ, campos obrigatórios e formatação automática
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Formatação Inteligente**: Moeda brasileira, CNPJ e datas com fuso horário correto

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal com hooks modernos
- **Material-UI (MUI)** - Sistema de design e componentes
- **React Hook Form** - Gerenciamento eficiente de formulários
- **Yup** - Validação de dados com schemas
- **docx** - Geração de documentos Word profissionais
- **dayjs** - Manipulação de datas com fuso horário
- **Vite** - Build tool ultra-rápido

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos para Executar

```bash
# Clone o repositório
git clone https://github.com/Matheus-Freitas0/contract-creator-react.git
cd contract-creator-react

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp env.example .env
# Edite o arquivo .env com os dados da sua empresa

# Execute em modo desenvolvimento
npm run dev
```

O sistema estará disponível em `http://localhost:5173`

## ⚙️ Configuração

### Variáveis de Ambiente

Configure o arquivo `.env` com os dados da sua empresa:

```bash
# Configurações da Empresa
VITE_COMPANY_NAME="Sua Empresa LTDA"
VITE_COMPANY_CNPJ="00.000.000/0001-00"
VITE_COMPANY_ADDRESS="Seu Endereço Completo"
VITE_COMPANY_CITY="Sua Cidade/Estado"
VITE_COMPANY_ZIPCODE="00000-000"
VITE_COMPANY_REPRESENTATIVE="Seu Nome"
VITE_COMPANY_REPRESENTATIVE_ROLE="Seu Cargo"

# Configurações Padrão do Contrato
VITE_DEFAULT_DEADLINE_DAYS=30
VITE_DEFAULT_DISCOUNT_PERCENTAGE=10
VITE_DEFAULT_PENALTY_PERCENTAGE=20
VITE_DEFAULT_SUPPORT_MONTHS=3
VITE_DEFAULT_DAILY_INTEREST_RATE=0.5
```

## 📋 Como Usar

1. **Dados do Cliente**: Preencha informações da empresa contratante
2. **Dados do Projeto**: Informe descrição, prazo, valor e forma de pagamento
3. **Personalização**: Ajuste valores padrão (desconto, multa, juros, suporte)
4. **Preview**: Revise o contrato completo antes da geração
5. **Geração**: Clique em "Gerar DOCX" para baixar o contrato

## 📁 Arquitetura do Projeto

```
src/
├── components/              # Componentes React
│   ├── ContractForm.jsx        # Formulário principal
│   ├── ContractStepper.jsx     # Navegação entre steps
│   ├── NavigationButtons.jsx   # Botões de navegação
│   ├── FeedbackMessages.jsx    # Mensagens de feedback
│   ├── LogoHeader.jsx          # Cabeçalho com logo
│   ├── ClientDataStep.jsx      # Step 1: Dados do cliente
│   ├── ProjectDataStep.jsx     # Step 2: Dados do projeto
│   ├── CustomizationStep.jsx   # Step 3: Personalização
│   └── PreviewStep.jsx         # Step 4: Preview
├── hooks/                  # Hooks personalizados
│   └── useContractForm.js      # Hook do formulário
├── services/               # Serviços
│   └── contractGenerator.js    # Geração de contratos DOCX
├── utils/                  # Utilitários
│   ├── schema.js               # Schema de validação Yup
│   ├── currency.js              # Formatação de moeda
│   └── cnpj.js                  # Formatação e validação CNPJ
├── styles/                 # Estilos
│   └── theme.js                # Tema do MUI
└── config/                 # Configurações
    └── company.js              # Dados da empresa
```

## 📄 Template do Contrato

O sistema utiliza template profissional com 7 cláusulas principais:

- **Cláusula Primeira**: Do Objeto do contrato
- **Cláusula Segunda**: Das Obrigações das partes
- **Cláusula Terceira**: Prazos e Cronograma
- **Cláusula Quarta**: Valores, Formas de Pagamento e Juros
- **Cláusula Quinta**: Confidencialidade e Propriedade Intelectual
- **Cláusula Sexta**: Suporte e Manutenção
- **Cláusula Sétima**: Disposições Gerais

## 🎨 Funcionalidades Avançadas

### Formatação Inteligente

- **Moeda Brasileira**: Formatação automática com R$ e separadores corretos
- **CNPJ**: Máscara automática e validação completa
- **Datas**: Fuso horário brasileiro (UTC-3) para evitar problemas de data

### Validações Robustas

- **CNPJ**: Validação completa com dígitos verificadores
- **Campos Obrigatórios**: Validação em tempo real
- **Valores**: Limites mínimos e máximos configuráveis

### Personalização

- **Desconto à Vista**: Padrão 10% (configurável)
- **Multa por Atraso**: Padrão 20% (configurável)
- **Juros Diários**: Padrão 0.5% ao dia (configurável)
- **Suporte Gratuito**: Padrão 3 meses (configurável)

## 🚀 Build para Produção

```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview

# Análise do bundle
npm run build -- --analyze
```

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Análise de código
```

## 📝 Licença

Este projeto é propriedade da DevShop Tecnologia e Comércio LTDA.

---

**Desenvolvido com ❤️ pela DevShop**
