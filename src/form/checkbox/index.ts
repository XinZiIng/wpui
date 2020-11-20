import {$, pxToVw, CustomElement} from "../../utils/index"

/**
 * 复选框组件
 * @attr [name]     定义该组件的名称，同个值中只能选中一个
 * @attr [size]     定义该组件的尺寸；默认`32`；当该值改变时可触发`changed`事件
 * @attr [value]    定义该组件的值，当该值改变时可触发；当该值改变时可触发`changed`事件
 * @attr [checked]  定义该组件是否选中状态，可接收`true`或`false`；当该值改变时可触发`changed`事件
 *  [disabled=xx]   定义该组件是否禁用状态，可接收`true`或`false`；当该值改变时可触发`changed`事件
 */
@CustomElement("checkbox-component")
export default class CheckboxComponent extends HTMLElement {
    private shadow: ShadowRoot;
    private isConnect: Boolean;
    /**
     * 构造器
     */
    constructor() {
        super();

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
           this.dispatch('change');
        }
    }

    /**
     * 获取属性集
     * @returns {{checked: boolean, disabled: boolean, isCheckedAll: boolean}}
     */
    getAllAttrs() {
        let res = {
                checked: $(this).attr('checked') === "true",
                disabled: $(this).attr('disabled') === "true",
                isCheckedAll: false,
            },
            name = $(this).attr('name');

        if (name) {
            let
                // 所有同名组件元素
                allCheckbox = $(`checkbox-component[name=${name}]`),

                // 所有同名选中状态组件元素
                allCheckedCheckbox = $(`checkbox-component[name=${name}][checked=true]`),

                // 所有同名禁用状态组件元素
                allDisabledCheckbox = $(`checkbox-component[name=${name}][disabled=true]`);

            res.isCheckedAll = allCheckbox.length === allCheckedCheckbox.length + allDisabledCheckbox.length;

        } else {
            res.isCheckedAll = res.checked;
        }

        return res;
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
     * 当点击时
     */
    onClick() {
        let self = this;

        $(this.shadowRoot)
            .on('click', (ev) => {
                ev.stopPropagation();
                ev.preventDefault();

                if ($(self).attr('disabled') === "true") return;

                let isReverseChecked = !($(self).attr("checked") === "true");

                $(self).attr("checked", isReverseChecked);
            })
    }

    /**
     * 派发事件
     * @param type      事件类型
     */
    dispatch(type) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: this.getAllAttrs(),
        }))
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let size:number = Number($(this).attr("size")) || 32,
            borderRadius = $(this).attr("border-radius") || "4";

        if (borderRadius.includes("%")) {
            borderRadius = `${parseFloat(borderRadius)}%`;
        } else {
            borderRadius = parseFloat(borderRadius);
            isNaN(borderRadius) ? borderRadius = 4 : "";

            borderRadius = pxToVw(borderRadius);
        }

        size -= 2;

        return `
            <style>
                :host {
                    display: inline-flex;
                }
                
                .checkbox-component {
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
                
                .checkbox-component .checkbox-label {
                    margin-left: 5px;
                }
                
                .checkbox-component .checkbox-label:empty {
                    margin-left: 0;
                }
                
                .checkbox-component .checkbox-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: ${pxToVw(size)};
                    height: ${pxToVw(size)};
                    border: ${pxToVw(2)} solid var(--border-color);
                    border-radius: ${borderRadius};
                    transition: .3s;
                }
                
                .checkbox-component .checkbox-icon::before {
                    content: "";
                    width: ${pxToVw(size / 4)};
                    height: ${pxToVw(size / 2)};
                    border: ${pxToVw(4)} solid #fff;
                    border-top: 0;
                    border-left: 0;
                    transform: rotate(45deg) scale(0);
                    transform-origin: center !important;
                    transition: inherit;
                    transition-delay: 50ms
                }
                
                :host([checked=true]) .checkbox-component .checkbox-icon {
                    background: var(--color-theme);
                    border-color: var(--color-theme)
                }
                
                :host([checked=true]) .checkbox-component .checkbox-icon::before {
                    transform: rotate(45deg) scale(1) translate3d(-8%, -8%, 0);
                }
                
                :host([disabled=true]) .checkbox-component {
                    cursor: not-allowed;
                }
                
                :host([disabled=true]) .checkbox-component .checkbox-icon {
                    opacity: .6;
                    background: var(--bg-disabled);
                }
                
                :host([disabled=true][checked=true]) .checkbox-component .checkbox-icon {
                    background: var(--color-theme);
                }
                
                :host([disabled=true]) .checkbox-component .checkbox-label {
                    color: var(--color-disabled);
                }
            </style>
            
            <label class="checkbox-component">
                <i class="checkbox-icon"></i>
                <span class="checkbox-label">
                    <slot></slot>
                </span>
            </label>
        `
    }
}