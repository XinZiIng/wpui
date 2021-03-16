import {$, pxToVw, createCustomElement} from "../../utils";

/**
 * 抽屉
 * @docs    请查阅README.md文档
 */
class PopoverComponent extends HTMLElement {
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
                : this.hide();

            this.isConnect ? this.dispatch('change') : "";
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.isConnect = true;

        this.dispatch('connect');

        switch ($(this).attr("trigger")) {
            case "focus":
                this.onFocus();
                break;
            case "hover":
                this.onMouse();
                break;
            default:
                this.onClick();
        }
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
        if ($(this).attr("disabled") === "true") return;

        $(this).attr("visible", "true");

        let popoverWrapper = $(this.shadowRoot)
            .find(".popover-wrapper")
            .removeClass("hide")
            .addClass("visible");

        setTimeout(() => {
            $(popoverWrapper).addClass("show");
        }, 50)
    }

    /**
     * 隐藏
     * @param cb    隐藏后回调
     */
    hide(cb?:Function) {
        $(this).attr("visible", "false");

        let popoverWrapper = $(this.shadowRoot)
            .find(".popover-wrapper")
            .addClass("hide");

        setTimeout(() => {
            $(popoverWrapper).removeClass("visible", "hide", "show")
        }, 300)
    }

    /**
     * 当点击时
     */
    onClick() {
        $(this).find("[slot=reference]", false).on("click", () => {
            $(this).attr("visible") == "true"
                ? this.hide()
                : this.show();
        });

    }

    /**
     * 当元素聚焦时
     */
    onFocus() {
        $(this).find(`[slot="reference"]`)
            .on("focus", () => this.show())
            .on("blur", () => this.hide());
    }

    /**
     * 当鼠标移入时
     */
    onMouse() {
        function checkFather(that, ev) {
            var parent = ev.relatedTarget;

            while (parent && parent != that) {
                parent = parent.parentNode;
            }

            return parent == that
        }

        let self = this;
        $(this)
            .on("mouseover", function (ev) {
                if (checkFather(this, ev)) return;

                self.show();
            })
            .on("mouseout", function (ev) {
                if (checkFather(this, ev)) return;

                self.hide();
            });
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
        let color = $(this).attr("background") || "white",
            arrowOffset = 32,
            arrowSize = 16;

        return `
            <style>
                :host {
                    position: relative;
                }
                
                
                /* 顶部居左、顶部居中、顶部居右对齐 */
                :host([placement=topLeft]) .popover-wrapper, :host([placement=top]) .popover-wrapper, :host([placement=topRight]) .popover-wrapper {
                    top: auto;
                    bottom: 100%;
                }
                
                :host([placement=topLeft][arrow=true]) .popover-wrapper, :host([placement=top][arrow=true]) .popover-wrapper, :host([placement=topRight][arrow=true]) .popover-wrapper {
                    padding: 0 0 ${pxToVw(arrowSize)};
                }
                
                
                /* 顶部居左、顶部居中、顶部居右对齐时，三角形图标居底定位 */
                :host([placement=topLeft]) .popover-wrapper::after, :host([placement=top]) .popover-wrapper::after, :host([placement=topRight]) .popover-wrapper::after {
                    top: auto;
                    bottom: ${pxToVw(arrowSize / 2)};
                }
                
                
                /* 顶部居中、底部居中对齐 */
                :host([placement=top]) .popover-wrapper, :host([placement=bottom]) .popover-wrapper {
                    left: 50%;
                    transform: translateX(-50%);
                }
                
                /* 顶部居中、底部居中对齐时，三角形图标居中定位 */
                :host([placement=top]) .popover-wrapper::after, :host([placement=bottom]) .popover-wrapper::after {
                    left: 50%;
                    margin-left: -4px;
                }
                
                
                /* 顶部居左、顶部居右对齐 */
                :host([placement=topRight]) .popover-wrapper, :host([placement=bottomRight]) .popover-wrapper {
                    right: 0;
                    left: auto;
                }
                
                /* 顶部居左、顶部居右对齐时，三角形图标居右定位 */
                :host([placement=topRight]) .popover-wrapper::after, :host([placement=bottomRight]) .popover-wrapper::after {
                    left: auto;
                    right: ${pxToVw(arrowOffset)};
                }
                
                
                /* 左边居上、左边居中、左边居下对齐 */
                :host([placement=leftTop]) .popover-wrapper, :host([placement=left]) .popover-wrapper, :host([placement=leftBottom]) .popover-wrapper {
                    right: 100%;
                }
                :host([placement=leftTop][arrow=true]) .popover-wrapper, :host([placement=left][arrow=true]) .popover-wrapper, :host([placement=leftBottom][arrow=true]) .popover-wrapper {
                    padding: ${pxToVw(0, arrowSize, 0, 0)};
                }
                
                /* 左边居上、左边居中、左边居下对齐时，三角图标显示居顶定位 */
                :host([placement=leftTop]) .popover-wrapper::after, :host([placement=left]) .popover-wrapper::after, :host([placement=leftBottom]) .popover-wrapper::after {
                    right: ${pxToVw(arrowSize / 2)};
                    left: auto;
                }
                
                
                /* 左边居上、右边居上对齐 */
                :host([placement=leftTop]) .popover-wrapper, :host([placement=rightTop]) .popover-wrapper {
                    top: 0; 
                }
               
                /* 左边居上、右边居上对齐时，三角形图标居顶定位 */
                :host([placement=leftTop]) .popover-wrapper::after, :host([placement=rightTop]) .popover-wrapper::after {
                    top: ${pxToVw(arrowOffset)};
                    bottom: auto;
                }
                
                
                /* 左边居中、右边居中对齐 */
                :host([placement=left]) .popover-wrapper, :host([placement=right]) .popover-wrapper {
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                /* 左边居中、右边居中时，三角形图标居中定位 */
                :host([placement=left]) .popover-wrapper::after, :host([placement=right]) .popover-wrapper::after {
                    top: 50%;
                    margin-top: ${pxToVw(-arrowSize)};
                }
                
                
                /* 左边居底、右边居底对齐 */
                :host([placement=leftBottom]) .popover-wrapper, :host([placement=rightBottom]) .popover-wrapper {
                    top: auto;
                    bottom: 0;
                }
                
                
                /* 右边居上、右边居中、右边居下对齐 */
                :host([placement=rightTop]) .popover-wrapper, :host([placement=right]) .popover-wrapper, :host([placement=rightBottom]) .popover-wrapper {
                    left: 100%;
                }
                :host([placement=rightTop][arrow=true]) .popover-wrapper, :host([placement=right][arrow=true]) .popover-wrapper, :host([placement=rightBottom][arrow=true]) .popover-wrapper {
                    padding: ${pxToVw(0, 0, 0, arrowSize)};
                }
                
                /* 右边居上、右边居中、右边居下对齐时，三角形图标居左定位 */
                :host([placement=rightTop]) .popover-wrapper::after, :host([placement=right]) .popover-wrapper::after, :host([placement=rightBottom]) .popover-wrapper::after {
                    left: ${pxToVw(arrowSize / 2)};
                }
               
               
                /* 左边居下、右边居下对齐时，三角形图标居底定位 */
                :host([placement=leftBottom]) .popover-wrapper::after, :host([placement=rightBottom]) .popover-wrapper::after {
                    top: auto;
                    bottom: ${pxToVw(arrowOffset)};
                }
                
                .popover-wrapper {
                    display: none;
                    position: absolute;
                    top: 100%;
                    z-index: 10;
                    opacity: 0;   
                    transition: .3s opacity;
                }
                
                :host([arrow=true]) .popover-wrapper {
                    padding: ${pxToVw(arrowSize, 0, 0)};
                }
                
                .popover-wrapper.visible {
                    display: block;
                }
                
                .popover-wrapper.show {
                    opacity: 1;
                }
                
                .popover-wrapper.hide {
                    opacity: 0;
                }
                
                .popover-wrapper ::slotted([slot=content]) {
                    display: block !important;
                }
                
                .popover-wrapper::after {
                    content: "";
                    position: absolute;
                    top: ${pxToVw(arrowSize / 2)};
                    left: ${pxToVw(arrowOffset)};
                    display: none;
                    width: ${pxToVw(arrowSize)};
                    height: ${pxToVw(arrowSize)};
                    transform: rotate(45deg);
                }
                
                :host([arrow=true]) .popover-wrapper::after {
                    display: block;
                }
                
                .popover-wrapper::after, .popover-box {
                    background: ${color};
                }
                
                .popover-box {
                    min-width: ${pxToVw(60)};
                    min-height: ${pxToVw(64)};
                    border-radius: ${pxToVw($(this).attr("border-radius") || 0)};
                    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05);
                }
            </style>
                
            <slot name="reference"></slot>

            <div class="popover-wrapper">
                <div class="popover-box">
                    <slot name="content"></slot>
                </div>
            </div>
        `
    }
}

try {
    window.onload = function () {
        $(document.body).on("click", ev => {
            let el = $(ev.target).parents("popover-component", true).get(0)

            $("popover-component[visible=true]").each(function () {
                el != this
                    ? $(this).attr("visible", "false")
                    : "";
            })
        })
    }
} catch (e) {

}

export default createCustomElement("popover-component", PopoverComponent)