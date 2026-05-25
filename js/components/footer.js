class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>&copy; ${new Date().getFullYear()} World Micro. Todos os direitos reservados.</p>
      </footer>
    `;
  }
}
customElements.define('footer-component', MainFooter);
