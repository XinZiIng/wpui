import {$, pxToVw, CustomElement} from "../../utils/index"

/**
 * 单选框组件
 * @attr [name]         定义该组件的名称；当选中状态改变时，会根据该属性值是否一致来判断是否全选
 * @attr [size]         定义该组件的尺寸；默认`48`
 * @attr [value]        定义该组件的值，当该值改变时可触发；当该值改变时可触发`changed`事件
 * @attr [checked]      定义该组件是否选中状态，可接收`true`或`false`；当该值改变时可触发`changed`事件
 * @attr [disabled]     定义该组件是否禁用状态，可接收`true`或`false`；当该值改变时可触发`changed`事件
 */
@CustomElement("switch-component")
export default class SwitchComponent extends HTMLElement {
    private shadow: ShadowRoot;
    private isOnce: Boolean;

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
        if (this.isOnce && oldValue != newValue) {
            this.dispatch('changed');
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.isOnce = true;
        this.dispatch('connected');
        this.dispatch('changed');

        this.onClick();
    }

    /**
     * 派发改变时自定义事件
     */
    changed() {
        this.dispatch('changed');
    }

    /**
     * 当自定义元素与文档DOM断开连接时被调用（关闭当前窗口不会被调用）
     */
    disconnectedCallback() {
        this.dispatch('disconnected');
    }

    /**
     * 当自定义元素被移动到新文档时被调用
     */
    adoptedCallback() {
        this.dispatch('adopted');
    }

    /**
     * 当点击时
     */
    onClick() {
        let self = this;

        $(this.shadowRoot)
            .on('click', (ev) => {
                if ($(self).attr('disabled') === "true") return;

                let isChecked = !($(self).attr("checked") === "true");

                $(self).attr("checked", isChecked);

                self.dispatch('changed');
            })
    }

    /**
     * 派发事件
     * @param type      事件类型
     */
    dispatch(type) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: {
                name: $(this).attr('name'),
                value: $(this).attr('value'),
                size: $(this).attr('size'),
                checked: $(this).attr('checked') === "true",
                disabled: $(this).attr('disabled') === "true",
            },
        }))
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let size:number = Number($(this).attr("size")) || 48,
            width:number = Math.round(size * 1.6);

        return `
            <style>
                :host {
                    display: inline-flex;
                }
                
                .switch-component {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    width: ${pxToVw(width)};
                    height: ${pxToVw(size)};
                    padding: 0;
                    background: #FDFDFD;
                    border-radius: ${pxToVw(size / 2)};
                    box-sizing: border-box;
                    border: ${pxToVw(2)} solid var(--other-border-color, #d9d9d9);
                    transition: background-color 0.1s,border 0.1s;
                    overflow: hidden;
                }
                
                .switch-component .switch-icon {
                    width: ${pxToVw(size - 4)};
                    height: ${pxToVw(size - 4)};
                    border-radius: 19px;
                    background: white;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
                    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
                }
                
                :host([checked=true]) .switch-component {
                    background: var(--color-theme, #6dcfff);
                    border-color: var(--color-theme, #6dcfff);
                }
                
                :host([checked=true]) .switch-component {
                    background: var(--color-theme, #6dcfff);
                    border-color: var(--color-theme, #6dcfff);
                }
                
                :host([checked=true]) .switch-component .switch-icon {
                    transform: translateX(${pxToVw(width - size)});
                }
                
                :host([disabled=true]) .switch-component {
                    cursor: not-allowed;
                    background: var(--bg-disabled, #f5f5f5);
                    opacity: .5;
                }
                
                :host([disabled=true][checked=true]) .switch-component {
                    cursor: not-allowed;
                    background: var(--color-theme, #6dcfff);
                }
            </style>
            
            <label class="switch-component">
                <i class="switch-icon"></i>
            </label>
        `
    }
}
