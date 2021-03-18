import {createCustomElement, CreateHTMLElement} from "../../utils"

/**
 * 面包屑子项
 */
class BreadcrumbItem extends CreateHTMLElement {
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
            <slot></slot>
        `
    }
}

export default createCustomElement("breadcrumb-item", BreadcrumbItem)