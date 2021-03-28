import {$, pxToVw, createCustomElement, CreateHTMLElement} from "../../utils"
/**
 * 加载中
 * @docs    请查阅README.md文档
 */
class LoadingComponent extends CreateHTMLElement {
    /**
     * 构造器
     */
    constructor() {
        super();

        this.shadow.innerHTML = this.render();
    }

    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ["visible"];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.isConnect && oldValue != newValue) {
            newValue === 'true'
                ? this.show()
                : "";

            newValue === 'false'
                ? this.hide()
                : "";

           this.dispatch('change');
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.isConnect = true;

        $(this).attr("visible") === "true" ? this.show() : this.hide();

        this.dispatch('connect');

        // "mask"插槽元素存在时，删除默认元素
        if ($(this).find(`[slot=mask]`).length) {
            $(this.shadowRoot).find(`.loading-mask-wrapper > .icon-loading`).remove()
        }

        // "more"插槽元素存在时，删除默认元素
        if ($(this).find(`[slot=more]`).length) {
            $(this.shadowRoot).find(`.loading-more-wrapper > div > .icon-loading`).remove()
        }
    }

    /**
     * 派发事件
     * @param type      事件类型
     */
    dispatch(type) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: {
                visible: $(this).attr("visible") === "true",
            }
        }))
    }

    /**
     * 显示
     */
    show() {
        let type = $(this).attr("type") === "more" ? "more" : "mask",
            el = $(this.shadowRoot)
                .find(`.loading-${type}-wrapper`)
                .addClass("visible");

        setTimeout(() => $(el).addClass("show"), 50)

        $(this.shadowRoot)
            .find(`.loading-${type === "more" ? "mask" : "more"}-wrapper`)
            .removeClass("visible", "show", "hide");
    }

    /**
     * 隐藏
     */
    hide() {
        let el = $(this.shadowRoot)
            .find(`.loading-${$(this).attr("type") === "more" ? "more" : "mask"}-wrapper`)
            .removeClass("show")
            .addClass("hide")

        setTimeout(() => {
            $(el).removeClass("show", "hide", "visible");
            $(this).attr("visible", "false");
        }, 300)
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let fontSize = $(this).attr("font-size") || 48,
            top = $(this).attr("mask-icon-top");

        return `
            <style>
                :host {
                    display: block;
                    position: relative;
                    min-height: var(--height-md);
                }
                
                .loading-more-wrapper, .loading-mask-wrapper {
                    display: none;
                    justify-content: center;
                    align-items: center;
                    transition: .3s;
                    opacity: 0;
                }
                
                .loading-mask-wrapper {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    backdrop-filter: blur(${pxToVw($(this).attr("mask-blur") || 6)});
                    background: ${$(this).attr("mask-bg") || "var(--mask-white)"};
                }
                
                ${
                    top && Number(top) > 0 
                        ? `
                            .loading-mask-wrapper {
                                align-items: flex-start;
                                padding-top: ${pxToVw(top)};
                            }
                        `
                        : ``
                }
                
                .loading-more-wrapper.visible, .loading-mask-wrapper.visible {
                    display: flex;
                }
                
                .loading-more-wrapper.show, .loading-mask-wrapper.show {
                    opacity: 1;
                }
                
                .loading-more-wrapper.hide, .loading-mask-wrapper.hide {
                    opacity: 0;
                }
                
                .loading-mask-wrapper.visible ::slotted([slot="icon"]) {
                    display: block !important;
                }
                
                .loading-more-wrapper .icon-loading, .loading-mask-wrapper .icon-loading {
                    width: ${pxToVw(fontSize)};
                    height: ${pxToVw(fontSize)};
                    line-height: var(--height-md);
                    fill: ${$(this).attr("color") || "var(--color-theme)"};
                    animation: rotating 2s linear infinite;
                }
                
                .loading-more-wrapper {
                    transform: scale(0);
                    height: 0;
                    min-height: var(--height-md);
                }
                
                .loading-more-wrapper.visible {
                    height: 100%;
                }
                
                .loading-more-wrapper.show {
                    transform: scale(1);
                }
                
                .loading-more-wrapper.hide {
                    transform: scale(0);
                    height: 0;
                }
                
                @keyframes rotating {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(1turn);
                    }
                }
            </style>
            
            <slot></slot>
            
            <div class="loading-mask-wrapper"> 
                <slot name="mask"></slot>
                <svg class="icon-loading" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <path d="M511.882596 287.998081h-0.361244a31.998984 31.998984 0 0 1-31.659415-31.977309v-0.361244c0-0.104761 0.115598-11.722364 0.115598-63.658399V96.000564a31.998984 31.998984 0 1 1 64.001581 0V192.001129c0 52.586273-0.111986 63.88237-0.119211 64.337537a32.002596 32.002596 0 0 1-31.977309 31.659415zM511.998194 959.99842a31.998984 31.998984 0 0 1-31.998984-31.998984v-96.379871c0-51.610915-0.111986-63.174332-0.115598-63.286318s0-0.242033 0-0.361243a31.998984 31.998984 0 0 1 63.997968-0.314283c0 0.455167 0.11921 11.711527 0.11921 64.034093v96.307622a31.998984 31.998984 0 0 1-32.002596 31.998984zM330.899406 363.021212a31.897836 31.897836 0 0 1-22.866739-9.612699c-0.075861-0.075861-8.207461-8.370021-44.931515-45.094076L195.198137 240.429485a31.998984 31.998984 0 0 1 45.256635-45.253022L308.336112 263.057803c37.182834 37.182834 45.090463 45.253022 45.41197 45.578141A31.998984 31.998984 0 0 1 330.899406 363.021212zM806.137421 838.11473a31.901448 31.901448 0 0 1-22.628318-9.374279L715.624151 760.859111c-36.724054-36.724054-45.018214-44.859267-45.097687-44.93874a31.998984 31.998984 0 0 1 44.77618-45.729864c0.32512 0.317895 8.395308 8.229136 45.578142 45.411969l67.88134 67.88134a31.998984 31.998984 0 0 1-22.624705 54.630914zM224.000113 838.11473a31.901448 31.901448 0 0 0 22.628317-9.374279l67.88134-67.88134c36.724054-36.724054 45.021826-44.859267 45.097688-44.93874a31.998984 31.998984 0 0 0-44.776181-45.729864c-0.32512 0.317895-8.395308 8.229136-45.578142 45.411969l-67.88134 67.884953a31.998984 31.998984 0 0 0 22.628318 54.627301zM255.948523 544.058589h-0.361244c-0.104761 0-11.722364-0.115598-63.658399-0.115598H95.942765a31.998984 31.998984 0 1 1 0-64.00158h95.996952c52.586273 0 63.88237 0.111986 64.337538 0.11921a31.998984 31.998984 0 0 1 31.659414 31.97731v0.361244a32.002596 32.002596 0 0 1-31.988146 31.659414zM767.939492 544.058589a32.002596 32.002596 0 0 1-31.995372-31.666639v-0.361244a31.998984 31.998984 0 0 1 31.659415-31.970085c0.455167 0 11.754876-0.11921 64.34115-0.11921h96.000564a31.998984 31.998984 0 0 1 0 64.00158H831.944685c-51.936034 0-63.553638 0.111986-63.665624 0.115598h-0.335957zM692.999446 363.0176a31.998984 31.998984 0 0 1-22.863126-54.381656c0.317895-0.32512 8.229136-8.395308 45.41197-45.578141l67.88134-67.884953A31.998984 31.998984 0 1 1 828.693489 240.429485l-67.892177 67.88134c-31.020013 31.023625-41.644196 41.759794-44.241539 44.393262l-0.697201 0.722488a31.908673 31.908673 0 0 1-22.863126 9.591025z"></path>
                </svg>
            </div>
            
            <div class="loading-more-wrapper">
                <div>
                    <slot name="more"></slot>
                    <svg class="icon-loading" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M511.882596 287.998081h-0.361244a31.998984 31.998984 0 0 1-31.659415-31.977309v-0.361244c0-0.104761 0.115598-11.722364 0.115598-63.658399V96.000564a31.998984 31.998984 0 1 1 64.001581 0V192.001129c0 52.586273-0.111986 63.88237-0.119211 64.337537a32.002596 32.002596 0 0 1-31.977309 31.659415zM511.998194 959.99842a31.998984 31.998984 0 0 1-31.998984-31.998984v-96.379871c0-51.610915-0.111986-63.174332-0.115598-63.286318s0-0.242033 0-0.361243a31.998984 31.998984 0 0 1 63.997968-0.314283c0 0.455167 0.11921 11.711527 0.11921 64.034093v96.307622a31.998984 31.998984 0 0 1-32.002596 31.998984zM330.899406 363.021212a31.897836 31.897836 0 0 1-22.866739-9.612699c-0.075861-0.075861-8.207461-8.370021-44.931515-45.094076L195.198137 240.429485a31.998984 31.998984 0 0 1 45.256635-45.253022L308.336112 263.057803c37.182834 37.182834 45.090463 45.253022 45.41197 45.578141A31.998984 31.998984 0 0 1 330.899406 363.021212zM806.137421 838.11473a31.901448 31.901448 0 0 1-22.628318-9.374279L715.624151 760.859111c-36.724054-36.724054-45.018214-44.859267-45.097687-44.93874a31.998984 31.998984 0 0 1 44.77618-45.729864c0.32512 0.317895 8.395308 8.229136 45.578142 45.411969l67.88134 67.88134a31.998984 31.998984 0 0 1-22.624705 54.630914zM224.000113 838.11473a31.901448 31.901448 0 0 0 22.628317-9.374279l67.88134-67.88134c36.724054-36.724054 45.021826-44.859267 45.097688-44.93874a31.998984 31.998984 0 0 0-44.776181-45.729864c-0.32512 0.317895-8.395308 8.229136-45.578142 45.411969l-67.88134 67.884953a31.998984 31.998984 0 0 0 22.628318 54.627301zM255.948523 544.058589h-0.361244c-0.104761 0-11.722364-0.115598-63.658399-0.115598H95.942765a31.998984 31.998984 0 1 1 0-64.00158h95.996952c52.586273 0 63.88237 0.111986 64.337538 0.11921a31.998984 31.998984 0 0 1 31.659414 31.97731v0.361244a32.002596 32.002596 0 0 1-31.988146 31.659414zM767.939492 544.058589a32.002596 32.002596 0 0 1-31.995372-31.666639v-0.361244a31.998984 31.998984 0 0 1 31.659415-31.970085c0.455167 0 11.754876-0.11921 64.34115-0.11921h96.000564a31.998984 31.998984 0 0 1 0 64.00158H831.944685c-51.936034 0-63.553638 0.111986-63.665624 0.115598h-0.335957zM692.999446 363.0176a31.998984 31.998984 0 0 1-22.863126-54.381656c0.317895-0.32512 8.229136-8.395308 45.41197-45.578141l67.88134-67.884953A31.998984 31.998984 0 1 1 828.693489 240.429485l-67.892177 67.88134c-31.020013 31.023625-41.644196 41.759794-44.241539 44.393262l-0.697201 0.722488a31.908673 31.908673 0 0 1-22.863126 9.591025z"></path>
                    </svg>
                </div>
            </div>
        `
    }
}

export default createCustomElement("loading-component", LoadingComponent)
