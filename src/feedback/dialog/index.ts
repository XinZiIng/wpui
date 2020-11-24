import Drawer from "./../drawer"
import {$, pxToVw, createCustomElement} from "../../utils"

new Drawer();

/**
 * 对话框
 * @docs    请查阅README.md文档
 */
class DialogComponent extends HTMLElement {
    private shadow: ShadowRoot;

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.appendChild(this.render());
    }

    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['visible'];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
            $(this.shadowRoot)
                .find("drawer-component")
                .attr("visible", newValue);
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
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
    dispatch(type) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: {
                visible: $(this).attr('visible') === "true",
            }
        }))
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let borderRadius = $(this).attr("border-radius") || 24
        let div = document.createElement("div"),
            drawerComponent;

        div.innerHTML = `
            <drawer-component 
                visible="${$(this).attr("visible") || false}"
                mask-bg="${$(this).attr("mask-bg") || 'var(--mask-black)'}"
                mask-blur="${$(this).attr("mask-blur") || '6'}"
                mask-closable="${$(this).attr("mask-closable") || true}"
                align="center"
            >
                <style>
                    :host([visible]) {
                        display: inline-block !important;
                    }
                    
                    .dialog-component {
                        overflow: hidden;
                        width: 520px;
                        max-width: 85vw;
                        padding-top: ${pxToVw(64)};
                        background: white;
                        border-radius: ${pxToVw(borderRadius || 24)};
                        font-size: ${pxToVw(34)};
                    }
                    
                    ::slotted([slot=header]) {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: ${pxToVw(110)};
                        padding: ${pxToVw(0, 50, 32)} !important;
                        font-weight: bold;
                    }
                    
                    ::slotted([slot=body]) {
                        overflow: auto;
                        -webkit-overflow-scrolling: touch;
                        max-height: 70vh;
                        padding: ${pxToVw(0, 50, 64)} !important;
                        color: var(--color-gray);
                    }
                    
                    ::slotted([slot=body]) {
                        overflow: auto;
                        -webkit-overflow-scrolling: touch;
                        max-height: 70vh;
                        padding: ${pxToVw(0, 50, 64)} !important;
                        font-size: ${pxToVw(36)};
                        color: var(--color-gray);
                    }
                </style>
                
                <div class="dialog-component">
                    <slot name="header"></slot>
                    <slot name="body"></slot>
                    <slot name="footer"></slot>
                </div>
            </drawer-component>
        `

        return div.children[0];
    }
}

export default createCustomElement("dialog-component", DialogComponent)