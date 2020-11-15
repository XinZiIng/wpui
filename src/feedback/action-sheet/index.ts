import Drawer from "./../drawer/index"
import {$, pxToVw} from "../../utils/index"
import {OptionsInterface} from "./index.d"

new Drawer();

/**
 * 弹出式菜单
 * @param {string} options.title                定义该组件标题文本
 * @param {array} options.data                  定义该组件菜单数据配置项
 * @param {string} options.data[i].text         定义该组件菜单数据项文本
 * @param {boolean} options.data[i].isActive    定义该组件菜单数据项是否默认激活；默认`false`
 * @param {boolean} options.data[i].isDisabled  定义该组件菜单数据项是否默认禁用；默认`false`
 * @param {string} options.footerButtonText     定义该组件底部操作按钮文本
 * @param {number} options.borderRadius         定义该组件圆角样式；默认`24`
 * @param {number} options.blur                 定义该组件遮罩层模糊样式；默认`6`
 * @param {function} options.changed            组件属性改变时回调，当显示隐藏时，都会触发回调，可通过监听`arguments[0].detail.visible`识别
 * @param {function} options.onClick            菜单项点击时回调，接收两个参数，参数一返回当前菜单项数据，参数二返回当前菜单项索引；注意：默认禁用的菜单项将不会触发
 */

export default class ActionSheet {
    private ID: number;

    /**
     * 构造器
     * @param options   配线参数，可接受对象或非对象
     */
    constructor(options:OptionsInterface) {
        this.ID = new Date().getTime();

        this.render(options);
    }

    /**
     * 渲染
     * @param options   配线参数
     */
    render(options) {
        let {
            title,
            footerButtonText,
            borderRadius,
            changed,
            onClick,
            blur,
            data
        } = options;

        let ActionSheetElement = $(`#ActionSheet-${this.ID}`);
        if(ActionSheetElement.length) {
            return $(ActionSheetElement).attr("visible", "true");
        }

        let div = document.createElement("div"),
            drawerComponent;

        div.innerHTML = `
            <drawer-component 
                visible="true"
                mask-closable="true"
                align="bottom"
                blur="${blur}"
                id="ActionSheet-${this.ID}"
            >
                <style>
                    .action-sheet-component {
                        background: white;
                        border-radius: ${pxToVw(borderRadius, borderRadius, 0, 0)};
                    }
                    
                    .action-sheet-header, .action-sheet-footer, .action-sheet-main li {
                        height: 50px;
                    }
                    
                    .action-sheet-main {
                        max-height: 70vh;
                    }
                    
                    .action-sheet-footer {
                        border-top: ${pxToVw(16)} solid var(--border-1px-color);
                        font-size: ${pxToVw(32)};
                        cursor: pointer;
                    }
                </style>
                
                <div class="action-sheet-component overflow-hidden">
                    ${
                        title
                            ? `
                                <div class="action-sheet-header justify-content-center align-items-center color-gray-light">
                                    <div class="font-size-sm line-clamp-2 padding-right-md padding-left-md">${title}</div>
                                </div>
                            `
                            : ``
                    }
                    
                    <div class="action-sheet-main overflow-y-auto">
                        <ul>
                            ${
                                data.map((item, i) => {
                                    return `
                                        <li 
                                            class="justify-content-center align-items-center cursor-pointer border-top ${item.isActive ? 'color-theme' : ''} ${item.isDisabled ? 'color-disabled cursor-not-allowed' : ''}" 
                                            data-index="${i}"
                                        >
                                            <div class="line-clamp-2 padding-right-md padding-left-md">${item.text}</div>
                                        </li>
                                    `
                                }).join("")
                            }
                        </ul>
                    </div>
                    
                    ${
                         footerButtonText
                            ? `
                                <div class="action-sheet-footer justify-content-center align-items-center">${footerButtonText}</div>
                            `
                            : ``
                    }
                </div>
            </drawer-component>
        `

        drawerComponent = div.children[0];

        document.body.appendChild(drawerComponent);

        // 绑定事件
        this.bind(drawerComponent, data, changed, onClick);
    }

    /**
     * 绑定事件
     * @param el        <drawer-component/>元素
     * @param data      组件按钮组配置项
     * @param changed   组件属性改变时回调事件类型
     * @param onClick   当事件点击时
     */
    bind(el, data, changed, onClick) {
        $(el)
            // 属性改变时
            .on("changed", ev => changed?.(ev))

            // 点击时
            .on("click", ev => {
                let target = ev.target;
                let li = target.parentNode.tagName === "LI" ? target.parentNode : target;

                if ($(target).hasClass("action-sheet-footer")) {
                    return $(el).attr("visible", "false");
                }


                if (li.tagName === "LI" && !$(li).hasClass("color-disabled")) {
                    $(el)
                        .attr("visible", "false")
                        .find("li.color-theme")
                        .removeClass("color-theme");

                    let
                        i = $(li)
                            .addClass("color-theme")
                            .attr("data-index"),

                        item = {
                            ...data[i],
                            isActive: true,
                        };

                    onClick(item, Number(i));
                }
            })
    }
}