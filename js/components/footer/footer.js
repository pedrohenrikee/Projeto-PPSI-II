class MainFooter extends HTMLElement {
  connectedCallback() {
    const inPages = window.location.pathname.includes('/pages/');
    const prefix = inPages ? '../' : './pages/';
    const cssPrefix = inPages ? '../../styles/footer.css' : './styles/footer.css';

    this.innerHTML = `
      <link rel="stylesheet" href="${cssPrefix}">
      <footer class="main-footer">
        <div class="footer-container">
          
          <div class="footer-column">
            <h3>Atendimento</h3>
            <p class="footer-time">08:00 às 18:00 — Segunda a Sexta</p>
            <p class="footer-time">08:00 às 12:00 — Sábados</p>
            <p class="footer-time">Horário de Brasília</p>
            <a href="${prefix}contact/contact.html" class="btn-footer-contact">Fale Conosco</a>
          </div>

          <div class="footer-column">
            <h3>Institucional</h3>
            <ul>
              <li><a href="${prefix}about/about.html">Sobre a World Micro</a></li>
              <li><a href="${prefix}service/service.html">Nossos Serviços</a></li>
              <li><a href="${prefix}store/store.html">Nossa Loja</a></li>
              <li><a href="${prefix}quote/quote.html">Faça um orçamento</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Nossa Loja</h3>
            <p>R. Antônio Zecchi, 284 — Centro</p>
            <p>Mairinque/SP — CEP: 18120-000</p>
            <p class="footer-email">worldmicro@gmail.com</p>
          </div>

        </div>
        <hr class="footer-divider">

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} World Micro. Todos os direitos reservados.</p>
          <div class="footer-socials">
            <a href="https://www.facebook.com/WorldmicroInformaticaEletronicos/?locale=pt_BR" target="_blank" aria-label="Facebook">Facebook</a>
            <a href="https://www.instagram.com/worldmicroinformatica/" target="_blank" aria-label="Instagram">Instagram</a>
            <a href="https://www.linkedin.com/company/worldmicroinformatica/" target="_blank" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
        
      </footer>
    `;
  }
}
customElements.define('footer-component', MainFooter);
