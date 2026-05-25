class MainHeader extends HTMLElement {
  connectedCallback() {
    const inPages = window.location.pathname.includes('/pages/');
    const prefix = inPages ? '../' : './pages/';
    const prefixIndex = inPages ? '../../index.html' : './index.html';

    this.innerHTML = `
      <header>
        <div class="logo" style="font-weight: bold; color: #0a3d62;">World Micro</div>
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