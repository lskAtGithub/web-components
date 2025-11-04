export class WButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      :host {
        --w-btn-bg: #3b82f6;
        --w-btn-hover-bg: #2563eb;
        --w-btn-color: white;
        --w-btn-radius: 6px;
        --w-btn-padding: 8px 16px;
        --w-btn-font-size: 14px;
      }
      button {
        background: var(--w-btn-bg);
        color: var(--w-btn-color);
        border: none;
        border-radius: var(--w-btn-radius);
        padding: var(--w-btn-padding);
        font-size: var(--w-btn-font-size);
        cursor: pointer;
        transition: background 0.2s;
      }
      button:hover {
        background: var(--w-btn-hover-bg);
      }
    `;

    const wrapper = document.createElement('button');
    wrapper.textContent = this.textContent || 'Button';

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define('w-button', WButton);
