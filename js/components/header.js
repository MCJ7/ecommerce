const headerTemplate = document.createElement("template");


class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {this.innerHTML = `
    <header class="header" id="top">
        <nav>
        <ul>
            <li><a href="./index.html"><img src="../img/logo.png" class="logo"></img></a></li>
            <li ></li>
            <li> <a id="login-button" class="login" href="./Login.html">Login</a></li>
        </ul>
        </nav>
    </header>
`;}
}

customElements.define("header-component", Header);
