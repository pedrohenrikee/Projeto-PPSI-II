class MainHeader extends HTMLElement {
  connectedCallback() {
    const inPages = window.location.pathname.includes('/pages/');
    const prefix = inPages ? '../' : './pages/';
    const prefixIndex = inPages ? '../../index.html' : './index.html';
    const logoSrc = inPages ? '../../assets/logo.png' : './assets/logo.png';
    const cssPrefix = inPages ? '../../js/components/header/header.css' : './js/components/header/header.css';

    this.innerHTML = `
      <link rel="stylesheet" href="${cssPrefix}">
      <header>
        <div class="header-logo">
          <img src="${logoSrc}" alt="World Micro Logo">
        </div>
        <input type="checkbox" id="menu-toggle" style="display: none;">
        <label for="menu-toggle" class="hamburger-menu">
          <span></span>
        </label>
        <nav>
          <a href="${prefixIndex}">Home</a>
          <a href="${prefix}store/store.html">Loja</a>
          <a href="${prefix}service/service.html">Serviços</a>
          <a href="${prefix}quote/quote.html">Orçamento</a>
          <a href="${prefix}about/about.html">Sobre</a>
          <a href="${prefix}contact/contact.html">Contato</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('header-component', MainHeader);