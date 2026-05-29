# 🌐 World Micro — Soluções em Tecnologia & Hardware de Alta Performance

<p align="center">
  <img src="./assets/logo.png" alt="World Micro Logo" width="180">
</p>

<p align="center">
  <strong>Projeto Acadêmico Multidisciplinar de Sistemas para Internet (2° Semestre)</strong><br>
  FATEC Dr. Bernardino de Campos – São Roque/SP
</p>

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Design](https://img.shields.io/badge/Aesthetic-Frutiger_Aero-00a8ff?style=for-the-badge&logo=visual-studio-code&logoColor=white)](#-estética-visual-o-resgate-do-frutiger-aero--glassmorphism)

</div>

---

## 👥 Dados Acadêmicos

* **Alunos:** Pedro Henrique Alves Lima e Vinicius Rodrigues Figueira de Faria
* **Professor Orientador:** Vitor Silvério
* **Disciplina:** PPSI (Projeto de Prática em Sistemas para Internet)
* **Instituição:** FATEC Dr. Bernardino de Campos – São Roque

---

## 📝 Introdução e Contextualização

A **World Micro** é um protótipo de aplicação web institucional e comercial focado na área de eletrônicos e suporte computacional de ponta. O projeto foi arquitetado sob o viés da modernização da experiência do usuário, oferecendo dois pilares de atendimento:

1. **Oficina de Assistência Técnica Especializada:** Diagnóstico, limpeza preventiva avançada, upgrade de hardware (SSD/RAM) e reparos em dispositivos móveis (smartphones), desktops gamer, notebooks corporativos e consoles de videogame.
2. **Loja de Hardware e Periféricos Premium:** Exibição responsiva de peças (RTX 5090, Ryzen 7 9800X3D) e periféricos gamers de alto padrão (Razer, Xiaomi) em uma interface interativa baseada em carrosséis fluidos.

O principal objetivo do projeto é consolidar conceitos avançados de **Arquitetura CSS modular**, **responsividade em HTML/CSS puros**, **Web Components dinâmicos** e as melhores práticas de otimização de performance e SEO exigidas pelo mercado de desenvolvimento (Google Lighthouse).

---

## 🎨 Estética Visual: O Resgate do Frutiger Aero & Glassmorphism

A identidade visual da **World Micro** distancia-se deliberadamente do minimalismo plano (*flat design*) cinzento e sem vida que domina a web contemporânea. Em vez disso, o projeto adota com orgulho o estilo **Frutiger Aero / Glassmorphism**.

### O que é a estética Frutiger Aero?
Dominante entre os anos de **2004 e 2013** (marcada visualmente pelas interfaces do Windows Vista/7, consoles como o Nintendo Wii/Xbox 360 e a era de ouro do iOS esqueumórfico), a estética Frutiger Aero caracteriza-se por:
* Cores vibrantes (azuis oceânicos, verdes ecológicos e brancos puros);
* Texturas brilhantes e efeito de reflexos realistas;
* Formas orgânicas, esferas tridimensionais, água, bolhas de vidro e folhagens;
* Forte teor futurista, otimista e ecológico (ligando a alta tecnologia à preservação natural).

### Por que escolher este design para a World Micro?
A tecnologia deve passar a sensação de vitalidade, clareza e interatividade física. O resgate do Frutiger Aero atua trazendo:
* **Tactilidade Visual (Glassmorphism):** O uso intensivo de `backdrop-filter: blur(12px)` e fundos semitransparentes com bordas sutis gera o efeito de vidro polido. Quando o usuário rola a página, os elementos e as imagens deslizam sob o cabeçalho gerando um embaçamento dinâmico luxuoso.
* **Componente Tridimensional de Esferas Flutuantes (`.aero-sphere`):** Ícones do sistema são abrigados em esferas de vidro 3D com sobreposição de iluminação interna (`::before`). Elas possuem uma microanimação suave de flutuação vertical contínua e respondem de forma dinâmica a interações de `hover` do mouse (aumentando o brilho e a sombra tridimensional).

---

## 📂 Arquitetura de Pastas do Projeto

O projeto adota uma estrutura organizacional limpa e estritamente modular, dividindo recursos globais, páginas institucionais, scripts dinâmicos e folhas de estilo isoladas:

```text
projeto-ppsi-ii/
├── assets/                  # Banco de imagens e ícones do sistema
│   ├── store-pics/          # Imagens dos produtos de catálogo da loja
│   ├── cpu.jpg              # Foto do processador em destaque
│   ├── gpu.jpg              # Foto da placa de vídeo em destaque
│   ├── logo.png             # Logotipo oficial com efeito tridimensional
│   └── icones.png           # Sprites e bases visuais para os ícones
│
├── doc/                     # Documentação técnica e relatórios acadêmicos
│
├── js/                      # Lógica JavaScript (Vanilla ES6)
│   ├── components/          # Componentes web modulares reutilizáveis
│   │   ├── footer/          # Módulo do Rodapé da aplicação
│   │   │   ├── footer.css   # Estilização isolada do rodapé corporativo
│   │   │   └── footer.js    # Injetor dinâmico do footer em HTML
│   │   └── header/          # Módulo do Cabeçalho da aplicação
│   │       ├── header.css   # Estilização isolada do cabeçalho fixo e hambúrguer
│   │       └── header.js    # Injetor do header fixo e menu hambúrguer
│   │
│   ├── contact.js           # Escuta do form e integração com API do WhatsApp
│   └── main.js              # Script principal (inicializações globais)
│
├── pages/                   # Módulos individuais de páginas internas
│   ├── about/               # Página "Sobre a World Micro"
│   │   ├── about.html
│   │   └── style.css        # Estilos específicos da aba Sobre
│   │
│   ├── contact/             # Página "Contato e Canais"
│   │   ├── contact.html
│   │   └── style.css        # Estilos específicos da aba Contato
│   │
│   ├── quote/               # Página "Orçamento Inteligente"
│   │   ├── quote.html
│   │   └── style.css        # Estilos específicos da aba Orçamento
│   │
│   ├── service/             # Página de Catálogo de Serviços
│   │   ├── service.html
│   │   └── style.css        # Estilos específicos da aba Serviços
│   │
│   └── store/               # Página da Loja Interativa
│       ├── store.html
│       └── style.css        # Estilos específicos da aba Loja
│
├── styles/                  # Núcleo de Estilização Centralizado
│   └── global.css           # Design System (tokens, variáveis, resets e esferas)
│
├── index.html               # Página inicial (Dashboard de Entrada do Site)
├── README.md                # Documentação técnica de desenvolvimento
└── style.css                # Estilo específico da página inicial
```

---

## 🛠️ Tecnologias e Implementação Arquitetural

### 1. HTML5 Semântico
Toda a estruturação do código prioriza as boas práticas do W3C. Foram utilizados os marcos semânticos (`<header>`, `<main>`, `<section>`, `<fieldset>`, `<footer>`) para garantir a legibilidade do código por robôs de busca e tecnologias assistivas. Cada elemento de formulário possui rotulagem correta (`<label for="...">`) e IDs exclusivos, permitindo testes de validação automatizados sem colisões de escopo.

### 2. CSS3 Vanilla (Arquitetura e Tokens de Estilo)
O projeto rejeita bibliotecas ou frameworks utilitários pesados (como Tailwind ou Bootstrap) para priorizar o controle absoluto de performance e design. 
* **Design System Centralizado (`styles/global.css`):** Todas as paletas de cores (HSL e RGBA translúcidos), gradientes aquáticos e tokens tipográficos de cabeçalhos e parágrafos estão centralizados no `:root`.
* **Grades Responsivas Fluidas:** O site adapta-se a qualquer tamanho de tela (desktop, tablets e celulares) utilizando grades CSS flexíveis (`grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))`) e breakpoints limpos estabelecidos em `@media (max-width: 768px)` e `@media (max-width: 480px)`.

### 3. JavaScript Moderno (Vanilla ES6)
Uso de recursos nativos para criar uma experiência reativa:
* **Web Components Nativos (`customElements`):** O cabeçalho (`<header-component>`) e o rodapé (`<footer-component>`) são injetados de forma modular via classes JavaScript herdadas de `HTMLElement`. Isso garante que qualquer alteração no menu superior ou rodapé seja propagada instantaneamente para todas as páginas sem a necessidade de duplicar centenas de linhas de código HTML.

---

## 💡 Análises Lógicas Notáveis (Engenharia de Destaque)

### A. O Wizard de Orçamento Passo a Passo 100% em CSS Puro
Um dos maiores destaques de engenharia do projeto localiza-se na página de **Orçamento (`quote.html`)**. O formulário de fluxo multi-etapas (Wizard) funciona **completamente sem JavaScript**, utilizando apenas lógica avançada de seletores CSS irmãos.

```html
<!-- quote.html: Lógica de controle por Checkboxes e Radios invisíveis -->
<input type="radio" name="etapa_wizard" id="passo1" checked style="display:none;">
<input type="radio" name="etapa_wizard" id="passo2" style="display:none;">
<input type="radio" name="etapa_wizard" id="passo3" style="display:none;">

<div class="abas-wrapper">
    <fieldset class="etapa-conteudo" id="conteudo-passo1">...</fieldset>
    <fieldset class="etapa-conteudo" id="conteudo-passo2">...</fieldset>
    <fieldset class="etapa-conteudo" id="conteudo-passo3">...</fieldset>
</div>
```

Na folha de estilo `pages/quote/style.css`, o controle de visibilidade das abas e o realce da barra de navegação superior respondem dinamicamente ao estado dos botões de rádio selecionados:

```css
/* style.css: Controle estrutural de exibição sem JS */
#passo1:checked ~ .abas-wrapper #conteudo-passo1,
#passo2:checked ~ .abas-wrapper #conteudo-passo2,
#passo3:checked ~ .abas-wrapper #conteudo-passo3 {
  display: block;
  animation: fadeIn 0.4s ease-out;
}

#passo1:checked ~ .form-tabs .tab:nth-child(1),
#passo2:checked ~ .form-tabs .tab:nth-child(2),
#passo3:checked ~ .form-tabs .tab:nth-child(3) {
  background: var(--primary-blue);
  color: white;
  border-color: rgba(255, 255, 255, 0.4);
}
```
* **Vantagem:** Desempenho absurdo, carga imediata, zero dependências e imune a travamentos de scripts ou consoles.

### B. Menu Hambúrguer Responsivo em CSS Puro
Seguindo a mesma filosofia sem scripts para controle do layout, o menu hambúrguer móvel utiliza um checkbox invisível (`#menu-toggle`) e o seletor irmão geral (`~`):

```css
/*styles/header.css: Transição suave do menu vertical móvel */
#menu-toggle:checked ~ nav {
  transform: translateY(0);
  opacity: 1;
}
```
Ao clicar no ícone do hambúrguer, o checkbox é marcado, ativando uma transição suave que desliza o menu vertical do topo e transforma as 3 linhas do hambúrguer em um símbolo de "X" de fechamento usando propriedades `transform` e `opacity`.

### C. Resolução Dinâmica de Caminhos em Web Components
A implantação de sites estáticos em subdiretórios (como no GitHub Pages: `/Projeto-PPSI-II/`) costuma quebrar recursos importados por caminhos absolutos (iniciados com `/`). Para resolver isso de forma elegante, os Web Components de cabeçalho e rodapé **calculam dinamicamente a sua própria profundidade de caminhos** na inicialização:

```javascript
// js/components/footer/footer.js e header.js
const inPages = window.location.pathname.includes('/pages/');
const prefix = inPages ? '../' : './pages/';
const cssPrefix = inPages ? '../../js/components/footer/footer.css' : './js/components/footer/footer.css';
```
Esta verificação inteligente lê o pathname do navegador. Se a tela visitada estiver localizada dentro da pasta `/pages/`, ela ajusta o prefixo de carregamento de estilos e links de navegação adicionando o prefixo relativo correto (`../` ou `../../`). Isso garante o funcionamento impecável da aplicação web tanto em localhost quanto em subdiretórios complexos de produção.

---

## ⚡ Auditorias de Performance e Boas Práticas (Lighthouse)

Buscando atingir a pontuação máxima nas auditorias de SEO e desempenho do Google Lighthouse, aplicamos as seguintes intervenções técnicas no site:

1. **Combate ao Layout Shift (CLS 0.0):** Todas as imagens (`<img>`) nas páginas do sistema possuem atributos de largura (`width`) e altura (`height`) físicos explícitos. Desta forma, o navegador reserva o espaço dimensional exato do bloco antes mesmo de fazer o download do recurso de imagem, evitando pulos e trepidações visuais na tela.
2. **Priorização da Imagem Crítica (LCP):** Aplicamos a tag `fetchpriority="high"` e removemos o carregamento preguiçoso no banner de introdução do computador de alta performance da tela inicial. Isso instrui o navegador a carregar o maior elemento visual imediatamente, otimizando o indicador Largest Contentful Paint.
3. **Carregamento Preguiçoso (Lazy Loading):** Todas as demais imagens secundárias ou itens ocultos nas seções e carrosséis da loja utilizam `loading="lazy"`, reduzindo drasticamente o consumo de banda inicial de dados do usuário.
4. **Elegibilidade Absoluta ao BFCache:** Garantimos que a aplicação não utilize nenhum manipulador de evento depreciado de destruição de página (`unload`), tornando o site elegível ao salvamento em memória pelo cache do navegador, possibilitando navegações de avanço e retorno de carregamento instantâneo.

---

## ♿ Acessibilidade e Inclusão

O projeto foi projetado com forte consideração a boas práticas de usabilidade:
* **Foco no Teclado:** Elementos interativos como botões de navegação, abas e links possuem transições de borda de contraste nítidas ao receber o foco do cursor ou navegação por tabulação.
* **Semântica Nítida:** Uso correto de cabeçalhos hierárquicos (apenas um `<h1>` por página, seguido sequencialmente por `<h2>` e `<h3>`).
* **Contraste de Cores Elevado:** As variáveis do Design System baseadas na paleta azul escura (`--deep-ocean`) e branca semitranslúcida garantem legibilidade excelente, atendendo a altos parâmetros de contraste exigidos para pessoas com dificuldades visuais.
