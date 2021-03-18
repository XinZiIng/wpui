import {$, createCustomElement, pxToVw, CreateHTMLElement} from "../../utils"

/**
 * 图片加载组件
 */
class ImageComponent extends CreateHTMLElement {
    private timer: NodeJS.Timeout;

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
        return ["src"];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.isConnect && oldValue != newValue) {
            $(this.shadowRoot)
                .find(".image-wrapper")
                .removeClass("error", "success", "hide");

            setTimeout(() => this.load(), 100);

            this.dispatch('change');
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.isConnect = true;

        this.load();

        if ($(this).find(`[slot=error]`).length) {
            $(this.shadowRoot).find(`.error-icon`).remove()
        }
    }

    /**
     * 图片加载处理
     */
    load() {
        clearTimeout(this.timer);

        let img,
            src = $(this).attr("src"),
            imageWrapper = $(this.shadowRoot).find(".image-wrapper"),

            loadSuccess = () => {
                $(imageWrapper).addClass("success");

                this.timer = setTimeout(
                    () => $(imageWrapper).addClass("hide"),
                    300
                )
            },

            loadError = () => {
                clearTimeout(this.timer);
                $(imageWrapper).addClass("error");
            };

        $(this).find("img").each(item => {
            if (item.src === src) {
                img = item;
                return false;
            }
        })

        if (!img || !src) return loadError()

        if (img?.complete && src) return loadSuccess();

        $(img)
            .on("load", loadSuccess)
            .on("error", loadError);
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let errorSizeIcon = $(this).attr("error-icon-size");
        errorSizeIcon < 0 ? errorSizeIcon = "" : "";

        let borderRadius = $(this).attr("border-radius");
        borderRadius < 0 ? borderRadius = "" : "";

        return `
            <style>
                :host {
                    border-radius: ${pxToVw(borderRadius || 0)};
                }
               
                .image-wrapper {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                }
                
                .image-wrapper.success .loading-box {
                    opacity: 0;
                }
                
                .image-wrapper.success.hide, .image-wrapper.error .loading-box {
                    display: none !important;
                }
                
                .image-wrapper.error .error-box {
                    display: flex;
                }
                
                .loading-box, .error-box {
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }
                
                .loading-box {
                    opacity: 1;
                    transition: .3s;
                    display: flex !important;
                    background: var(--image-loading-bg)
                }
                
                .error-box {       
                    display: none;
                    background: var(--image-error-bg);
                    color: var(--color-gray-light);
                }
                
                .error-box .error-icon {
                    fill: ${$(this).attr("error-icon-color") || `var(--color-gray-light)`};
                    width: ${pxToVw(errorSizeIcon || 50)}; 
                    height: ${pxToVw(errorSizeIcon || 50)}
                }
            </style>  
                
            <slot></slot>

            <div class="image-wrapper">
                <div class="loading-box">
                    <slot name="loading"></slot>
                </div>
                
                <div class="error-box">
                    <svg class="error-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M842.688 128 181.312 128C116.64 128 64 180.64 64 245.312l0 533.376C64 843.36 116.64 896 181.312 896l661.376 0C907.36 896 960 843.36 960 778.688L960 245.312C960 180.64 907.36 128 842.688 128zM288 288c35.36 0 64 28.64 64 64s-28.64 64-64 64c-35.328 0-64-28.64-64-64S252.672 288 288 288zM832 736c0 17.696-14.304 31.488-32 31.488L225.92 768c-0.128 0-0.224 0-0.352 0-10.08 0-19.616-4.288-25.664-12.384-6.112-8.192-7.936-18.56-4.896-28.352 2.304-7.488 58.272-183.552 180.064-183.552 38.08 0.896 67.424 9.824 95.776 18.336 35.712 10.72 70.528 19.936 109.664 13.76 20.448-3.296 28.896-23.808 43.328-69.952 19.04-60.8 47.808-152.736 174.656-152.736 17.536 0 31.776 14.08 32 31.616L832 511.616 832 736z"></path>
                    </svg>
                    
                    <slot name="error"></slot>
                </div>
            </div>
        `
    }
}

export default createCustomElement("image-component", ImageComponent)