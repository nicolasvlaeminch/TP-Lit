import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import { AuthMixin } from '../mixins/auth-mixin.js';

export class PublicLayout extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    if (this.isAuthenticated()) {
      Router.go('/home');
    }
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('public-layout', PublicLayout);
