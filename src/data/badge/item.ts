import {$, createCustomElement, pxToVw, CreateHTMLElement} from "../../utils"

/**
 * 微章圆点组件
 */
class BadgeItemComponent extends CreateHTMLElement {
    /**
     * 构造器
     */
    constructor() {
        super();
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.shadow.innerHTML = this.render();

        this.isConnect = true;

        this.dispatch('connect');
    }

    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ["count", "type", "dot-color", "dot-size"];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.isConnect && oldValue != newValue) {

            $(this).attr("type") === "dot" ? this.dotChange(name, newValue) : "";

            $(this).attr("count") === "dot" ? this.countChange(name, newValue) : "";

            this.dispatch('change');
        }

        if (this.isConnect && name == "type") {
            this.shadow.innerHTML = this.render();
        }
    }

    /**
     * 圆点样式重置
     * @param changeAttrName    发现改变的属性名
     * @param newAttrValue      对应样式值
     */
    dotChange(changeAttrName, newAttrValue) {
        let badgeDot =  $(this.shadowRoot).find(".badge-dot");

        // 修改颜色
        if (changeAttrName === "dot-color") {
            $(badgeDot).css("fill", newAttrValue);
        }

        // 修改颜色
        if (changeAttrName === "dot-size") {
            $(badgeDot).css({
                width: pxToVw(newAttrValue),
                height: pxToVw(newAttrValue),
            });
        }
    }

    /**
     * 圆点重置
     * @param changeAttrName    发现改变的属性名
     * @param newAttrValue      对应样式值
     */
    countChange(changeAttrName, newAttrValue) {
        let badgeCount =  $(this.shadowRoot).find(".badge-count");

        // 计数
        if (changeAttrName === "count") {
            $(badgeCount).text(newAttrValue);

            newAttrValue.length > 1
                ? $(badgeCount).addClass("multi")
                : $(badgeCount).removeClass("multi");
        }

        // 背景色
        if (changeAttrName === "count-bg") {
            $(badgeCount).css("background", newAttrValue);
        }

        // 文本色
        if (changeAttrName === "count-color") {
            $(badgeCount).css("color", newAttrValue);
        }
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        let type = $(this).attr("type");

        if (type == "dot") {
            return this.createDot();
        }

        if (type == "count") {
            return this.createCount();
        }

        return this.createOther();
    }

    /**
     * 创建圆点
     */
    createDot() {
        let size = $(this).attr("dot-size");
        !size || size < 0 ? size = 32 : "";

        return `
            <style>
                .badge-dot {
                    display: block;
                    width: ${pxToVw(size)};
                    height: ${pxToVw(size)};
                    fill: ${$(this).attr("dot-color") || `var(--badge-dot-color)`}
                }
            </style>  
                
            <svg class="badge-dot" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 298.666667c117.333333 0 213.333333 96 213.333333 213.333333s-96 213.333333-213.333333 213.333333-213.333333-96-213.333333-213.333333S394.666667 298.666667 512 298.666667z"></path>
            </svg>           
        `
    }

    /**
     * 创建计数
     */
    createCount() {
        let count = $(this).attr("count");

        return `
            <style>
                .badge-count {
                    display: block;
                    min-width: ${pxToVw(40)};
                    height: ${pxToVw(40)};
                    color: white;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: ${pxToVw(40)};
                    white-space: nowrap;
                    text-align: center;
                    background: ${$(this).attr("count-bg") || `var(--badge-dot-color)`};
                    border-radius: ${pxToVw(20)};
                }
                
                .badge-count.multi {
                    min-width: ${pxToVw(28)};
                    padding: ${pxToVw(0, 18)};
                }
            </style>  
            
            <span class="badge-count ${count > 1 ? 'multi' : ''}">${count || 0}</span>
        `
    }

    /**
     * 创建其他
     */
    createOther() {
        return `
            <slot></slot>
        `
    }
}
export default createCustomElement("badge-item", BadgeItemComponent)