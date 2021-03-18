/**
 * 创建自定义元素装饰器
 */
export function createCustomElement(name: string, constructor: CustomElementConstructor)  {
    try {
        !customElements.get(name)
            ? customElements.define(name, constructor)
            : "";
    } catch (e) {
        
    }
}

/**
 * 创建html元素
 */
export class CreateHTMLElement extends HTMLElement {
    protected shadow: ShadowRoot;
    protected isConnect: boolean;

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.innerHTML = this.render();
    }

    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue != newValue) {
            this.isConnect ? this.dispatch('change') : "";
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.isConnect = true;

        this.dispatch('connect');
    }

    /**
     * 当自定义元素与文档DOM断开连接时被调用（关闭当前窗口不会被调用）
     */
    disconnectedCallback() {
        this.dispatch('disconnect');
    }

    /**
     * 当自定义元素被移动到新文档时被调用
     */
    adoptedCallback() {
        this.dispatch('adopt');
    }

    /**
     * 派发事件
     * @param type      事件类型
     */
    dispatch(type: string) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: {}
        }))
    }

    render() {
        return ``;
    }
}