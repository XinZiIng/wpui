/**
 * 工具类
 */
class $$ {
    private options: string | HTMLElement | object;
    private selector: any[];
    private length: number;

    constructor(options: string | HTMLElement | object | Array<HTMLElement>) {
        if (!options) return;

        this.options = options;

        let selector: Array<HTMLElement> = [];

        if (typeof options === "object") {
            // DOM
            if ("nodeType" in options && options.nodeType) {
                selector = [options];
            }

            // @ts-ignore
            // $对象
            if (options.selector && options.selector.length && options.selector[0].nodeType) {

                // @ts-ignore
                selector = [...options.selector];

                // @ts-ignore
                // DOM数组
            } else if (options.length && options[0].nodeType) {

                // @ts-ignore
                selector = [...options];
            }
        }

        if (typeof options === "string") {
            // @ts-ignore
            selector = [...document.querySelectorAll(options)];
        }

        this.selector = selector || [];
        this.length = this.selector.length;
    }

    /**
     * 事件绑定
     * @param type          事件类型
     * @param handler       事件处理把柄
     */
    on(type: string | Array<string>, handler: Function) {

        typeof type === "string"
            ? type = type?.replace(/\s/g, "").split(",")
            : "";

        this.each(type, (item: string) => this.addEvent(item, handler));

        return this;
    }

    /**
     * 添加事件
     * @param type          事件类型
     * @param handler       事件处理把柄
     */
    addEvent(type: string, handler: Function) {
        this.each((node: HTMLElement) => {

            if (type === "click" && 'ontouchstart' in document.documentElement) {
                let t = new Date().getTime();

                node.addEventListener('touchstart', function () {
                    node.removeAttribute(`data-touchmove-${t}`)
                })

                node.addEventListener('touchmove', function () {
                    node.setAttribute(`data-touchmove-${t}`, "true");
                })

                node.addEventListener('touchend', function (ev:any) {
                    node.getAttribute(`data-touchmove-${t}`) !== "true"
                        ? handler(ev)
                        : "";
                })

            } else {
                node.addEventListener(type, function (ev) {
                    handler.call(this, ev)
                })
            }
        })

        return this;
    }

    /**
     * 查找子元素
     * @param selector      子元素选择器
     * @param isAll         是否查找所有子元素;默认true
     */
    find(selector: string, isAll: boolean = true) {
        if (!selector || !selector.length) return this;

        let array = selector.split(","),
            result: Array<HTMLElement> = [];

        this.each((node: HTMLElement) => {
            this.each(array, (item: string) => {
                item = item.trim();

                if (item) {
                    let nodes: any;

                    if (isAll) {
                        nodes = node.querySelectorAll(item);

                    } else {
                        nodes = node.querySelector(item);
                        nodes = nodes ? [nodes] : [];
                    }

                    result.push(...nodes);
                }
            });
        });

        this.selector = result;
        this.length = result.length;
        return this;
    }

    /**
     * 获取DOM数组
     * @param i             DOM数组指定下标
     * @returns {*[]|*}     返回DOM数组或单个DOM
     */
    get(i: number) {
        if (typeof i !== "undefined") {
            i %= this.selector.length;

            if (i < 0) {
                i = this.selector.length + i;
            }

            return this.selector[i];

        } else {
            return this.selector;
        }
    }

    /**
     * 添加DOM指定ClassName
     */
    addClass(className:string, ...restOfClassName: string[]) {
        this.classHandler("add", arguments);
        return this;
    }

    /**
     * 判断DOM是否有指定ClassName
     * @return {boolean}    返回true为在当前DOM含有指定ClassName;反之为false
     */
    hasClass(className: string) {
        return this.classHandler("contains", arguments);
    }

    /**
     * 删除DOM指定ClassName
     */
    removeClass(className:string, ...restOfClassName: string[]) {
        this.classHandler("remove", arguments);
        return this;
    }

    /**
     * DOM添加或删除ClassName
     */
    toggleClass(className: string) {
        this.classHandler("toggle", arguments);
        return this;
    }

    /**
     * 类名操作
     * @param key       操作类型
     * @param value     操作值
     * @return {$}
     */
    classHandler(key: string, value: any) {
        value = Array.from(value);

        let isContains = key === "contains",
            result = isContains ? false : this;

        if (!value.length) return result;

        this.each((node: HTMLElement) => {
            if (!node || node.nodeType !== 1) return;

            let result2: any;

            if (isContains || key === "toggle") {
                // @ts-ignore
                result2 = value.map(v => node.classList[key](v)).includes(true)
            } else {
                // @ts-ignore
                result2 = node.classList[key](...value)
            }

            if (isContains && result2) {
                result = true;
                return false;
            }
        });

        return result;
    }

    /**
     * DOM属性操作
     * @param attrName              将要操作的属性名
     * @param attrValue             将要赋值的属性值
     * @return {undefined|*|[]|$}  attrValue参数不存在时,返回attrName属性值
     */
    attr(attrName: string, attrValue?: any) {
        if (typeof attrValue === "undefined") {
            let result: Array<any> = [];

            this.each((node: HTMLElement) => {
                let value = node.getAttribute(attrName);
                value !== null ? result.push(value) : "";
            });

            return !result.length
                ? undefined
                : (result.length === 1 ? result[0] : result);
        } else {
            this.each((node: HTMLElement) => {
                node.setAttribute(attrName, attrValue);
            });
            return this;
        }
    }

    /**
     * 删除DOM指定属性名
     * @param attrName      将要操作的属性名
     */
    removeAttr(attrName: string | Array<any>) {
        typeof attrName === "string"
            ? attrName = attrName?.replace(/\s/g, "").split(",")
            : "";

        this.each((node: HTMLElement) => {
            this.each(attrName, (item: string) => {
                node.removeAttribute(item);
            });
        });

        return this;
    }

    /**
     * DOM内联html操作
     * @param html          将要填充的html字符串
     * @return {*|[]|$}    html参数不存在时,将返回内联html参数字符串
     */
    html(html: any) {
        return this.htmlOrTextHandler('innerHTML', html);
    }

    /**
     * DOM内联text操作
     * @param text          将要填充的text字符串
     * @return {*|[]|$}    text参数不存在时,将返回内联text参数字符串
     */
    text(text: any) {
        return this.htmlOrTextHandler('innerText', text);
    }

    /**
     * DOM html或text操作
     * @param key                   操作对象名
     * @param value                 操作对象值
     * @return {undefined|*|[]|$}  设置值或获取值
     */
    htmlOrTextHandler(key: string, value: any) {
        if (typeof value === "undefined") {
            let result: Array<any> = [];

            this.each((node: HTMLElement) => {
                // @ts-ignore
                let getValue = node[key];
                getValue !== null ? result.push(getValue) : "";
            });

            return !result.length
                ? undefined
                : (result.length === 1 ? result[0] : result);

        } else {
            this.each((node: HTMLElement) => {
                // @ts-ignore
                node[key] = value
            });
            return this;
        }
    }

    /**
     * 删除DOM操作
     */
    remove() {
        this.each((node: HTMLElement) => {
            node && node.parentNode
                ? node.parentNode.removeChild(node)
                : "";
        });

        return this;
    }

    /**
     * 循环操作
     * @param data                  循环数据或回调
     * @param callback              循环后回调
     * @param isReturnArray         是否将循环数据以数组格式返回;默认false
     * @return {string|[]}          返回循环数据值
     */
    each(data: any, callback?: Function | boolean, isReturnArray?: boolean) {

        if (typeof data === "function") {
            callback = data;
            data = this.selector;
        }

        if (!data || !callback) return this;

        let result: Array<any> = [],
            isStringType: boolean = true,
            handler: Function = (self: any, index: any, item: any) => {
                return typeof callback !== "boolean"
                    ? callback?.call(self, index, item)
                    : "";
            };

        if (data.constructor === Object) {
            for (let item in data) {
                if (data.hasOwnProperty(item)) {
                    let currentResult = handler(data[item], item, data[item]);

                    if (currentResult === false || !data) break;

                    typeof currentResult !== "undefined" ? result.push(currentResult) : "";

                    isStringType = typeof currentResult === "string";
                }
            }
        }

        if (data.constructor === Number) {
            for (let i = 0; i < data; i++) {
                let currentResult = handler("", i, i);

                if (currentResult === "break" || currentResult === false) break;

                typeof currentResult !== "undefined" ? result.push(currentResult) : "";
                isStringType = typeof currentResult === "string";
            }

        } else {
            data = [...data];

            if (data.includes(undefined)) {
                data = data.filter((item: any) => typeof item !== 'undefined');
            }

            for (let i = 0, len = data.length; i < len; i++) {
                let currentResult = handler(data[i], data[i], i);

                if (currentResult === "break" || currentResult === false) break;

                typeof currentResult !== "undefined" ? result.push(currentResult) : "";
                isStringType = typeof currentResult === "string";
            }
        }

        return isReturnArray
            ? result
            : (
                result.length === 1
                    ? result[0]
                    : (isStringType ? result.join("") : result)
            );
    }
}

/**
 * px转换vw
 * @returns {string}    处理后的样式值
 */
export function pxToVw(...args:any) {
    const isPXToVW = false;
    let res = "";

    for (let i = 0; i < arguments.length; i++) {
        let item = arguments[i];
        let newItem = parseFloat(item);

        if (isNaN(newItem)) {
            res += item;

        } else if (isPXToVW) {
            res += `${(newItem / 7.5).toFixed(2)}vw`;

        } else {
            res += `${Math.round(newItem / 2)}px`;
        }

        res += " ";
    }

    return res
}

/**
 * 二次封装工具类
 */
export function $(options: any) {
    return new $$(options);
}

/**
 * 自定义元素装饰器
 */
export function CustomElement(name: string)  {
    return (target: any) => {
        !customElements.get(name)
            ? customElements.define(name, target)
            : "";
    }
}