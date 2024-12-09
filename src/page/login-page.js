import { LitElement, html, css, nothing } from 'lit';
import { AuthMixin } from '../mixins/auth-mixin.js';
import '../components/login-component.js';
import '../components/alert-component.js';
import '../layouts/public-layout.js';

export class LoginPage extends AuthMixin(LitElement) {
  static get properties() {
    return {
      alertType: { type: String },
      alertMessage: { type: String },
    };
  }

  constructor() {
    super();
    this.alertType = '';
    this.alertMessage = '';
  }

  handleLogin(event) {
    const { email, password } = event.detail;
    const result = this.login(email, password);

    if (result.success) {
      this.alertType = 'success';
      this.alertMessage = 'Login successful';
      this.redirectTo('/home');
    } else {
      this.alertType = 'error';
      this.alertMessage = result.error;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('login', this.handleLogin.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('login', this.handleLogin.bind(this));
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  `;

  render() {
    return html`
      <public-layout>
        <login-component></login-component>
        ${this.alertType
          ? html`
              <alert-component
                .type=${this.alertType}
                .message=${this.alertMessage}
              ></alert-component>
            `
          : nothing}
      </public-layout>
    `;
  }
}

customElements.define('login-page', LoginPage);
