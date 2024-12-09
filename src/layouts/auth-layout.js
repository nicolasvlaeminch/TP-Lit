import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../mixins/auth-mixin.js';

export class AuthLayout extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: grid;
        grid-template-rows: auto 1fr auto;
        width: 100%;
        min-height: 100vh;
      }

      header,
      footer {
        background-color: black;
      }

      main {
        color: white;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    if (!this.isAuthenticated()) {
      window.location.href = '/login';
    }
  }

  render() {
    return html`
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }
}

customElements.define('auth-layout', AuthLayout);
