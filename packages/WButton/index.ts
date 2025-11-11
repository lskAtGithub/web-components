export class WButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const btn = document.createElement('button');
    btn.textContent = '按钮';
    btn.className = 'px-4 py-2 bg-blue-500 text-white rounded';
    shadow.appendChild(btn);
  }
}
customElements.define('w-button', WButton);
