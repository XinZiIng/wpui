import {createCustomElement, CreateHTMLElement} from "../../utils"
import "./item";

/**
 * 微章组件
 */
class BadgeComponent extends CreateHTMLElement {
    /**
     * 构造器
     */
    constructor() {
        super();

        this.shadow.innerHTML = this.render();
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        return `
            <style>
                
            </style>  
                
            <slot></slot>
        `
    }
}

export default createCustomElement("badge-component", BadgeComponent)