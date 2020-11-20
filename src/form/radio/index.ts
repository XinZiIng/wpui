import {pxToVw, $, createCustomElement} from "../../utils"

/**
 * 单选框
 * @docs    请查阅README.md文档
 */
class RadioComponent extends HTMLElement {
    private shadow: ShadowRoot;
    private isConnect: Boolean;
    private activeIndex: number;

    /**
     * 构造器
     */
    constructor() {
        super();

        this.activeIndex = 0;

        this.shadow = this.attachShadow({mode: 'open'})

        this.shadow.innerHTML = this.render();
    }

    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ['value', 'checked', 'disabled'];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.isConnect && oldValue != newValue) {
            let name = $(this).attr("name");

            if (name && newValue === "true") {
                this.setActiveIndex(name);
               this.dispatch('change');
            }
            
            this.dispatch('connect');

            !name ?this.dispatch('change') : "";
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
     * 派发改变时自定义事件
     */
    changed() {
       this.dispatch('change');
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
     * 当点击时
     */
    onClick() {
        let self = this;

        $(this.shadowRoot)
            .on('click', (ev) => {
                if (self.getAttribute('disabled') === "true") return;

                let name = self.getAttribute("name") || "",
                    isSelf = false;

                if (name) {
                    $(`radio-component[name=${name}][checked=true]`)
                        .each((item, i) => {
                            if (item.getAttribute("disabled") === "true") return;

                            if (this == item && item.getAttribute("checked") === "true") {
                                isSelf = true;
                            } else {
                                item.setAttribute("checked", "false");
                            }
                        })
                }

                if ((!name && self.getAttribute("checked") === "true")|| isSelf) return;

                self.setAttribute("checked", "true");
            })
    }

    /**
     * 设置激活索引
     * @param name      组件name属性值
     */
    setActiveIndex(name?:string) {
        !name ? name = $(this).attr("name") : "";

        if (!name) return;

        $(`radio-component[name=${name}]`).each((item, i) => {
            if ($(item).attr("checked") === "true") {
                this.activeIndex = i;
                return false;
            }
        })
    }

    /**
     * 派发事件
     * @param type      事件类型
     */
    dispatch(type:string) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: {
                name: $(this).attr('name'),
                value: $(this).attr('value'),
                size: $(this).attr('size') || 32,
                checked: $(this).attr('checked') === "true",
                disabled: $(this).attr('disabled') === "true",
                activeIndex: this.activeIndex || 0,
            },
        }))
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let size = $(this).attr("size") || 32;
    
        size = pxToVw(size - 2);

        return `
            <style>
                :host {
                    display: inline-flex;
                }
                
                .radio-component {
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
                
                .radio-component .radio-label {
                    margin-left: ${pxToVw(5)};
                }
                
                .radio-component .radio-label:empty {
                    margin-left: 0;
                }
                
                .radio-component .radio-icon {
                    border:  ${pxToVw(2)} solid var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: ${size};
                    height: ${size};
                    transition: .3s;
                    border-radius: 50%
                }
                
                .radio-component .radio-icon::before {
                    content: "";
                    width:  ${size};
                    height:  ${size};
                    border-radius: 50%;
                    transform: scale(0);
                    transition: inherit;
                }
                
                :host([checked=true]) .radio-component .radio-icon {
                    border-color: var(--color-theme)
                }
                
                :host([checked=true]) .radio-component .radio-icon::before {
                    background: var(--color-theme);
                    transform: scale(.5);
                }
                
                :host([disabled=true]) .radio-component {
                    cursor: not-allowed;
                }
                
                :host([disabled=true]) .radio-component .radio-icon {
                    background: var(--bg-disabled);
                }
                
                :host([disabled=true]) .radio-component .radio-label {
                    color: var(--color-disabled);
                }
            </style>
            
            <label class="radio-component">
                <i class="radio-icon"></i>
                <span class="radio-label">
                    <slot></slot>
                </span>
            </label>
        `
    }
}

export default createCustomElement("radio-component", RadioComponent)