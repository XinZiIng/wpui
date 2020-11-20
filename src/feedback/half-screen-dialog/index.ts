import Drawer from "./../drawer"
import {$, pxToVw, createCustomElement} from "../../utils"

new Drawer();

/**
 * 半屏对话框
 * @docs    请查阅README.md文档
 */
class HalfScreenDialogComponent extends HTMLElement {
    private shadow: ShadowRoot;
    constructor(options = {}) {
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
                mask-closable="${$(this).attr("mask-closable") || true}"
                skip-verification="true"
                align="bottom"
                blur="${$(this).attr("blur")}"
            >
                <style>
                    :host([visible]) {
                        display: inline-block !important;
                    }
                    
                    .half-screen-dialog-component {
                        background: white;
                        border-radius: ${pxToVw(borderRadius, borderRadius, 0, 0)};
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: column;
                        height: 80vh;
                        position: relative;
                    }
                    
                    .half-screen-dialog-component .half-screen-dialog-close-box {
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: ${pxToVw(110)};
                        height: ${pxToVw(110)};
                        font-size: ${pxToVw(48)};
                        cursor: pointer;
                    }
                    
                    ::slotted([slot=header]) {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        height: ${pxToVw(110)};
                        padding: ${pxToVw(0, 110)} !important;
                        font-size: ${pxToVw(30)};
                        font-weight: bold;
                    }
                    
                    ::slotted([slot=body]) {
                        flex: 1;
                        overflow: auto;
                        -webkit-overflow-scrolling: touch;
                    }
                </style>
                
                <div class="half-screen-dialog-component">
                    <span class="half-screen-dialog-close-box">
                        <svg viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"></path>
                        </svg>
                    </span>
                    
                    <slot name="header"></slot>
                    <slot name="body"></slot>
                    <slot name="footer"></slot>
                </div>
            </drawer-component>
        `

        drawerComponent = div.children[0];


        this.bind(drawerComponent);
        return drawerComponent;
    }

    bind(drawerComponent) {
        // 抽屉组件绑定事件
        $(drawerComponent)
            .on("changed", ev => {
                $(this).attr("visible", ev.detail.visible)
                this.dispatch("changed")
            })

        // 关闭
        $(drawerComponent)
            .find(".half-screen-dialog-component")
            .on("click", ev => {
                // 隐藏
                if (
                    $(ev.target).hasClass("half-screen-dialog-close-box")
                    || $(ev.target.parentNode).hasClass("half-screen-dialog-close-box")
                    || $(ev.target.parentNode.parentNode).hasClass("half-screen-dialog-close-box")
                ) {
                    this.setAttribute("visible", "false")
                }
            })
    }
}

export default createCustomElement("half-screen-dialog-component", HalfScreenDialogComponent)