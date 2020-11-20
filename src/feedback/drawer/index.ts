import {$, pxToVw, CustomElement} from "../../utils/index";

/**
 * 抽屉
 * @docs    请查阅README.md文档
 */
@CustomElement("drawer-component")
export default class Drawer extends HTMLElement {
    private shadow: ShadowRoot;
    private isConnect: boolean;

    /**
     * 构造器
     */
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
        return ['visible'];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue != newValue) {
            newValue === 'true'
                ? this.show()
                : "";

            newValue === 'false'
                ? this.hide(() => this.dispatch('afterHide'))
                : "";

            this.isConnect ? this.dispatch('change') : "";
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.isConnect = true;

        this.dispatch('connect');

        this.onClick();
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
     * 显示
     */
    show() {
        let el = $(this.shadowRoot)
            .find(".drawer-wrapper")
            .addClass("visible")

        setTimeout(() => $(el).addClass("show"), 50)
    }

    /**
     * 隐藏
     * @param cb    隐藏后回调
     */
    hide(cb?:Function) {
        let el = $(this.shadowRoot)
            .find(".drawer-wrapper")
            .removeClass("show")
            .addClass("hide")

        setTimeout(() => {
            $(el).removeClass("hide", "visible");
            $(this).attr("visible", false);

            cb?.();
        }, 500)
    }

    /**
     * 当点击时
     */
    onClick() {
        $(this.shadowRoot)
            .find(".drawer-wrapper")
            .on("click", (ev: any) => {
                let isClosable = $(this).attr('mask-closable') === "true" || typeof $(this).attr('mask-closable') === "undefined";

                isClosable && $(ev.target).hasClass("drawer-wrapper")
                    ? this.hide()
                    : "";
            })
    }

    /**
     * 派发事件
     * @param type      事件类型
     */
    dispatch(type: string) {
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
        return `
            <style>
                :host([visible]) {
                    display: inline-block !important;
                }
                
                .drawer-wrapper {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    display: none;
                    overflow: hidden;
                    opacity: 0;
                    z-index: 1000;
                    background: transparent;
                    transition: .5s;
                    backdrop-filter: blur(${pxToVw($(this).attr("mask-blur") || 6)});
                }
                
                .drawer-wrapper.visible {
                    display: flex;
                }
                
                .drawer-wrapper.show {
                    background: ${$(this).attr("mask-bg") || `var(--mask-black)`};
                }
                
                .drawer-wrapper.show, .drawer-wrapper.show .drawer-box {
                    opacity: 1;
                }
                
                .drawer-wrapper.hide {
                    background: transparent;
                }
                
                .drawer-wrapper.hide, .drawer-wrapper.hide .drawer-box {
                    opacity: 0;
                }
                
                .drawer-wrapper .drawer-box {
                    max-width: 100%;
                    max-height: 100%;
                    overflow-scrolling: touch;
                    cursor: auto;
                    opacity: 0;
                    transition: .5s;
                }
                
                :host([align=top]) .drawer-wrapper {
                    align-items: flex-start;
                }
                
                :host([align=top]) .drawer-wrapper .drawer-box,
                :host([align=top]) .drawer-wrapper.hide .drawer-box {
                    transform: translate3d(0, -100%, 0);
                }
                
                :host([align=right]) .drawer-wrapper {
                    justify-content: flex-end;
                }
                
                
                :host([align=right]) .drawer-wrapper .drawer-box, :host([align=right]) .drawer-wrapper.hide .drawer-box {
                    transform: translate3d(100%, 0, 0);
                }
                
                
                :host([align=bottom]) .drawer-wrapper {
                    align-items: flex-end;
                }
                
                :host([align=bottom]) .drawer-wrapper .drawer-box, :host([align=bottom]) .drawer-wrapper.hide .drawer-box {
                    transform: translate3d(0, 100%, 0);
                }
                
                :host([align=left]) .drawer-wrapper .drawer-box, :host([align=left]) .drawer-wrapper.hide .drawer-box {
                    transform: translate3d(-100%, 0, 0);
                }
                
                :host([align=center]) .drawer-wrapper {
                    justify-content: center;
                    align-items: center
                }
                
                :host([align=center]) .drawer-wrapper .drawer-box, :host([align=center]) .drawer-wrapper.hide .drawer-box {
                    transform: scale(0.8);
                }
                
                :host([align=top]) .drawer-wrapper .drawer-box,
                :host([align=top]) .drawer-wrapper .drawer-box ::slotted(*),
                :host([align=bottom]) .drawer-wrapper .drawer-box,
                :host([align=bottom]) .drawer-wrapper .drawer-box ::slotted(*) {
                    width: 100%;
                }
                
                :host([align=right]) .drawer-wrapper .drawer-box,
                :host([align=right]) .drawer-wrapper .drawer-box ::slotted(*),
                :host([align=left]) .drawer-wrapper .drawer-box,
                :host([align=left]) .drawer-wrapper .drawer-box ::slotted(*) {
                    height: 100%;
                }
                
                :host([align]) .drawer-wrapper.show .drawer-box {
                    transform: translate3d(0, 0, 0);
                }
                
                :host ::slotted(*) {
                    max-width: 100vw;
                    max-height: 100vh;
                }
            </style>
                
            <div class="drawer-wrapper">
                <div class="drawer-box">
                    <slot></slot>
                </div>
            </div>
        `
    }
}