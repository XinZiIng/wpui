/**
 * 创建自定义元素装饰器
 */
export default function createCustomElement(name: string, constructor: CustomElementConstructor)  {
    try {
        !customElements.get(name)
            ? customElements.define(name, constructor)
            : "";
    } catch (e) {
        
    }
}