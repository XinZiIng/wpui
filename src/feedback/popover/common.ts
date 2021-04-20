import {$, pxToVw, CreateHTMLElement} from "../../utils";

/**
 * 抽屉
 * @docs    请查阅README.md文档
 */
export class PopoverCommonComponent extends CreateHTMLElement {
    private el: any;

    /**comment
     * 构造器
     */
    constructor(el:any = "popover") {
        super();

        this.el = el

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

        this.triggerEventBind();
    }

    /**
     * 显示
     */
    show() {
        if ($(this).attr("disabled") === "true") return;

        $(this).attr("visible", "true");

        let wrapper = $(this.shadowRoot)
            .find(`.${this.el}-wrapper`)
            .removeClass("hide")
            .addClass("visible");

        setTimeout(() => {
            $(wrapper).addClass("show");
        }, 50)
    }

    /**
     * 隐藏
     * @param cb    隐藏后回调
     */
    hide(cb?:Function) {
        $(this).attr("visible", "false");

        let wrapper = $(this.shadowRoot)
            .find(`.${this.el}-wrapper`)
            .addClass("hide");

        setTimeout(() => {
            $(wrapper).removeClass("visible", "hide", "show")
        }, 300)
    }

    /**
     * 触发事件绑定
     */
    triggerEventBind() {
        switch ($(this).attr("trigger")) {
            case "focus":
                this.triggerFocus();
                break;
            case "hover":
                this.triggerMouse();
                break;
            default:
                this.triggerClick();
        }
    }

    /**
     * 当点击时
     */
    triggerClick() {
        $(this).find("[slot=reference]", false).on("click", () => {
            $(this).attr("visible") == "true"
                ? this.hide()
                : this.show();
        });

    }

    /**
     * 当元素聚焦时
     */
    triggerFocus() {
        $(this).find(`[slot="reference"]`)
            .on("focus", () => this.show())
            .on("blur", () => this.hide());
    }

    /**
     * 当鼠标移入时
     */
    triggerMouse() {
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
        return `
            ${this.createStyle()}
            
            <slot name="reference"></slot>

            <div class="${this.el}-wrapper">
                <div class="${this.el}-box">
                    <slot></slot>
                </div>
                
                <svg class="triangle" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 1023.90899996l512.029-511.913L1024 1023.90899996 0 1023.90899996z"></path></svg>
            </div>
        `
    }

    createStyle() {
        let color = $(this).attr("color") || "white",
            triangleOffset = 32,
            triangleSize = 24;

        return `
            <style>
                :host {
                    position: relative;
                }
                
                
                /* 顶部居左、顶部居中、顶部居右对齐 */
                :host([placement=topLeft]) .${this.el}-wrapper, :host([placement=top]) .${this.el}-wrapper, :host([placement=topRight]) .${this.el}-wrapper {
                    top: auto;
                    bottom: 100%;
                }
                
                :host([placement=topLeft][triangle=true]) .${this.el}-wrapper, :host([placement=top][triangle=true]) .${this.el}-wrapper, :host([placement=topRight][triangle=true]) .${this.el}-wrapper {
                    padding: ${pxToVw(0, 0, triangleSize)};
                }
                
                
                /* 顶部居左、顶部居中、顶部居右对齐时，三角形图标居底定位 */
                :host([placement=topLeft]) .${this.el}-wrapper .triangle, :host([placement=top]) .${this.el}-wrapper .triangle, :host([placement=topRight]) .${this.el}-wrapper .triangle {
                    top: auto;
                    bottom: 0;
                    transform: rotate(180deg);
                }
                
                
                /* 顶部居中、底部居中对齐 */
                :host([placement=top]) .${this.el}-wrapper, :host([placement=bottom]) .${this.el}-wrapper {
                    left: 50%;
                    transform: translateX(-50%);
                }
                
                /* 顶部居中、底部居中对齐时，三角形图标居中定位 */
                :host([placement=top]) .${this.el}-wrapper .triangle, :host([placement=bottom]) .${this.el}-wrapper .triangle {
                    left: 50%;
                    margin-left: -4px;
                }
                
                
                /* 顶部居左、顶部居右对齐 */
                :host([placement=topRight]) .${this.el}-wrapper, :host([placement=bottomRight]) .${this.el}-wrapper {
                    right: 0;
                    left: auto;
                }
                
                /* 顶部居左、顶部居右对齐时，三角形图标居右定位 */
                :host([placement=topRight]) .${this.el}-wrapper .triangle, :host([placement=bottomRight]) .${this.el}-wrapper .triangle {
                    left: auto;
                    right: ${pxToVw(triangleOffset)};
                }
                
                
                /* 左边居上、左边居中、左边居下对齐 */
                :host([placement=leftTop]) .${this.el}-wrapper, :host([placement=left]) .${this.el}-wrapper, :host([placement=leftBottom]) .${this.el}-wrapper {
                    right: 100%;
                }
                :host([placement=leftTop][triangle=true]) .${this.el}-wrapper, :host([placement=left][triangle=true]) .${this.el}-wrapper, :host([placement=leftBottom][triangle=true]) .${this.el}-wrapper {
                    padding: ${pxToVw(0, triangleSize, 0, 0)};
                }
                
                /* 左边居上、左边居中、左边居下对齐时，三角图标显示居顶定位 */
                :host([placement=leftTop]) .${this.el}-wrapper .triangle, :host([placement=left]) .${this.el}-wrapper .triangle, :host([placement=leftBottom]) .${this.el}-wrapper .triangle {
                    right: 0;
                    left: auto;
                    transform: rotate(90deg);
                }
                
                
                /* 左边居上、右边居上对齐 */
                :host([placement=leftTop]) .${this.el}-wrapper, :host([placement=rightTop]) .${this.el}-wrapper {
                    top: 0; 
                }
               
                /* 左边居上、右边居上对齐时，三角形图标居顶定位 */
                :host([placement=leftTop]) .${this.el}-wrapper .triangle, :host([placement=rightTop]) .${this.el}-wrapper .triangle {
                    top: ${pxToVw(triangleOffset)};
                    bottom: auto;
                }
                
                
                /* 左边居中、右边居中对齐 */
                :host([placement=left]) .${this.el}-wrapper, :host([placement=right]) .${this.el}-wrapper {
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                /* 左边居中、右边居中时，三角形图标居中定位 */
                :host([placement=left]) .${this.el}-wrapper .triangle, :host([placement=right]) .${this.el}-wrapper .triangle {
                    top: 50%;
                    margin-top: ${pxToVw(-triangleSize)};
                }
                
                
                /* 左边居底、右边居底对齐 */
                :host([placement=leftBottom]) .${this.el}-wrapper, :host([placement=rightBottom]) .${this.el}-wrapper {
                    top: auto;
                    bottom: 0;
                }
                
                
                /* 右边居上、右边居中、右边居下对齐 */
                :host([placement=rightTop]) .${this.el}-wrapper, :host([placement=right]) .${this.el}-wrapper, :host([placement=rightBottom]) .${this.el}-wrapper {
                    left: 100%;
                }
                :host([placement=rightTop][triangle=true]) .${this.el}-wrapper, :host([placement=right][triangle=true]) .${this.el}-wrapper, :host([placement=rightBottom][triangle=true]) .${this.el}-wrapper {
                    padding: ${pxToVw(0, 0, 0, triangleSize)};
                }
                
                /* 右边居上、右边居中、右边居下对齐时，三角形图标居左定位 */
                :host([placement=rightTop]) .${this.el}-wrapper .triangle, :host([placement=right]) .${this.el}-wrapper .triangle, :host([placement=rightBottom]) .${this.el}-wrapper .triangle {
                    left:0;
                    transform: rotate(-90deg);
                }
               
               
                /* 左边居下、右边居下对齐时，三角形图标居底定位 */
                :host([placement=leftBottom]) .${this.el}-wrapper .triangle, :host([placement=rightBottom]) .${this.el}-wrapper .triangle {
                    top: auto;
                    bottom: ${pxToVw(triangleOffset)};
                }
                
                .${this.el}-wrapper {
                    display: none;
                    position: absolute;
                    top: 100%;
                    z-index: 10;
                    min-width: 100%;
                    opacity: 0;   
                    transition: .3s opacity;
                }
                
                :host([triangle=true]) .${this.el}-wrapper {
                    padding: ${pxToVw(triangleSize, 0, 0)};
                }
                
                .${this.el}-wrapper.visible {
                    display: block;
                }
                
                .${this.el}-wrapper.show {
                    opacity: 1;
                }
                
                .${this.el}-wrapper.hide {
                    opacity: 0;
                }
                
                .${this.el}-wrapper ::slotted([slot=content]) {
                    display: block !important;
                }
                
                .${this.el}-wrapper .triangle {
                    position: absolute;
                    top: 0;
                    left: ${pxToVw(triangleOffset)};
                    display: none;
                    width: ${pxToVw(triangleSize)};
                    height: ${pxToVw(triangleSize)};
                    fill: ${color};
                }
                
                :host([triangle=true]) .${this.el}-wrapper .triangle {
                    display: block;
                }
                
                .${this.el}-box {
                    min-width: ${pxToVw(60)};
                    min-height: ${pxToVw(64)};
                    border-radius: ${pxToVw($(this).attr("border-radius") || 0)};
                    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05);
                    background: ${color};
                }
            </style>
        `
    }
}

try {
    window.onload = function () {
        $(document.body).on("click", ev => {
            let popover = $(ev.target).parents("popover-component", true).get(0)
            $("popover-component[visible=true]").each(function () {
                popover != this
                    ? $(this).attr("visible", "false")
                    : "";
            })

            let select = $(ev.target).parents("select-component", true).get(0)
            $("select-component[visible=true]").each(function () {
                select != this
                    ? $(this).attr("visible", "false")
                    : "";
            })
        })
    }
} catch (e) {

}
