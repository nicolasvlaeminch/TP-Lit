import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../mixins/auth-mixin.js';
import '@dile/ui/components/nav/nav.js';
import '@dile/ui/components/menu-hamburger/menu-hamburger.js';
import '../layouts/auth-layout.js';

export class HomePage extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        width: 100%;
        --dile-nav-background-color: red;
      }

      .main-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-align: center;
      }

      button {
        padding: 8px;
        background-color: black;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      button:hover {
        background-color: red;
      }

      h1 {
        color: white;
      }

      p {
        text-align: center;
      }
    `,
  ];

  handleLogout() {
    this.logout();
    location.reload();
  }

  render() {
    return html`
      <auth-layout>
        <dile-nav slot="header" menu="right">
          <h2 slot="title">Home Page</h2>
          <button slot="actions" @click=${this.handleLogout}>Cerrar sesión</button>
        </dile-nav>
        <div class="main-content" slot="main">
            <h1>Bienvenido al Home Page. ¡Has iniciado sesión con éxito!</h1>
        </div>
        <p slot="footer">Todos los derechos reservados.</p>
      </auth-layout>
    `;
  }
}

customElements.define('home-page', HomePage);
