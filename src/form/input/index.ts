import {$, createCustomElement, pxToVw, CreateHTMLElement} from "../../utils"

/**
 * 面包屑组件
 */
class InputComponent extends CreateHTMLElement {
    /**
     * 构造器
     */
    constructor() {
        super();

        this.shadow.innerHTML = this.render();
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.isConnect = true;

        this.dispatch('change');

        $(this).attr("clear") === "true"
            ? this.clearValueEvent()
            : "";

        $(this).attr("view") === "true"
            ? this.viewPasswordEvent()
            : "";

        $(this)
            .find("input")
            .on("input, change", (ev) => {
                let clearIconBox = $(this.shadowRoot).find(".icon-box.clear");
                ev.currentTarget.value == "" ? $(clearIconBox).removeClass("show") : $(clearIconBox).addClass("show");
            })
            .on("focus", (ev) => {
                $(this).addClass("focus")
            })
            .on("blur", (ev) => {
                $(this).removeClass("focus")
            })
    }

    /**
     * 清空输入框值
     */
    clearValueEvent() {
        $(this.shadowRoot).find(".icon-box.clear").on("click", () => {
            $(this).find("input").val("").focus();
            $(this.shadowRoot).find(".icon-box.clear").removeClass("show")
        })
    }

    /**
     * 查看密码操作
     */
    viewPasswordEvent() {
        $(this.shadowRoot).find(".icon-box.view-password").on("click", () => {
            let isChange = $(this.shadowRoot)
                .find(".icon-box.view-password")
                .toggleClass("change")
                .hasClass("change");

            $(this)
                .find("input")
                .attr("type", isChange ? "text" : "password")
                .focus();
        })
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        return `
            <style>
                :host([size=lg]) ::slotted([slot=prefix]) {
                    font-size: var(--font-size-sm);
                }
                
                ::slotted([slot=prefix]), ::slotted([slot=suffix]) {
                    padding: var(--margin-padding-md);
                }
                
                .input-box {
                    flex: 1;
                    overflow: hidden;
                }
                
                .icon-box {
                    display: none;
                    align-items: center;
                    height: var(--height-md);
                    padding-right: var(--margin-padding-md);
                    cursor: pointer;
                }
                
                .icon-box svg {
                    fill: var(--color-gray-light);
                }
                
                .icon-box + .icon-box {
                    padding-left: 0;
                }
                
                :host([clear=true]) .icon-box.clear {
                    display: none;
                }
                
                :host([clear=true]) .icon-box.clear.show {
                    display: flex;
                }
                
                .icon-box.clear svg {
                    width: var(--font-size);
                    height: var(--font-size);
                }
                
                :host([view=true]) .icon-box.view-password {
                    display: flex;
                }
                
                .icon-box.view-password svg {
                    width: var(--font-size-sm);
                    height: var(--font-size-sm);
                }
                
                .icon-box.view-password svg:last-of-type, .icon-box.view-password.change svg:first-of-type {
                    display: none;
                }
                
                .icon-box.view-password.change svg:last-of-type {
                    display: block;
                }
            </style>
                
            <slot name="prefix"></slot>
            
            <div class="input-box">
                <slot></slot>
            </div>
            
            <span class="icon-box clear">
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                   <path d="M512 32c265.12 0 480 214.88 480 480s-214.976 480-480 480S32 777.024 32 512 246.88 32 512 32z m-158.4 276.352a32 32 0 1 0-45.248 45.248l158.4 158.4-158.4 158.4a32 32 0 1 0 45.248 45.248l158.4-158.4 158.4 158.4a32 32 0 1 0 45.248-45.248L557.248 512l158.4-158.4a32 32 0 1 0-45.248-45.248L512 466.752z"></path>
               </svg>
            </span>
            
            <span class="icon-box view-password">
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                   <path d="M992 512.096c0-5.76-0.992-10.592-1.28-11.136-0.192-2.88-1.152-8.064-2.08-10.816-0.256-0.672-0.544-1.376-0.832-2.08-0.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160 316.928 160 126.368 290.016 38.24 482.592c-1.056 2.112-1.792 4.096-2.272 5.856-0.224 0.544-0.448 1.088-0.64 1.6-1.76 5.088-1.792 8.64-1.632 7.744-0.832 3.744-1.568 11.168-1.568 11.168-0.224 2.272-0.224 4.032 0.032 6.304 0 0 0.736 6.464 1.088 7.808 0.128 1.824 0.576 4.512 1.12 6.976l-0.032 0c0.448 2.08 1.12 4.096 1.984 6.08 0.48 1.536 0.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912 0.256-0.608 0.48-1.184 0.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32 0 0 0 0-0.032 0.032C991.04 522.272 992 517.632 992 512.096zM927.328 514.464c-0.032 0.16-0.096 0.32-0.128 0.48-0.128 0.416-0.288 0.864-0.416 1.376C848.032 686.08 681.696 800 512 800c-169.28 0-335.328-113.568-414.88-283.968-0.16-0.576-0.32-1.152-0.512-1.696-0.064-0.544-0.16-1.024-0.192-1.344-0.064-0.352-0.128-0.8-0.192-1.248l0.032-0.416c0.16-0.704 0.288-1.44 0.384-2.208 0.128-0.416 0.256-0.832 0.384-1.28C175.84 337.984 342.304 224 512 224c169.76 0 336.192 114.08 414.752 283.68 0.096 0.32 0.16 0.608 0.256 0.832 0.064 0.288 0.16 0.576 0.256 0.864 0.16 1.28 0.32 2.528 0.48 3.168C927.552 513.184 927.456 513.824 927.328 514.464z"></path>
                   <path d="M512 352c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160S600.224 352 512 352zM512 608c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96S564.928 608 512 608z"></path>
                </svg>
               
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M605.376 490.528l61.696 59.04C670.016 537.44 672 524.992 672 512c0-88.224-71.776-160-160-160-15.424 0-30.016 2.88-44.16 6.976l61.44 58.784C566.944 424.64 596.832 453.472 605.376 490.528z" ></path>
                    <path d="M556.256 664.992l-61.376-58.752c-37.792-6.848-67.84-35.744-76.32-72.96l-61.632-58.944C353.984 486.496 352 498.976 352 512c0 88.224 71.776 160 160 160C527.456 672 542.08 669.088 556.256 664.992z"></path>
                    <path d="M178.944 136.864C166.144 124.672 145.888 125.12 133.696 137.888 121.472 150.656 121.92 170.912 134.688 183.136l736 704C876.896 893.056 884.832 896 892.8 896c8.448 0 16.832-3.328 23.136-9.888 12.224-12.768 11.744-33.024-0.992-45.248L178.944 136.864z"></path>
                   <path d="M512 800c-169.28 0-335.328-113.568-414.88-283.936-0.16-0.608-0.352-1.152-0.544-1.728-0.064-0.544-0.224-0.992-0.288-1.312C96.256 512.672 96 512.224 96 511.776L96 511.36c0-0.736 0.448-1.472 0.544-2.208 0.128-0.448 0.352-0.832 0.48-1.28 29.728-64.128 72-120.256 122.144-165.312L172.864 298.304c-55.488 50.656-102.08 113.152-134.624 184.256-1.056 2.112-1.792 4.096-2.272 5.888-0.256 0.544-0.448 1.056-0.64 1.6-1.76 5.056-1.76 8.48-1.632 7.712-0.8 3.744-1.6 11.2-1.6 11.2-0.224 2.24-0.192 4.032 0.064 6.272 0 0 0.704 13.472 1.056 14.816l4.544 13.632C126.4 737.344 316.992 865.76 512 865.76c69.824 0 138.976-17.792 203.104-47.936l-49.856-48.576C616.128 789.12 564.224 800 512 800z"></path>
                   <path d="M992 512.096c0-5.792-0.992-10.592-1.28-11.136-0.192-2.912-1.152-8.096-2.08-10.816-0.256-0.672-0.544-1.376-0.832-2.08-0.48-1.568-1.024-3.104-1.6-4.32C897.664 290.08 707.104 160 512 160c-69.76 0-138.88 16.864-203.008 47.072l49.856 47.648C407.968 234.88 459.808 224 512 224c169.76 0 336.192 114.048 414.752 283.68 0.096 0.32 0.16 0.608 0.256 0.8 0.064 0.288 0.16 0.608 0.256 0.864 0.16 1.28 0.32 2.496 0.48 3.168-0.16 0.672-0.256 1.28-0.384 1.952-0.032 0.16-0.096 0.32-0.128 0.48-0.128 0.416-0.288 0.864-0.416 1.376-29.696 64-71.872 120.032-121.952 165.056l46.336 44.32c55.328-50.496 101.728-112.672 134.016-183.36 1.376-2.496 2.24-4.832 2.848-6.912 0.256-0.608 0.48-1.184 0.672-1.76 1.536-4.48 1.856-8.352 1.728-8.352 0 0 0 0.032-0.032 0.032C991.04 522.272 992 517.664 992 512.096z"></path>
                </svg>
            </span>
            
            <slot name="suffix"></slot>
        `
    }
}

export default createCustomElement("input-component", InputComponent)