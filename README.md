# PROJETO PPSI – WEB SITE
## SISTEMAS PARA INTERNET – 2° SEMESTRE

**Alunos:** PEDRO HENRIQUE ALVES LIMA, VINICIUS FARIA  
**Professor(a):** VITOR SILVÉRIO 
**Instituição:** FATEC Dr. Bernardino de Campos – SÃO ROQUE 

---

## 📝 Introdução

### Contextualização
O tema do site é voltado para uma **loja de eletrônicos**, focando em:
* **Assistência técnica** para dispositivos móveis e desktop;
* **Venda de dispositivos eletrônicos** em geral e acessórios (como celulares, fones, caixas de som, capas de celular, gabinetes, etc.).

### Objetivos do Projeto
O principal intuito é oferecer um protótipo de site em HTML/CSS visualmente agradável e dinâmico para o usuário. O foco está em facilitar a navegação e simplificar os processos de compra, agendamento e consulta.

### Público-alvo
O projeto foi desenvolvido para atender a necessidade de pessoas que buscam por suporte técnico e ajuda de fácil acesso.

---

## 🗺️ Planejamento do Projeto

### Escopo / Mapa do Site
O site é composto pelas abas: **Home, Loja, Serviços, Orçamento, Sobre e Contato**.

* **Home:**
  * Bem-vindo à World Micro;
  * Hardware em destaque;
  * Serviços especializados (Ver todos);
  * Benefícios.
* **Loja:**
  * Informática;
  * Eletrônicos;
  * Jogos.
* **Serviços:**
  * Nossos Serviços;
  * Assistência Técnica;
  * Consultoria Técnica.
* **Orçamento:**
  * *Formulário de Orçamento:* 
    * **Dispositivo:** Qual seu dispositivo? / O que deseja fazer? 
    * **Serviço:** Info 1. / Info 2. 
    * **Contato:** Seu nome; / Seu e-mail.
* **Sobre:**
  * Nossa História.
* **Contato:**
  * *Formulário de Contato:* Nome, e-mail e Mensagem.
  * *Canais de Atendimento:* E-mail para contato.
  * *Outros contatos:* Telefone e Endereço.
 
---

## 👨‍💻Tecnologias Utilizadas
### 
* **HTML5**
* **JavaScript**
* **CSS3**
* **Chat GPT (Desenvolvimento de imagens)**

---

# 📁 Arquitetura de Pastas do Projeto

```text
projeto/
├── .github/                  # Configurações de CI/CD e workflows
│   └── workflows/
│       └── ci.yml
│
├── docs/                     # Documentação do projeto
│   ├── arquitetura/
│   ├── api/
│   └── diagramas/
│
├── public/                   # Arquivos públicos/estáticos
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/                      # Código-fonte principal
│   ├── assets/               # Recursos estáticos internos
│   │   ├── images/
│   │   ├── styles/
│   │   └── fonts/
│   │
│   ├── components/           # Componentes reutilizáveis
│   │   ├── ui/
│   │   ├── layout/
│   │   └── forms/
│   │
│   ├── pages/                # Páginas/telas da aplicação
│   │   ├── Home/
│   │   ├── Dashboard/
│   │   └── Login/
│   │
│   ├── services/             # Integrações externas e APIs
│   │   ├── api/
│   │   ├── auth/
│   │   └── storage/
│   │
│   ├── hooks/                # Hooks/custom hooks
│   │
│   ├── context/              # Providers e contextos globais
│   │
│   ├── store/                # Gerenciamento de estado
│   │
│   ├── routes/               # Configuração de rotas
│   │
│   ├── utils/                # Funções utilitárias
│   │
│   ├── constants/            # Constantes globais
│   │
│   ├── types/                # Tipagens/interfaces
│   │
│   ├── config/               # Configurações da aplicação
│   │
│   ├── tests/                # Testes automatizados
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   │
│   ├── App.tsx               # Componente raiz
│   └── main.tsx              # Entrada principal da aplicação
│
├── .env                      # Variáveis de ambiente
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── docker-compose.yml
###
* **
