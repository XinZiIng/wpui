import {$, createCustomElement, pxToVw, CreateHTMLElement} from "../../utils"
import "./item";

/**
 * 面包屑组件
 */
class BreadcrumbComponent extends CreateHTMLElement {
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
                ::slotted(breadcrumb-item)::after {
                    display: block;
                    content: "${$(this).attr("separator") || "/"}";
                    margin: ${pxToVw( 0, 16)};
                }
            </style>  
                
            <slot></slot>
        `
    }
}

export default createCustomElement("breadcrumb-component", BreadcrumbComponent)