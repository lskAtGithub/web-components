export class WButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    // 创建style元素，直接在组件内定义样式
    const style = document.createElement('style');
    // 内联定义必要的样式，确保在shadow DOM中生效
    style.textContent = `
      :host {
        display: inline-block;
      }
      
      button {
        padding: 0.5rem 1rem;
        background-color: #3b82f6;
        color: white;
        border-radius: 0.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.2s;
      }
      
      button:hover:not(:disabled) {
        background-color: #2563eb;
      }
      
      button:active:not(:disabled) {
        background-color: #1d4ed8;
      }
      
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
    
    // 创建按钮容器
    const btn = document.createElement('button');
    
    // 添加前面的icon slot
    const iconBefore = document.createElement('slot');
    iconBefore.name = 'prefix';
    
    // 添加默认的按钮文字slot
    const textSlot = document.createElement('slot');
    textSlot.textContent = '按钮'; // 当没有内容时的默认文本
    
    // 添加后面的icon slot
    const iconAfter = document.createElement('slot');
    iconAfter.name = 'append';
    
    // 组合所有元素
    btn.appendChild(iconBefore);
    btn.appendChild(textSlot);
    btn.appendChild(iconAfter);
    
    // 添加到shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(btn);
  }
}
customElements.define('w-button', WButton);
