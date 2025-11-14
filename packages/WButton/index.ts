import '../style.css';

export class WButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });

    // 创建style元素，直接在组件内定义样式
    // 创建按钮容器
    const elementNode = document.createElement('button');
    elementNode.className = `py-3 px-6 bg-blue-500 text-white rounded-md`;
    // 添加前面的icon slot
    const iconBefore = document.createElement('slot');
    iconBefore.name = 'prefix';

    // 添加默认的按钮文字slot
    const textSlot = document.createElement('slot');
    textSlot.textContent = '按钮';

    // 添加后面的icon slot
    const iconAfter = document.createElement('slot');
    iconAfter.name = 'append';

    // 组合所有元素
    elementNode.appendChild(iconBefore);
    elementNode.appendChild(textSlot);
    elementNode.appendChild(iconAfter);

    // 添加到shadow DOM
    shadow.appendChild(elementNode);
  }
}
customElements.define('w-button', WButton);
