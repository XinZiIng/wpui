import "./../Drawer"
import {$, pxToVw} from "../../utils"
import OptionsInterface from "./index.d"

/**
 * 弹出式提示
 * @docs    请查阅README.md文档
 */
export default class Toast {
    /**
     * 构造器
     * @param options       配置参数，可接受对象或非字符串
     * @param afterClose    在提示框关闭后，该参数仅在简阶版生效
     */
    constructor(options: OptionsInterface | string, afterClose?: Function) {
        let newOptions = typeof options !== "object"
            ? { content: options, afterClose}
            : options;

        this.render(newOptions);
    }

    /**
     * 渲染
     * @param options   配线参数
     */
    render(options) {
        let {
                icon,
                align,
                delay,
                content,
                borderRadius,
                afterClose,
            } = options;

        let div = document.createElement("div"),
            drawerComponent;

        div.innerHTML = `
            <drawer-component 
                visible="true"
                mask-closable="false"
                mask-bg="transparent"
                mask-blur="0"
                align="${align || 'center'}"
            >
                <style>
                    drawer-component .toast-component {
                        max-height: 98vh;
                        color: white;
                        margin: ${pxToVw(20)};
                        box-sizing: border-box;
                        overflow: auto;
                        -webkit-overflow-scrolling: touch;
                        border-radius: ${pxToVw(borderRadius || 8)};
                        line-height: ${pxToVw(40)};
                        padding: ${pxToVw(10, 30)};
                        background: var(--mask-black);
                        word-break: break-word;
                    }
                    
                    drawer-component .toast-component.has-icon {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: ${pxToVw(10, 20)};
                    }
                    
                    drawer-component .toast-component .toast-icon {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: ${pxToVw(100)};
                        font-size: ${pxToVw(100)};
                        margin-top: ${pxToVw(20)};
                    }
                    
                    drawer-component .toast-component .toast-content {
                        min-width: ${pxToVw(180)};
                        padding: ${pxToVw(20)} 0;
                        font-size: ${pxToVw(28)};
                    }
                </style>
                
                <div class="toast-component ${icon ? 'has-icon' : 'no-icon'}">
                    <div class="toast-wrapper">
                        ${icon ? `<div class="toast-icon">${icon}</div>` : ''}
                        <div class="toast-content">${content}</div>
                    </div>
                </div>
            </drawer-component>
        `

        drawerComponent = div.children[0];
        document.body.appendChild(drawerComponent)

        // 延时隐藏
        setTimeout(
            () => $(drawerComponent).attr("visible", false),
            delay || 2500
        );

        // 绑定事件
        this.bind(drawerComponent, afterClose);
    }

    /**
     * 绑定事件
     * @param el        <drawer-component/>元素
     * @param afterClose   组件属性改变时回调事件类型
     */
    bind(el, afterClose) {
        $(el)
            // 属性改变时
            .on("change", ev => afterClose?.(ev))

            // 在关闭后
            .on("afterClose", () => $(el).remove())
    }
}