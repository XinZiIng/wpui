import {createCustomElement} from "../../utils"

/**
 * 面包屑子项
 */
class BreadcrumbItem extends HTMLElement {

    /**
     * 构造器
     */
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'})

        shadow.innerHTML = this.render();
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