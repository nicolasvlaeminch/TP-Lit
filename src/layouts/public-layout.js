import { LitElement, html, css } from 'lit';

export class PublicLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color: yellow;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
        `
    ];

    render() {
        return html`<div>
                        <slot></slot>
                    </div>`;
    }
}
customElements.define('public-layout', PublicLayout);
