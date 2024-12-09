import { LitElement, html, css } from 'lit';

export class LoginComponent extends LitElement {

    constructor() {
        super();
        this.initProperties();
    }

    static get properties() {
        return {
            email: {type : String},
            password: { type: String }
        };

    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

        form {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 400px;
            max-width: 100%;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 0 8px rgba(0,0,0,0.1);
            padding: 30px;

            input[type="email"],
            input[type="password"] {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
        }

        button {
            padding: 8px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: green;
          }
        `
    ];

    handleSubmit(event) {
        event.preventDefault();
        this.dispatchCustomEvent('login', { email: this.email, password: this.password });
        this.initProperties();
    }

    initProperties() {
        this.email = '';
        this.password = '';
    }

    dispatchCustomEvent(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(event);

    }
    
    handleInputChange(event) {
        const {name, value} = event.target;
        this[name] = event.target.value;
    }

    render() {
        return html`
        <form @submit=${this.handleSubmit}>
            <label for="email">Email:</label>
            <input type="email" required id="email" name="email" .value=${this.email} @input=${this.handleInputChange}>
            
            <label for="password">Contraseña:</label>
            <input type="password" required id="password" name="password" .value=${this.password} @input=${this.handleInputChange}>

            <button type="submit">Ingresar</button>
        </form>
        
        `;
    }
}
customElements.define('login-component', LoginComponent);
