import Drawer from "./../drawer"
import {$, pxToVw} from "../../utils"
import OptionsInterface from "./index.d"

new Drawer();

/**
 * 弹出式菜单
 * @docs    请查阅README.md文档
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
     * 设置显示隐藏
     * @param bool      true显示，反之隐藏
     */
    setVisible(bool:boolean) {
        $(`#ActionSheet-${this.ID}`).attr("visible", bool);
    }

    /**
     * 渲染
     * @param options   配线参数
     */
    render(options) {
        let {
            visible,
            maskClosable,
            maskBlur,
            title,
            footerButtonText,
            borderRadius,
            onChange,
            onClick,
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
                align="bottom"
                id="ActionSheet-${this.ID}"
                visible="${visible || false}"
                mask-blur="${maskBlur || 6}"
                mask-mlosable="${maskClosable || true}"
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
                        border-top: ${pxToVw(16)} solid var(--border-color-light);
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
        this.bind(drawerComponent, data, onChange, onClick);
    }

    /**
     * 绑定事件
     * @param el        <drawer-component/>元素
     * @param data      组件按钮组配置项
     * @param onChange  组件属性改变时回调事件类型
     * @param onClick   当事件点击时
     */
    bind(el, data, onChange, onClick) {
        $(el)
            // 属性改变时
            .on("change", ev => onChange?.(ev))

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