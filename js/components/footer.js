const footerTemplate = document.createElement('template')

class Footer extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer" class="footer">
            <span class="fix">© 2022 Copyright | Maximiliano Colque Jaunin</span>
        </footer>
`;
    }
}

customElements.define('footer-component', Footer);