import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('w-button')
export class WButton extends LitElement {
  static styles = css`
    button {
      padding: 8px 16px;
      border-radius: 6px;
      background: black;
      color: white;
    }
  `;
  render() {
    return html`<button>W Button</button>`;
  }
}
