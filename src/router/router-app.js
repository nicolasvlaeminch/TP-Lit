import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

export class RouterApp extends LitElement {
    firstUpdated() {
        const router = new Router(this.shadowRoot.querySelector('#outlet'));

        router.setRoutes([
            { path: '/', component: 'login-page' },
            { path: '/home', component: 'home-page' },
            { path: '/login', component: 'login-page' },
        ]);
    }

    static styles = [
        css`
            :host {
                width: 100%;
            }
        `
    ];

    render() {
        return html`
            <div id="outlet"></div>
        `;
    }
}

customElements.define('router-app', RouterApp);
